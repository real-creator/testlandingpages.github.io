package com.freecode.earningwheel.realcashapp;


import android.app.Dialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.Toast;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.io.IOException;
import java.lang.reflect.Type;
import java.util.List;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

import java.util.Random;

public class Activity_Spin_Wheel extends AppCompatActivity {

    String currentScore;
    int degree = 0;
    int degreeOld = 0;
    ImageButton spinButton;
    ImageView wheelImage;
    int intValue;
    Random random;
    RelativeLayout walletLayout;
    int score = 0;
    TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.spin_layout);

        this.wheelImage = findViewById(R.id.wheel);
        this.spinButton = findViewById(R.id.button);
        this.textView = findViewById(R.id.textview);
        this.walletLayout = findViewById(R.id.rl_goto_wallet);

        this.walletLayout.setOnClickListener(new OnClickListener() {
            public void onClick(View view) {
                startActivity(new Intent(Activity_Spin_Wheel.this, Activity_Redeem.class));
            }
        });

        this.currentScore = currentNumber(360 - (this.degree % 360));
        this.random = new Random();

        this.spinButton.setOnClickListener(new OnClickListener() {
            public void onClick(View view) {
                spinWheel();
            }
        });
    }

    private void spinWheel() {
        // ...

        this.spinButton.setEnabled(false);
        this.textView.setText("Wait..");

        final List<Offer> offers; // declare as final

        new Thread(new Runnable() {
            public void run() {
                try {
                    offers = getOffers(); // assign value to final variable
                    runOnUiThread(new Runnable() {
                        public void run() {
                            showOfferDialog(offers);
                        }
                    });
                } catch (IOException e) {
                    e.printStackTrace();
                } finally {
                    runOnUiThread(new Runnable() {
                        public void run() {
                            spinButton.setEnabled(true);
                        }
                    });
                }
            }
        }).start();
    }


    private void showOfferDialog() {
        // Create custom dialog object
        final Dialog dialog = new Dialog(Activity_Spin_Wheel.this);
        // Set the custom dialog layout
        dialog.setContentView(R.layout.offer);

        // Find the ScrollView and LinearLayout in the offers.xml layout
        ScrollView scrollView = dialog.findViewById(R.id.scroll_view);
        LinearLayout linearLayout = dialog.findViewById(R.id.offer_list);

        // Get the offers from the database
        List<Offer> offers = getOffers();

        // Create a TextView for each offer and add it to the LinearLayout
        for (Offer offer : offers) {
            TextView textView = new TextView(Activity_Spin_Wheel.this);
            textView.setText(offer.getTitle() + " - " + offer.getDescription());
            textView.setTextSize(16);
            textView.setPadding(0, 0, 0, 16);
            textView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    // Perform action when offer is clicked
                    Toast.makeText(Activity_Spin_Wheel.this, "Offer clicked: " + offer.getTitle(), Toast.LENGTH_SHORT).show();
                    dialog.dismiss(); // Close the dialog
                }
            });
            linearLayout.addView(textView);
        }

        // Set the cancel button to close the dialog
        Button cancelButton = dialog.findViewById(R.id.cancel_button);
        cancelButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });

        // Show the custom dialog
        dialog.show();
    }



    private String currentNumber(int i) {
        String str = "";
        float f = (float) i;
        if (f >= 15.0f && f < 45.0f) {
            str = "2";
        }
        if (f >= 45.0f && f < 75.0f) {
            str = "3";
        }
        if (f >= 75.0f && f < 105.0f) {
            str = "10";
        }
        if (f >= 105.0f && f < 135.0f) {
            str = "5";
        }
        if (f >= 135.0f && f < 165.0f) {
            str = "6";
        }
        if (f >= 165.0f && f < 195.0f) {
            str = "7";
            this.score += 12;
        }
        return ((f < 345.0f || i >= 360) &&  (i < 0 || f >= 15.0f)) ? str : "0 point";
    }
    private void saveScoreToSharedPreferences() {
        SharedPreferences sharedPreferences = getSharedPreferences("MyPrefs", MODE_PRIVATE);
        Editor editor = sharedPreferences.edit();
        editor.putInt("score", score);
        editor.apply();
    }
    private List<Offer> getOffers() throws IOException {
        OkHttpClient client = new OkHttpClient();
        String apiKey = "17502|2WaPL4GsDYzE97kmziSwqM22scqu49EgiMZ8kZKE";
        Request request = new Request.Builder()
                .url("https://unlockcontent.net/api/v2")
                .header("Authorization", "Bearer " + apiKey)
                .build();
        Response response = client.newCall(request).execute();
        String json = response.body().string();
        Type type = new TypeToken<List<Offer>>() {}.getType();
        return new Gson().fromJson(json, type);
    }


}

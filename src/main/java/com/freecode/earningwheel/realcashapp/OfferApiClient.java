package com.freecode.earningwheel.realcashapp;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.Query;

public class OfferApiClient {
    private static final String BASE_URL = "https://unlockcontent.net/api/v2/";
    private static OfferApi offerApi;

    public static OfferApi getOfferApi(String apiKey) {
        if (offerApi == null) {
            Gson gson = new GsonBuilder()
                    .setLenient()
                    .create();

            Retrofit retrofit = new Retrofit.Builder()
                    .baseUrl(BASE_URL)
                    .addConverterFactory(GsonConverterFactory.create(gson))
                    .build();

            offerApi = retrofit.create(OfferApi.class);
        }

        offerApi.setApiKey(apiKey);

        return offerApi;
    }

    public interface OfferApi {
        @GET("offers")
        Call<OfferApiResponse> getOffers(@Query("ip") String ip,
                                         @Query("user_agent") String userAgent,
                                         @Query("ctype") String ctype,
                                         @Query("max") Integer max,
                                         @Query("min") Integer min,
                                         @Query("aff_sub4") String affSub4,
                                         @Query("aff_sub5") String affSub5);

        void setApiKey(String apiKey);
    }
}

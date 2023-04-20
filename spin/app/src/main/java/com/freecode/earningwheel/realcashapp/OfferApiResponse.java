package com.freecode.earningwheel.realcashapp;

import com.google.gson.annotations.SerializedName;
import java.util.List;

public class OfferApiResponse {
    @SerializedName("success")
    private boolean success;

    @SerializedName("offers")
    private List<Offer> offers;

    public boolean isSuccess() {
        return success;
    }

    public List<Offer> getOffers() {
        return offers;
    }

    public static class Offer {
        @SerializedName("id")
        private int id;

        @SerializedName("title")
        private String title;

        @SerializedName("description")
        private String description;

        @SerializedName("payout")
        private double payout;

        public int getId() {
            return id;
        }

        public String getTitle() {
            return title;
        }

        public String getDescription() {
            return description;
        }

        public double getPayout() {
            return payout;
        }
    }
}

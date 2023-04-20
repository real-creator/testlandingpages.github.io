package com.freecode.earningwheel.realcashapp;

import com.google.gson.annotations.SerializedName;

public class Offer {
    @SerializedName("name")
    private String name;
    @SerializedName("payout")
    private double payout;
    @SerializedName("thumbnail")
    private String thumbnail;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPayout() {
        return payout;
    }

    public void setPayout(double payout) {
        this.payout = payout;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }
}

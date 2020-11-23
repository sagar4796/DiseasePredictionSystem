package com.implementation.diseasePredictionSystem.utils;

public class Response {

    /** The status. */
    private int status;

    /** The status msg. */
    private String status_msg;

    /** The response. */
    private Object response;

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getStatus_msg() {
        return status_msg;
    }

    public void setStatus_msg(String status_msg) {
        this.status_msg = status_msg;
    }

    public Object getResponse() {
        return response;
    }

    public void setResponse(Object response) {
        this.response = response;
    }
}

package com.cognizant.firstdemoproject.security.resources;

import java.io.Serializable;

public class JwtTokenResponse implements Serializable {

  private static final long serialVersionUID = 8317676219297719109L;

  private final String token;

    public JwtTokenResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return this.token;
    }
}
//eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTYxOTY4NzI1NiwiaWF0IjoxNjE5MDgyNDU2fQ.nWxixKdLkT1X7sBHMZlUEBZDGiN4tekVc6j7PqyYg-edu40FmNxys78nDCD2Rb2EhRJG1MmrWw-wxu3h3K_IEA
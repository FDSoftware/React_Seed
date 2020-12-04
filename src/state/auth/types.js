import sessionDuck from ".";

export const LOGIN_REQUEST = sessionDuck.defineType("LOGIN_REQUEST");
export const LOGIN_SUCCESS = sessionDuck.defineType("LOGIN_SUCCESS");
export const LOGIN_FAILURE = sessionDuck.defineType("LOGIN_FAILURE");

export const REFRESH_TOKEN_REQUEST = sessionDuck.defineType("REFRESH_TOKEN_REQUEST");
export const REFRESH_TOKEN_SUCCESS = sessionDuck.defineType("REFRESH_TOKEN_SUCCESS");
export const REFRESH_TOKEN_FAILURE = sessionDuck.defineType("REFRESH_TOKEN_FAILURE");

export const FORGOT_PASS_REQUEST = sessionDuck.defineType("FORGOT_PASS_REQUEST");
export const FORGOT_PASS_SUCCESS = sessionDuck.defineType("FORGOT_PASS_SUCCESS");
export const FORGOT_PASS_FAILURE = sessionDuck.defineType("FORGOT_PASS_FAILURE");

export const NEW_PASS_REQUEST = sessionDuck.defineType("NEW_PASS_REQUEST");
export const NEW_PASS_SUCCESS = sessionDuck.defineType("NEW_PASS_SUCCESS");
export const NEW_PASS_FAILURE = sessionDuck.defineType("NEW_PASS_FAILURE");

export const NEW_PASS_ALERT = sessionDuck.defineType("NEW_PASS_ALERT");
export const NEW_PASS_ALERT_CLEAR = sessionDuck.defineType("NEW_PASS_ALERT_CLEAR");

export const CLEAR_AUTH_DUCK = sessionDuck.defineType("CLEAR_AUTH_DUCK");

export const REFRESH_REQUEST = sessionDuck.defineType("REFRESH_REQUEST");
export const REFRESH_SUCCESS = sessionDuck.defineType("REFRESH_SUCCESS");
export const REFRESH_FAILURE = sessionDuck.defineType("REFRESH_FAILURE");

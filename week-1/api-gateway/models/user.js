/*
============================================
; Title:  Assignment 2.3
; Author: Professor Krasso
; Date:   24 October 2020
; Modified by: Anil Rayamajhi
; Description: API Gateway Part II
;===========================================
*/

var mongoose = require("mongoose");

/**
    Fields username, password, and email
*/
var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

module.exports = mongoose.model("User", userSchema);

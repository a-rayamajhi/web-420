/*
============================================
; Title:  Assignment 2.3
; Author: Professor Krasso
; Date:   24 October 2020
; Modified by: Anil Rayamajhi
; Description: API Gateway Part II
;===========================================
*/

var User = require("../models/user");

// Register a new user on POST
exports.user_register = function (req, res) {
  res.send("NOT IMPLEMENTED: User registration POST");
};
// Verify token on GET
exports.user_token = function (req, res) {
  res.send("NOT IMPLEMENTED: User token lookup GET");
};

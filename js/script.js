// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Displays an alert with the message "Hello, World!"
 */
function doMathClicked() {
  document.getElementById("add-math").innerHTML = "<p>6 + 5 = " + (6 + 5) + "</p>"
  document.getElementById("subtract-math").innerHTML = "<p>7 - 3 = " + (7 - 3) + "</p>"
  document.getElementById("multiply-math").innerHTML = "<p>3 + 4 × 2 = " + (3 + 4 * 2) + "</p>"
  document.getElementById("divide-math").innerHTML = "(4 ÷ 2) + 3 = " + ((4 / 2) + 3) + "</p>"
  document.getElementById("exponent-math").innerHTML = "5 + 2³ = " + (5 + 2**3) + "</p>"
}

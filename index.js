#!/usr/bin/env node
require("node-jquery-xhr");
var KiiSDK = require("./KiiSDK.min.js");
var root = KiiSDK.create();
var clsz = KiiSDK.exportedClasses;
for (var i = 0; i < clsz.length; i++) {
  var n = clsz[i];
  eval(n + " = root." + n);
}


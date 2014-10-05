#!/usr/bin/env node
require("node-jquery-xhr");
var KiiSDK = require("./KiiSDK-2.1.20.min.js");
var root = KiiSDK.create();
var clsz = KiiSDK.exportedClasses;
for (var i = 0; i < clsz.length; i++) {
  var n = clsz[i];
  eval(n + " = root." + n);
}


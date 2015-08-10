/**
 * GCMSender Firefox Addon
 *
 * Copyright (C) 2015 Quaker Chung
 * Author: Quaker NTj
 *      https://github.com/quakerntj/GCMSender
 *
 * This work is licensed under the terms of the GNU GPLv2
**/

var self = require('sdk/self');

var Request = require("sdk/request").Request;
var clipboard = require("sdk/clipboard");
var { ActionButton } = require("sdk/ui/button/action");

var api_key = "AIzaSyD_e8YpgV0tv8geFIAK7YVCe2WfoBkOkUs";
var tmp = "key=";
var key = tmp.concat(api_key);

var preferences = require("sdk/simple-prefs").prefs;

var token = preferences.token;

function onPrefChange(prefName) {
  if (false)
    console.log("The preference " + 
      prefName + 
      " value has changed!");
  token = preferences.token;
}
require("sdk/simple-prefs").on("token", onPrefChange);

function sendClipboard(state) {
  var contents = clipboard.get("text");
  if (!contents)
    return;

  var tmp = '{ "to" : "';
  var newContent = tmp.concat(token, '", "data" : { "message" : "', contents, '" } }');

  var message = Request({
    url: "https://gcm-http.googleapis.com/gcm/send",
    contentType: "application/json",
    headers: {'Authorization' : key},
    content: newContent
  });

  message.post();
}

var button = ActionButton({
    id: "gcmbutton",
    label: "GCM Button",
    icon: {
      "16": "./icon-16.png",
      "32": "./icon-32.png",
      "64": "./icon-64.png"
    },
    onClick: sendClipboard
  });
  
if (false)
  console.log("GCMSender is working");

// https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/simple-prefs

/*
	This is XSS attack module
	This tries to find XSS in signature based


*/

var url = require('../urlUtil.js');
var attackEngine = require('../errorBackend.js');
var http = require('http');
var issueDetection = require('../performInfectionDetection.js');
var vulnURLsArray = [];

//This is injection list
var injectableList = ['\'><script>alert("123")</script>','alert(123);'];

//This is detection list
var detectionArray = ['\'><script>alert("123")</script>','alert(123);'];

var executeAttack = function(httpDataObject){
 attackEngine.doAttacks(httpDataObject,injectableList,detectionArray)

}

exports.executeAttack = executeAttack;

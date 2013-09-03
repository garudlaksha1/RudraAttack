/*
	This is SQL Injection attack module
	This tries to find Database Error Messages. Blind, Union, Time based SQL Injections are not yet detected


*/

var url = require('../urlUtil.js');
var attackEngine = require('../errorBackend.js');
var http = require('http');
var issueDetection = require('../performInfectionDetection.js');
var vulnURLsArray = [];

//This is injection list
var injectableList = ['*', ';','~','%2527','AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa','||','<>','-/@#$','^','!','@','<!-->','<TestId>','[]'];

//This is detection list
var detectionArray = ['Fatal error','exception','stack trace','(.*\\bERROR\\b.*)\\r?\\n(.*\\r?\\n)*(.*\\bat\\b.*)*(\\d{1,4}\\)\\r?\\n)','Server Error'];

var executeAttack = function(httpDataObject){
 attackEngine.doAttacks(httpDataObject,injectableList,detectionArray)

}

exports.executeAttack = executeAttack;

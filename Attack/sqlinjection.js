/*
	This is SQL Injection attack module
	This tries to find Database Error Messages. Blind, Union, Time based SQL Injections are not yet detected


*/


var url = require('../urlUtil.js');
var attackEngine = require('../errorBackend.js');
var http = require('http');
var issueDetection = require('../performInfectionDetection.js');
var vulnURLsArray = [];
var injectableList = ['*', '\'','"','@@version','-- -','#','?','union select 1 from dual','%00','%2527','%84','||',')(','{}','\'OR','&&'];		//This array is injection list
//This is detection list
var detectionArray = ['error occured',
					 'error in your SQL syntax',
					 'DB2 SQL error',
					 'Microsoft ODBC',
					 'mySQL error with query',
					 'Microsoft OLE DB Provider for ODBC Drivers error',
					 'Unterminated string constant',
					 'SQL error or missing database',
					 'PDOException:',
					 'mysql_fetch_array()',
					 'Access Database Engine',
					 'Warning.sybase'
					 ];	

var executeAttack = function(httpDataObject){
	attackEngine.doAttacks(httpDataObject,injectableList,detectionArray)
}

exports.executeAttack = executeAttack;

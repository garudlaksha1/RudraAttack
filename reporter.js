/*
Reporting engine
*/

saveAsReport = function(id
			,name
			,type
			,message
			,injectionValue
			,detectionValue
			,URL
			,field)
{
	var reportObject = {
	"scanID":id,
	"attackName":name,
	"attackType":type,
	"message":message,
	"injectionValue":injectionValue,
	"detectionValue":detectionValue,
	"URL":URL,
	"field":field
	};
	
	//
	sendToDB(reportObject);
}







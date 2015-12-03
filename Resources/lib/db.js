exports.getinfo = function() {
	var customerInfo = [];
	//var db = Titanium.Database.install(Titanium.Filesystem.resourcesDirectory + 'mydatabase1', 'mydatabase1');
	var db = Ti.Database.install('/myData/mydatabase1', 'mydatabase1');
	
	//var db = Titanium.Database.install('TTModel/db/mydatabase1', 'mydatabase1');
	var result = db.execute('select id,name,authore From Book');

	Ti.API.info("Test" + result);

	while (result.isValidRow()) {

		customerInfo.push({

			id : result.fieldByName('id'),
			title : result.fieldByName('name'),
			authore : result.fieldByName('authore'),

		});
		result.next();
	}

	result.close();
	db.close();
	Ti.API.info('stuInfo' + customerInfo);
	return customerInfo;
};

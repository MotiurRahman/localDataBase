var win = Ti.UI.createWindow({
	backgroundColor : 'gray'
});

var testaidl = require('com.bdtestaidl');
Ti.API.info("module is => " + testaidl);


Ti.API.info("module exampleProp is => " + testaidl.exampleProp);
testaidl.exampleProp = "This is a test value";

var db = require('lib/db');
var infoData = db.getinfo();

var data = [];
for (var i = 0; i < infoData.length; i++) {

	data.push({
		properties : {
			title : infoData[i].title
		}
	});

};

var listView = Ti.UI.createListView();
var sections = [];

var fruitSection = Ti.UI.createListSection({
	headerTitle : 'Fruits'
});

fruitSection.setItems(data);
sections.push(fruitSection);

listView.sections = sections;
win.add(listView);
win.open();


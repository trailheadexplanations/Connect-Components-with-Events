({
	createItem : function(component,newItem) {
		var addEvent = component.getEvent("addItem"); //fetches the event
        addEvent.setParams({
            item : newItem
        });
        addEvent.fire();
        component.set('v.newItem',{'sObjectType': 'Camping_Item__c',
                                       'Name' : '',
                                       'Quantity__c': 0,
                                       'Price__c': 0,
                                       'Packed__c': false});
	}
})

({
	clickCreateItem : function(component, event, helper) {
        let validItems = component.find('campaignForm').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if(validItems){
            var newItem = component.get('v.newItem');
            helper.createItem(component,newItem);
           
           
        }
    }
})

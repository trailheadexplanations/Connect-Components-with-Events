({
    doInit : function(component, event, helper) {
        var action = component.get('c.getItems');
        action.setCallback(this,function(response){
            var state = response.getState();
            var result = response.getReturnValue();
            if(state === 'SUCCESS') {
                component.set('v.items',result);
            } else {
                console.log('error has occured');
            }
        });
        $A.enqueueAction(action);
    },
    handleAddItem :function(component,event,helper) {
       var addNewItem =  event.getParam("item");
       var action = component.get('c.saveItem');
        action.setParams({
            newItem : addNewItem
        });
       action.setCallback(this,function(response){
            var newRecord = response.getReturnValue();
            var state = response.getState();
            if(state ==='SUCCESS') {
                var items= component.get('v.items');
                items.push(newRecord)
                component.set('v.items',items);
            }else {
                console.log('An error has occurred');
            }
        });
        $A.enqueueAction(action);
    },
    
})

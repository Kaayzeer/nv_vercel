Trigger StateTrigger on SellErrand__c(after  update){
  for(SellErrand__c errand : Trigger.new){
    // Get old value 
    Sellerrand__c errand_old = Trigger.oldMap.get(errand.Id);

    if(errand_old.State__c != errand.State__c){
        if(errand.State__c == 'Study'){
          errand.Study_admin__c = UserInfo.getUserId()

         update errand; 
        }
        else if(errand.State__c == 'Transaction'){

        }
        else if(errand.State__c == 'Handover'){
          
        }
    }
  }
}
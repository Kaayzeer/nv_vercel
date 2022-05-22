Trigger EmailTrigger on SellErrand__c(after  update){
  for(SellErrand__c errand : Trigger.new){
    // Get old value 
    Sellerrand__c errand_old = Trigger.oldMap.get(errand.Id);

    // Check if payment status changed
    if(errand_old.payment_status__c != errand.payment_status__c
      && errand.payment_status__c != 'unpaid'){
      // Get the user
      Lead customer = [SELECT Id,Email FROM Lead WHERE Id=:errand.Lead__c];
      String customer_email = customer.Email;

      // Create Email
      Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
      
      // Get template
      EmailTemplate emailTemplate;

      // Set E-mail depending on status
      switch on errand.payment_status__c {
        when 'pending' {
          emailTemplate = [SELECT Id FROM EmailTemplate WHERE name='Pending Sell Email'];
        }
        when 'paid' {
          emailTemplate = [SELECT Id FROM EmailTemplate WHERE name='Paid Sell Email'];
        }
      }

      mail.setTemplateID(emailTemplate.Id);
      mail.setTargetObjectId(customer.Id);
      mail.setWhatId(errand.Id);

      mail.setReplyTo('omar.hindawi@weknowit.se');
      mail.setSenderDisplayName('Next Venture');

      mail.setUseSignature(false);
      mail.setBccSender(false); // If copy to sender
      mail.setSaveAsActivity(false); 

      // Set receiver
      mail.setToAddresses(new String[] { customer_email });

      // Send mail
      Messaging.SendEmailResult[] results = Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });

      System.debug('Sending to: ' + customer_email);
      if (results[0].success)
      {
        System.debug('email success');
      }
      else
      {
        System.debug('email failed ' + results[0].errors[0].message);
      }
    }
  }
}
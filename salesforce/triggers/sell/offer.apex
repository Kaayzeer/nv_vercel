Trigger OfferCreate on FindErrand__c(after  update){
   String API_KEY = "5b4f6c4cfecb4461a8f0115bf88bf032d295e02426e460febbcbbdd02752ee60272d29be7d15ed2d6aa18c7050a02fa05f067a1b0c2b08d0dab654d3514ec0d0";

  for(FindErrand__c errand : Trigger.new){
    // Get old value 
    FindErrand__c errand_old = Trigger.oldMap.get(errand.Id);

    // Check if payment status changed
    if(errand_old.Offer_c != errand.Offer_c){
        HttpRequest req = new HttpRequest();
        req.setMethod('POST');
        req.setHeader('Accept-Encoding', 'gzip,deflate');
        req.setHeader('content-type', 'text/xml; charset=utf-8');
        req.setHeader('Content-Length', String.valueOf(jsonBody.length()));
        req.setHeader('Secret ', API_KEY);
        req.setEndpoint('Rest URL');
        
        // setting body
        System.debug('Input Request:' + jsonBody);
        req.setBody(jsonBody);
        
        //Execute web service call here     
        Http http = new Http();
        HTTPResponse res = http.send(req);
    }
  }
}
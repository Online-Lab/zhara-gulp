var app = angular.module("zharaGulp");

app.factory("Mailer", function($http){
    return {
      sendEmail: function(msg){

        var fromEmail = 'zhara@club.ru';
        var fromName = 'Zhara Club';
        var replyTo = 'email';

        //delete default content-type in header
        delete $http.defaults.headers.common['X-Requested-With']

        return $http.post('https://mandrillapp.com/api/1.0//messages/send.json', {
                      'key': '51Xf2RtxxHdpnSbOf_Z_RA',
                      'message': {
                          'html': msg,
                          'subject': "Новая заявка с сайта zhara.club",
                          'from_email': fromEmail,
                          'from_name': fromName,
                          'to': [
                              {
                                  'email': "tau7@mail.ru",
                                  'type': 'to'
                              }
                          ]
                      }
                  })
                  .success(function(data, status, headers, config){
                    
                  });

      }
    };
  }
);
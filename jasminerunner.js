var Jasmine =require('jasmine');
var jasmine=new Jasmine();
var nodemailer = require('nodemailer');
var Report=require('./report/jasminereport');
jasmine.DEFAULT_TIMEOUT_INTERVAL=20000;

jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.onComplete(function(passed){
  if(passed){
    console.log('All specs have passed');
  }else{
    console.log('At least one spec has failed');
  }
})
var report=new Report();
jasmine.addReporter(report);

jasmine.execute();

var generator = require('xoauth2').createXOAuth2Generator({
    user: 'yiranqiao870115@gmail.com',
    clientId: '948167465236-0i0vtcjpj4hag6utfht08trfj06agf3b.apps.googleusercontent.com',
    clientSecret: '3rNtQqe9iCBvvKHH7DJQtwzT',
    refreshToken: '1/Zqls3QlBv4dYP9nMCPk6TWjZp5j1ryMPrR2Mej79488',
    accessToken: '{cached access token}' // optional
});

// listen for token updates
// you probably want to store these to a db
generator.on('token', function(token){
    console.log('New token for %s: %s', token.user, token.accessToken);
});


//var transporter = nodemailer.createTransport('smtps://yiranqiao870115%40gmail.com:qiaoyiran87@smtp.gmail.com');

var transporter = nodemailer.createTransport(({
    service: 'gmail',
    auth: {
        xoauth2: generator
    }
}));

setTimeout(()=>{
  var mailOptions = {
    from: '"yiran" <yiran_qiao@epam.com>', // sender address
    to: 'qiaoyiran870115@126.com', // list of receivers
    subject: 'report', // Subject line
    text: 'plaintext', // plaintext body
    html: '<p>test report</p><p>start</p><p>'+report.result+"</p>"

};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
},22000)


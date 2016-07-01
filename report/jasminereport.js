var reportStr;
class report{

  constructor(){
    this.result="";
    // this.suiteStart="";
    // this.specStart="";
    // this.specDone="";
    // this.suiteDone="";
    // this.jasmineDone="";
  }
  jasmineStarted(suiteInfo){
    this.result='<p><b>jasmineStarted</b>'+JSON.stringify(suiteInfo)+'</p>';
    console.log('jasmineStarted',suiteInfo);

  }
  suiteStarted(result){
    this.result=this.result+'<p><b>suiteStarted</b>'+JSON.stringify(result)+'</p>';
    console.log('suiteStarted',result);
 
  }
  specStarted (result){
    this.result=this.result+'<p><b>specStarted</b>'+JSON.stringify(result)+'</p>';
    console.log('specStarted',result);

  }
  specDone (result){
    this.result=this.result+'<p><b>specDone</b>'+JSON.stringify(result)+'</p>';
    console.log('specDone',result);

  }
  suiteDone(result){
    this.result=this.result+'<p><b>suiteDone</b>'+JSON.stringify(result)+'</p>';
    console.log('suiteDone',result);

  }

  jasmineDone(result){
    this.jasmineDone+='<p><b>jasmineDone</b></p>';
    console.log('jasmineDone');
 
  }
  

}

//reportStr=report.jasmineStarted();
module.exports=report;
//module.exports.reportStr=reportStr;
describe("Unit Test", function() {
  describe("Spy", function(){

    it("Should call spied object",function(){
       var underTest={
      whoAmI:function(){
        console.log("I don't know");
      }
    }

     spyOn(underTest,"whoAmI");
     underTest.whoAmI();
     expect(underTest.whoAmI).toHaveBeenCalled();
    })
   // 3A arrange act assert Nunit Junit
   // GWT given when then


  });

  describe("async",function(){
    //callback ajax/Promise
    //XHR XML http request
    //file
    //settimeout setinterval
    //BDD superset of TDD
    it("Promise",function(done){
      var promise=new Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("Happy children's day");
          done();
        },10000);
      });
      promise.then(function(value){
       expect(value).toBe("Happy children's day");
      })

    },20000);


  });

});

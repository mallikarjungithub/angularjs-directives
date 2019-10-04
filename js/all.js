var app=angular.module("myApp",[]);
app.controller("firstData",function($scope){
    $scope.data=[
         {
            name:"mallikarjun",
            age: 24,
            contact:9611870162,
            email:"mallikarjun327@gmail.com"     
         },
         {
            name:"mahesh",
            age: 25,
            contact:879029337,
            email:"mahesh18@gmail.com"     
         },
         {
            name:"lavanya",
            age: 26,
            contact:902058352,
            email:"lavanya123@gmail.com"   
         },
         {
            name:"brahma",
            age:30,
            contact:870215255,
            email:"brahma30@gmail.com"     
         },
         {
            name:"nalini",
            age: 26,
            contact:7022322424,
            email:"nalini123@gmail.com"     
         },
         {
            name:"bindu",
            age: 26,
            contact:9876543210,
            email:"bindu123@gmail.com"    
         },
         {
            name:"rajesh",
            age:25,
            contact:9638527410,
            email:"rajesh963@gmail.com"      
         },
         {
            name:"manu",
            age: 24,
            contact:7204921298,
            email:"manohar123@gmail.com"      
         },
         {
             name:"sai kumar",
             age:23,
             contact:8618376107,
             email:"saikumar143@gmail.com"
         },
         {
            name:"aravind",
            age:24,
            contact:7975337840,
            email:"aravind143@gmail.com"
        },        
    ]

});
app.directive("firstDirective",function(){
   return{
      template:"<h1>this is my first directive</h1>",
      restrict:"C"
   }
});
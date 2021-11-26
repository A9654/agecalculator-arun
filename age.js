var datePicker=document.getElementById('datePicker');
var chooseDate=document.getElementById('chooseDate');


var ageyears=document.getElementById('ageyears');
var ageMonths=document.getElementById('ageMonths');
var ageDays=document.getElementById('ageDays');
var ageHours=document.getElementById('ageHours');
var ageMinutes=document.getElementById('ageMinutes');
var ageSeconds=document.getElementById('ageSecond');
var ageMiliseconds=document.getElementById('ageMiliseconds');

datePicker.addEventListener('change',function(){
    
    var options= {year:'numeric',month:'long',day:'numeric'};
    var selectedDate=new Date(this.value);
    var DOB = selectedDate.toLocaleDateString('en-us',options);
    
    chooseDate.innerHTML= "DOB :"+ " "+DOB;

    var miliSeconds_Btw_DOB= Date.parse(DOB);
    var miliSecond_Btw_Now=Date.now();
    
    var age_in_MiliSeconds =miliSecond_Btw_Now-miliSeconds_Btw_DOB;
     //console.log(age_in_MiliSeconds);

     var miliSeconds = age_in_MiliSeconds;
     var second=1000;
     var minute =second*60;
     var hour = minute*60;
     var day= hour*24;
     var month =day*30;
     var years= day*365;


     var years =Math.round(miliSeconds/years);
     var months =years*12;
     var days= years*365;
     var hours =Math.round(miliSeconds/hour);
     var seconds =Math.round(miliSeconds/seconds);
     //var minutes= Math.round(miliSeconds/minutes)
     
//console.log(ageyears)

    ageyears.innerHTML= years;
      ageMonth.innerHTML=months
      ageDays.innerHTML=days
      ageHours.innerHTML=hours
     // ageMinutes.innerHTML=minutes
      ageSecond.innerHTML=seconds
      ageMiliseconds.innerHTML=miliSeconds;
    
    })
$(document).ready(function(){
  
  $('#countdown').Timer({date:'16 April 2018 18:27:40'}, function(){
   
       $('#countdown').text('Deadline Reached');
  });


});
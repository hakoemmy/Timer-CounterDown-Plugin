/** JQuery Timer Plugin.
 *this Plugin can be used in every web application.
 *Developed by H.E the Software Developer At heart.
 *from University of Rwanada(UR)-College of Science and Technology
 * Shared on Github in 2018.
 */

(function($){

// declarition and definition of countDown function to be 
//used in external js file.
$.fn.Timer = function(option, callback){

  var object = {'date': null};
  if (option){ $.extend(object, option);};
  // it returns it in milliseconds so divede 1000 to put it 
  // in seconds.
  this_sel = $(this);    
   function count_exec(){
     eventDate         = Date.parse(object['date']) / 1000;

     currentDate        = Math.floor($.now() /  1000);

     if (eventDate <= currentDate) {
       //call back call.
       callback.call(this);
       //Stopping the interval.
       
       clearInterval(interval);

     }

     seconds            =  eventDate - currentDate;
     
     days               = Math.floor(seconds/ (60 * 60 * 24));
     
     seconds -=          days * 60 * 60 * 24;

     hours              = Math.floor(seconds/(60 * 60 ));

     seconds -=          hours * 60 * 60;

     minutes             = Math.floor(seconds/ 60);

     seconds -=          minutes * 60;
     
     // just to append zero to numbers less than 10.
     days = (String(days).length !== 2)? '0' + days : days;   
     hours = (String(hours).length !== 2)? '0' + hours : hours; 
     minutes = (String(minutes).length !== 2)? '0' + minutes : minutes; 
     seconds = (String(seconds).length !== 2)? '0' + seconds : seconds; 
       
       //updating the Timer with current values.
      if (!isNaN(eventDate)){ 
     this_sel.find('.days').text(days);
     this_sel.find('.hours').text(hours);
     this_sel.find('.minutes').text(minutes);
     this_sel.find('.seconds').text(seconds);
      }
    } 
     //calling function every 1 second.
 interval = setInterval(count_exec, 1000);   

}})(jQuery);
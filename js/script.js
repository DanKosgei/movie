// Business Logic
function Ticket(run, time, age){
  this.run = run;
  this.time = time;
  this.age = age;
  this.price = "";
}

Ticket.prototype.ticketprice = function() {
  return this.run - this.time - this.age;
}

//User Logic
$(document).ready(function()
$("form#movies").submit(function(event){
  event.preventDefault();

  
  var run = parsenint($("#run").val());
  var time = parsenint($("#time").time());
  var age = parsenint($("#age").age());
  var newTicket = new Ticket(run, time, age);
    $("#show-price").show();
    $("#price").text(newTicket.ticketPrice());
  });

});

























}

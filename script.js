var locations = []; // this array will hold your objects

// object constructor
console.log('js source');

var locations = []; // this array will hold your objects

// object constructor
function State(nameIn, revenueIn, locationsIn){
  this.name = nameIn;
  this.revenue = revenueIn;
  this.location = locationsIn;
  this.perChainAverage = this.revenue/this.location;
}
var missouri = new State("MO",30000,12);
console.log(missouri);
// object instances

// push object instances to locations array

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});

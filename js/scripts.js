var locations = [];

$(document).ready(function() {
  $("form#places-form").submit(function(event) {
    event.preventDefault();

    var name = $("input#location").val();
    var date = $("input#date").val();
    var notes = $("input#notes").val();

    var newPlace = {name: name, date: date, notes: notes};
    locations.push(newPlace);

    $("ul#places-list").append("<li><span class='place'>"+newPlace.name+"</li>");
    $(".place").last().click(function() {
      $(".show-place").show();
      for (var counter=0, length = locations.length; counter<length; counter++) {
        if (newPlace.name === locations[counter].name) {
          $("#span-location").text(newPlace.name);
          $("#span-date").text(newPlace.date);
          $("#span-notes").text(newPlace.notes);
          break;
        }
      }

    });
  });

});

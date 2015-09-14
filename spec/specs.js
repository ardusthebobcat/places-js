describe('place', function() {
  it("will create a new object with a location", function() {
    var place = {name: "Portland"};
    expect(place.name).to.eql("Portland")
  });
  it("will create a new object with a date visited", function() {
    var place = {date: "09-13-2015"};
    expect(place.date).to.eql("09-13-2015")
  });
  it("will create a new object with a previous properties and a note", function() {
    var place = {name: "Portland", date: "09-13-2015", notes: "It was fun."};
    expect(place.date).to.eql("09-13-2015");
  });
});

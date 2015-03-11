newsBeats.factory('BeatsFactory', function () {
  var factory ={};
  factory.allBeats = [{ name: 'Crime' }, { name: 'Business' }, { name: 'Politics' }];
  factory.addBeat = function(beatName) {
    this.allBeats.push({
      name: beatName
    });
  };
  return factory;
});

newsBeats.factory('BeatsFactory', function () {
  var factory = {};
  factory.allBeats = [{ name: 'Crime' }, { name: 'Business' }, { name: 'Politics' }];


  factory.addBeat = function() {
    factory.allBeats.push({
      name: factory.beatName
    });
  };

  return factory;
});

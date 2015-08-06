newsBeats.controller('BeatsCtrl', function (BeatsFactory) {
  this.allBeats = BeatsFactory.allBeats;
  this.beatName = BeatsFactory.beatName;
  this.factory = BeatsFactory;
});

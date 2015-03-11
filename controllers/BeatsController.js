newsBeats.controller('BeatsCtrl', function (BeatsFactory) {
  this.allBeats = BeatsFactory.allBeats;
  this.addBeat = function() {
    BeatsFactory.addBeat(this.beatName);
    this.beatName = null;
  };
});

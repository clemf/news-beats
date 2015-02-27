newsBeats.factory('BeatsCtrl', function() {
  this.beats = [];
  this.temp = {};

  this.addBeat = function(beat) {
    this.beats.push({
      name: this.temp.beatName
    });
  };
});

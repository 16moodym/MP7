$(document).ready(function() {
    // piano and bass key audio
    var pianoA = document.getElementById('pianoA');
    var pianoAS = document.getElementById('pianoASharp');
    var pianoB = document.getElementById('pianoB');
    var pianoC = document.getElementById('pianoC');
    var pianoCS = document.getElementById('pianoCSharp');
    var pianoD = document.getElementById('pianoD');
    var pianoDS = document.getElementById('pianoDSharp');
    var pianoE = document.getElementById('pianoE');
    var pianoF = document.getElementById('pianoF');
    var pianoFS = document.getElementById('pianoFSharp');
    var pianoG = document.getElementById('pianoG');
    var pianoGS = document.getElementById('pianoGSharp');

// playing the piano keys and bass
document.onkeydown = function(event) {
    event.preventDefault();
    switch(event.keyCode) {
        case 75:
            // K
            pianoA.currentTime = 0;
            pianoA.play();
            break;
        case 79:
            // O
            pianoAS.currentTime = 0;
            pianoAS.play();
            break;
        case 76:
            // L
            pianoB.currentTime = 0;
            pianoB.play();
            break;
        case 83: 
            // S
            pianoC.currentTime = 0;
            pianoC.play();
            break;
        case 69: 
            // E
            pianoCS.currentTime = 0;
            pianoCS.play();
            break;
        case 68: 
            // D
            pianoD.currentTime = 0;
            pianoD.play();
            break;
        case 82: 
            // R
            pianoDS.currentTime = 0;
            pianoDS.play();
            break;
        case 70:
            // F
            pianoE.currentTime = 0;
            pianoE.play();
            break;
        case 72:
            // H
            pianoF.currentTime = 0;
            pianoF.play();
            break;
        case 85:
            // U
            pianoFS.currentTime = 0;
            pianoFS.play();
            break;
        case 74:
            // J
            pianoG.currentTime = 0;
            pianoG.play();
            break;
        case 73: 
            // I
            pianoGS.currentTime = 0;
            pianoGS.play();
            break;
    }
}
$('.control').addClass('play');
    $('.control').click(function() {
var this_song_control = $(this); //jQuery gives you an object called "this" that contains the element that was clicked
console.log(this_song_control);

var song_id = $(this).attr('song-id'); 
console.log(song_id);

var this_song = document.getElementById(song_id);
console.log(this_song);

var this_songs_progress_bar = $("#" + song_id + "-progress");

if (this_song.paused === false) {
this_song.pause();
this_song.currentTime = 0;
this_song_control.addClass('play');
this_songs_progress_bar.hide();
}
else {
this_song.play();
this_song_control.removeClass('play');
this_songs_progress_bar.show();
this_songs_progress_bar.max = this_song.duration;
}
});

$('audio').on('timeupdate', function() {
    var this_songs_progress_bar = $("#" + this.id + "-progress");
    this_songs_progress_bar.attr("value", this.currentTime / this.duration);
});
});
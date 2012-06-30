var FOLDER_CONTROLLER = '/js/class/controller/';
var FOLDER_MODEL = '/js/class/model/';
var FOLDER_EJS = '//js/ejs/';
//var FOLDER_SOUND = '/sounds/ogg/';
var FOLDER_SOUND = '/sounds/ogg/';

var TESTS_FOLDER = '/js/lib/tests/';

//Notes name
var NONES_NAME = ['c', 'cd', 'd', 'dd', 'e', 'f', 'fd', 'g', 'gd', 'a', 'ad', 'b'];
var OCTAVE_NAME = ['c0', 'c1', 'c2', 'c3', 'c4'];
var NOTES = new Array();
for (var i = 0; i < OCTAVE_NAME.length; i++) {
    var octaveName = OCTAVE_NAME[i];
    for (var ni = 0; ni < NONES_NAME.length; ni++) {
        var noteName = NONES_NAME[ni];
        NOTES.push(octaveName + '_' + noteName);
    }
}

var TURN_NOTES = new Object();
for(var i in NOTES) {
    TURN_NOTES[NOTES[i]] = i;
}



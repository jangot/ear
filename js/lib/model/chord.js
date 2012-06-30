$.include('/js/lib/model/abstract.js');

Model.Abstract('Model.Chord', {
    init:function(){
        this.turnNotes = this.turnNotesArray(NOTES);
        this._super();
    },
    create:function(notes){
        var id = this.sortNotes(notes).join('|');
        if(this.check(id)) {
            return this.get(id);
        } else {
            var params = {
                id:id,
                notes:notes
            }
            return this._super(params);
        }
    },
    sortNotes:function(noSortedNotes){
        var notes = noSortedNotes;
        var tmp;
        for (var i = notes.length - 1; i > 0; i--) {
            for (var j = 0; j < i; j++) {

                var nJ = this.getNoteNumber(notes[j]);
                var nJ1 = this.getNoteNumber(notes[j + 1]);

                if (nJ > nJ1) {
                    tmp = notes[j];
                    notes[j] = notes[j+1];
                    notes[j+1] = tmp;
                }
            }
        }
        return notes;
    },
    turnNotesArray:function(notes){
        var turnArray = {}
        for(var i = 0; i < notes.length; i++) {
            turnArray[notes[i]] = i;
        }
        return turnArray;
    },
    getNoteNumber:function(noteName){
        return this.turnNotes[noteName];
    }
}, {
    listen:function(){
        var settings = Registry.getSettings();
        if (settings.delay > 0){
            $.each(this.params.notes, function(n, noteName){
                setTimeout(function(){
                    Player.play(noteName);
                }, settings.delay * n)
            });
        } else {
            $.each(this.params.notes, function(n, noteName){
                Player.play(noteName);
            });
        }
    },
    count:function(){
        return this.params.notes.length;
    },
    getNote:function(n){
        if (undefined == this.params.notes[n]) {
            throw 'Нет такой ноты';
        }
        return this.params.notes[n];
    }
});



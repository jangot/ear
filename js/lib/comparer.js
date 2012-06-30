$.Class('Comparer', {
    init:function(){
        this.chordFactory = Model.Chord;
    },
    compar:function(){
        var source = this.getSource().getId();
        var result = this.getResult().getId();
        return source == result;
    },
    getSource:function(){
        return Registry.getJob().getChord();
    },
    getResult:function(){
        var notesCount = this.getSource().count();
        var notes = new Array();
        
        var logInfo = MainMonitor.getList(notesCount);
        for (var i in logInfo) {
            var note = logInfo[i].getInfo();
            notes.push(note);
        }
        Debug.l(notes)
        var chord = this.chordFactory.create(notes);
        return chord;
    }
}, {});
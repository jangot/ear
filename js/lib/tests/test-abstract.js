$.Class('Test.Abstract',{
    list:null,
    num:10,
    min:null,
    max:null,
    init:function(){
        this.initChords();
        this.createJob();
    },
    addChord:function(notes){
        if(Boolean(this.list)) {
            this.list.push(notes);
        }
    },
    createJob:function(){
        if(Boolean(this.list)) {
            var job = Model.Job.create(this.shortName, this.list.length);
            job.addMany(this.list);
        }
    },
    initChords:function(){},
    add:function(num){
        var chord = this.generateChordByNumbers(num);
        this.addChord(chord);
        return this;
    },
    generateChordByNumbers:function(num){
        var result = new Array();
        var chordLength = this.getSequenceLength(num);
        result[0] = this.getRandomNote(chordLength);
        for(var i = 0; i < num.length; i++) {
            var nextNote = this.getNexNote(result[i], num[i]);
            result.push(nextNote);
        }
        return result;
    },
    getRandomNote:function(minus){
        if(!Boolean(minus)) {
            minus = 8;
        }
        var min = this.min || 0;
        var max = this.max || (NOTES.length - minus);
        var random = Math.random() * (max - min) + min;
        return NOTES[Math.floor(random)];
    },
    getSequenceLength:function(sequence){
        var result = Number(1);
        for(var i in sequence) {
            result += sequence[i];
        }
        return result;
    },
    getNexNote:function(note, interval){
        var nNote = TURN_NOTES[note];
        var nNext = Number(nNote) + Number(interval);
        return NOTES[nNext];
    }
}, {});
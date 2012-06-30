/*
 * Keep chords name
 */

Model.Abstract('Model.Job', {
    types:{
        together:'together',
        apart:'apart'
    },
    init:function(){
        this._super();
        this.chordFactory = Model.Chord;
    },
    create:function(name){
        var params = {};
        params.id = name;
        params.chordNames = this.createChords();
        return this._super(params);
    },
    createChords:function(chords) {
        if(!Boolean(chords)) {
            chords = new Array();
        }
        var names = new Array();
        for(var i = 0; i < chords.length; i++) {
            var chord = this.chordFactory.create(chords[i])
            names.push(chord.getId());
        }
        return names;
    }
}, {
    init:function(params){
        this._super(params);

        this.type = this.constructor.types.together;
        this.chordsKeeper = this.constructor.chordFactory;
        this.selectChord = null;
        this.position = 0;
    },
    add:function(notes){
        var chord = this.constructor.chordFactory.create(notes);
        this.params.chordNames.push(chord.getId());
    },
    addMany:function(chords){
        for(var i in chords){
            this.add(chords[i]);
        }
    },
    listen:function(){
        this.getChord().listen();
    },
    next:function(){
        var max = this.params.attr('chordNames').length;
        
        if (max > 0) {
            var chordNumber = Helpers.randome(max - 1);
            this.selectChord = this.params.attr('chordNames')[chordNumber];
            this.params.attr('chordNames').splice(chordNumber, 1);
        }
    },
    getChord:function(){
        if (!Boolean(this.selectChord)) {
            this.next();
        }
        return this.chordsKeeper.get(this.selectChord);
    },
    setType:function(type){
        var goodType = false;
        for(var typeKey in this.constructor.types) {
            if(this.constructor.types[typeKey] == type) {
                goodType = true;
                break;
            }
        }
        if(goodType) {
            this.type = type;
        }
        return this;
    },
    getType:function() {
        return this.type;
    }
});
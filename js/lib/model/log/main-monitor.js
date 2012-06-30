$.include('/js/lib/model/log.js');
Model.Log('MainMonitor', {
    init:function(){
        this.view = $('<div id="mainMonitor"></div>');
        this._super('#mainMonitor');
        this.template = FOLDER_EJS + 'main-log.ejs';
    }
}, {
    getText:function(){
        var info = this.params.attr('info').split('_');
        var octave = info[0];
        var note = info[1];
        
        var text = Registry.getTranslate().translate(octave);
        text += ' ';
        text += Registry.getTranslate().translate(note);
        
        return text;
    }
});


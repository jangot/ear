$.Class('Translate', {
    init:function(language){
        this.language = language;
        this.loadArray(this.language);
    },
    loadArray:function(language){
        $.include('/js/lib/translate/' + language + '.js');
    },
    translate:function(index){
        var string = Translate[this.language][index];
        if (!Boolean(string)) {
            string = index;
        }
        return string;
    }
});
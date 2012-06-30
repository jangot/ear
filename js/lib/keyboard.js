$.Class('Keyboard', {
    init:function(notes, monitor){
        var self = this;
        this.monitor = monitor;
        this.keyboard = $($.View(FOLDER_EJS + 'piano.ejs', {notes:notes}));
        $(function(){
            $('body').append(self.keyboard);
            self.getAllKeys().click(function(){
                var note = $(this).attr('data-note');
                self.press(note);
            });
        });
        
        
    },
    press:function(key){
        this.monitor.log(key);
        Registry.getPlayer().play(key);
    },
    getKey:function(name){
        return this.keyboard.find('.' + name);
    },
    getAllKeys:function(){
        return this.keyboard.find('li');
    }
});


$.Class('Player', {
    init:function(){
        var self = this;
        this.sounds = new Object();
        $(function(){
           $('body').append('<div id="playerContainer"></div>');
            self.container = $('#playerContainer');
            for (var i = 0; i < NOTES.length; i++) {
                self.createSound(NOTES[i]);
            }
        });
    },
    play:function(name){
        var oldSound = this.sounds[name];
        oldSound.addClass('old');
        oldSound[0].play();
        
        var self = this;
        this.createSound(name);
        setTimeout(function(){
            self.container.find('old').remove();
        }, 1000);
        
    },
    createSound:function(name){
        var path = FOLDER_SOUND + name;
        var node = $.View(
            FOLDER_EJS + 'sound.ejs',
            {
                name:name,
                path:path
            }
        );
        this.sounds[name] = $(node);
        this.container.append(this.sounds[name]);
    }
}, {});



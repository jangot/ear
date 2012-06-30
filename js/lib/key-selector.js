$.Class('KeySelector', {
    keyboard:null,
    log:null,
    init:function(keyboard, log){
        this.keyboard = keyboard;
        this.log = log;
        
        this.subscription();
    },
    subscription:function(){
        this.log.onLog(
            function(log){
                var keyName = log.getInfo();
                this.getKey(keyName).addClass('select');
            },
            this.keyboard
        );
        this.log.onClear(
            function(){
                this.getAllKeys().removeClass('select');
            },
            this.keyboard
        );
    }
});
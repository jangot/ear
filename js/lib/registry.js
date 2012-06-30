$.include('/js/lib/registry/abstract.js');

RegistryAbstract('Registry', {
    init:function(){
        this.PLAYER = 'player';
        this.JOB = 'job';
        this.MENU = 'menu';
        
        this.KEYBOARD = 'piano';
        
        this.TRANSLATE = 'translate';
        
        this.SETTINGS = 'settings';
    },
    
    // PLAYER
    setPlayer:function(player){
        this.set(this.PLAYER, player);
    },
    getPlayer:function(){
        return this.get(this.PLAYER);
    },
    
    // JOB
    setJob:function(job){
        this.set(this.JOB, job);
    },
    getJob:function(){
        return this.get(this.JOB);
    },
    
    // Menu
    setMenu:function(menu){
        this.set(this.MENU, menu);
    },
    getMenu:function(){
        return this.get(this.MENU);
    },
    
    // Keyboard
    setKeyboard:function(keyboard){
        this.set(this.KEYBOARD, keyboard);
    },
    getKeyboard:function(){
        return this.get(this.KEYBOARD);
    },
    
    setTranslate:function(tr){
        this.set(this.TRANSLATE, tr);
    },
    getTranslate:function(){
        return this.get(this.TRANSLATE);
    },
    
    setSettings:function(options){
        this.set(this.SETTINGS, options);
    },
    getSettings:function(){
        return this.get(this.SETTINGS);
    }
}, {});



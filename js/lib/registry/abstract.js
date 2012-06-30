$.Class('RegistryAbstract', {
    init:function(){
        this.data = {};
    },
    set:function(key, value){
        this.data[key] = value;
    },
    get:function(key){
        return this.data[key];
    }
}, {});



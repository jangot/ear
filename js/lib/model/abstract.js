$.Class('Model.Abstract', {
    init:function(){
        this.list = {}
    },
    create:function(params){
        if(!Boolean(params)) {
            throw this.fullName + ': created without "params".';
        } else if(!Boolean(params.id) && params.id !== 0) {
            throw this.fullName + ': created without "id".';
        } else {
            var id = params.id;
            if(this.check(id)) {
                this.remove(id);
            }
            if(Boolean(this.namespace)) {
                return new this.namespace[this.shortName](params);
            } else {
                return new window[this.fullName](params);
            }
        }
    },
    remove:function(id){
        this.list[id].destract();
    },
    check:function(id){
        return Boolean(this.list[id]);
    },
    get:function(id){
        if(this.check(id)) {
            return this.list[id];
        } else {
            return null;
        }
    }
}, {
    init:function(params){
        this.id = params.id;
        this.params = new $.Model(params);
        this.constructor.list[this.id] = this;
    },
    destract:function(){
        delete this.constructor.list[this.id];
    },
    getId:function(){
        return this.id;
    }
});
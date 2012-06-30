$.Class('Events', {
    list:null,
    init:function(context, eventName){
        this.context = context;
        this.list = new Array();
    },
    add:function(fn, context){
        if (typeof fn != 'function') {
            return;
        }
        var newEvent = {run:fn};
        if (Boolean(context)) {
            newEvent.context = context;
        } else {
            newEvent.context = this.context;
        }
        this.list.push(newEvent);
    },
    call:function(){
        for (var n in this.list) {
            this.list[n].run.apply(
                this.list[n].context,
                arguments
            );
        }
    }
});
$.include('/js/lib/model/abstract.js');
$.include('/js/lib/events.js');

Model.Abstract('Model.Log', {
    init:function(viewSelector){
        this._super();
        this.template = FOLDER_EJS + 'log.ejs';
        this.numElements = 0;
        if(!Boolean(viewSelector)) {
            viewSelector = '<div></div>';
        }
        this.createView(viewSelector);
        this.logEvents = new Events(this, 'Log');
        this.clearEvents = new Events(this, 'Clear');
    },
    log:function(info){
        var params = {
            id:this.numElements++,
            info:info
        };
        var logObject = this.create(params);
        this.logEvents.call(logObject);
    },
    onLog:function(fn, context){
        if (!Boolean(context)) {
            context = this;
        }
        this.logEvents.add(fn, context);
    },
    getList:function(num) {
        var i = 0;
        var numElements = this.numElements - 1;
        var result = new Array();
        while (i < num) {
            if(Boolean(this.list[numElements])) {
                result.push(this.list[numElements]);
            } else {
               //throw 'Many elements'
            }
            i++;
            numElements--;
        }
        return result;
    },
    clear:function(){
        for(var id in this.list) {
            this.remove(id);
        }
        this.numElements = 0;
        this.clearEvents.call();
    },
    onClear:function(fn, context){
        if (!Boolean(context)) {
            context = this;
        }
        this.clearEvents.add(fn, context);
    },
    createView:function(selector) {
        var  self = this;
        var div = $(selector);
        div.click(function(){
            self.clear();
        });
        this.view = div;
    },
    createLogBlock:function(data){
        var logBlock = $.View(this.template, data);
        logBlock = $(logBlock);
        this.view.append(logBlock);
        return logBlock;
    }
}, {
    init:function(params){
        this._super(params);
        this.logBlock = this.constructor.createLogBlock({
            number:this.id,
            text:this.getText()
        });
    },
    getText:function(){
        return this.params.attr('info');
    },
    destract:function(){
        this.logBlock.remove();
        this._super();
    },
    getInfo:function() {
        return this.params.attr('info');
    }
});



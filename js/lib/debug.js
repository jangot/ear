$.Class('Debug', {
    init:function(){
        
    },
    l:function(){
        var params = this._arg2Arr(arguments);
        console.log(params.join(' | '));
    },
    a:function(){
        var params = this._arg2Arr(arguments);
        alert(params.join(' | '));
    },
    w:function(){
        var params = this._arg2Arr(arguments);
        document.write(params.join(' | '));
    },
    _arg2Arr:function(arg){
        var arr = new Array();
        for(var i = 0; i<arg.length; i++) {
            arr.push(arg[i]);
        }
        return arr;
    }
}, {})



Test.Abstract('Test.Triad', {
    init:function(){
        this.list = new Array();
        this.num = 5;
        this.min = 20;
        this.max = 40; 
        this._super();
    },
    initChords:function(){
        this
            .add([4, 3])
            .add([3, 4])
            .add([4, 3])
            .add([4, 3])
            .add([3, 4])
            .add([3, 4])
            .add([4, 3])
            .add([3, 4])
            .add([4, 3])
            .add([4, 3])
            .add([3, 4])
            .add([3, 4])
        ;
    }
}, {});


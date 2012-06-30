Test.Abstract('Test.Seventh', {
    init:function(){
        this.list = new Array();
        this.num = 5;
        this.min = 15;
        this.max = 40;
        this._super();
    },
    initChords:function(){
        this
            .add([4, 3, 4])// maj
            .add([3, 4, 4])// m maj
            .add([4, 3, 3])// 7
            .add([3, 4, 3])// m
            .add([3, 3, 4])// 0/
            .add([3, 3, 3])// 0
        ;
    }
}, {});


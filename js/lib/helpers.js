$.Class('Helpers', {
    randome:function(max, min) {
        if (!Boolean(min)) {
            min = 0;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}, {});
jQuery.include = function(url){
    jQuery.loader.script(url);
}

jQuery.loader = {
    urls:null,
    init:function(){
        var self = this;
        this.urls = {};
        $('script').each(function(){
            var scriptUrl = $(this).attr('src');
            self.registrate(scriptUrl);
        });
    },
    script:function(url){
        if(null === this.urls) {
            this.init();
        }
        if(!this.checkLoad(url)) {
            var self = this;
            $.ajax({
                url:url,
                dataType:'html',
                success:function(script){
                    jQuery.globalEval(script);
                    self.registrate(url);
                },
                async:false
            });
        }
    },
    checkLoad:function(url){
        return Boolean(this.urls[url]);
    },
    registrate:function(url){
        this.urls[url] = true;
    }
};


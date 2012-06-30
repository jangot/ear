$.Class('Menu', {
    init:function(node){
        this.container = $(node);
        this.menus = {};
        
        this.createJobsList();
        this.addAllMenus();
    },
    createMenuLIst:function(name){
        this.menus[name] = $('<ul class="'+ name +'"></ul>')
    },
    addAllMenus:function(){
        for (var name in this.menus) {
            this.container.append(this.menus[name]);
        }
    },
    createJobsList:function(){
        this.createMenuLIst('jobs');
        for (var id in Model.Job.list) {
            this.menus['jobs'].append('<li><a href="#'+ id +'">'+ id +'</a></li>');
        };
    }
});
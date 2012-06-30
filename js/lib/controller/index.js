$.Controller('MainController', {
    init:function(){
        Player.play(NOTES[20]);
    },
    '#test click':function(){
        var job = Registry.getJob();
        //try {
            job.listen();
//        } catch (exception) { 
//            Debug.a('Тест не выбран!');
//            return;
//        }
        this.selectFirstNote(job);
    },
    '#next click':function(){
        var job = Registry.getJob();
        try {
            MainMonitor.clear();
            job.next();
            job.listen();
        } catch (exception) { 
            Debug.a('Тест не выбран!');
            return;
        }
        this.selectFirstNote(job);
    },
    '#result click':function(){
        try {
            if (Comparer.compar()) {
                Debug.a('Отлично');
            } else {
                Debug.a('Нужно попробовать еще.');
            }
        } catch (exception) { 
             Debug.a('Тест не выбран!');
        }

        
    },
    '#clear click':function(){
        MainMonitor.clear();
        var job = Registry.getJob();
        this.selectFirstNote(job);
    },
    '#menu .jobs a click':function(link){
        var oldPath = window.location.href;
        window.location = oldPath.split('#')[0] + link.attr('href');
        window.location.reload(true);
        return false;
    },
    selectFirstNote:function(job){
        var chord = job.getChord();
        var startNote = chord.getNote(0);
        MainMonitor.log(startNote);
    }
});



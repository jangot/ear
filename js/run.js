//helpers
$.include('/js/lib/debug.js');
$.include('/js/lib/helpers.js');
$.include('/js/lib/registry.js');
$.include('/js/lib/player.js');
$.include('/js/lib/keyboard.js');

//model
$.include('/js/lib/model/chord.js');
$.include('/js/lib/model/job.js');

$.include('/js/lib/translate/index.js');

//controllers
$.include('/js/lib/controller/index.js');

$(function(){
    // Monitors
    $.include('/js/lib/model/log/main-monitor.js');
    
    
    
    $.include(TESTS_FOLDER + 'index.js');

    $.include('/js/lib/management/menu.js');
    $.include('/js/lib/comparer.js');
    $.include('/js/lib/key-selector.js');
    
    Registry.setPlayer(Player);
    Registry.setMenu(new Menu('#menu'));
    Registry.setKeyboard(new Keyboard(NOTES, MainMonitor));
    
    var selector = new KeySelector(
        Registry.getKeyboard(),
        MainMonitor
    );
    
    
    Registry.setTranslate(new Translate('ru'));
    
    var jobType = document.location.href.split('#')[1];
    var job = Model.Job.get(jobType);
    Registry.setJob(job);

    Registry.setSettings({
        delay:500
    });
    
   $('body').main();
});



console.log("Shoutbox script loaded");

var currentVersion = 0.5;

var Ronimo = new Array();

var Adminauts = new Array();
Adminauts.push("Fish");

var Specials = new Array();
Specials.push("Chirimorin");

function postEdits() //Changes to posts, should be called for every load. 
{
    $(document).ready(function(){
        console.log("Refreshing post edits...");
        
        $(".postbody", $("#contentarea")).each(function(){ //Loop through all posts
        
            //Smilies!
            $(this).html($(this).html().replace(/:monkey:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_Monkey.gif" alt="monkey" title="Happy monkey">'));
            $(this).html($(this).html().replace(/:ayla:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_Ayla.gif" alt="ayla" title="happy">'));
            $(this).html($(this).html().replace(/:aylaroll:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_AylaRoll.gif" alt="aylaroll" title="roll">'));
            $(this).html($(this).html().replace(/:voltarroll:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_VoltarRoll.gif" alt="voltarroll" title="roll eyes">'));
            $(this).html($(this).html().replace(/:drool:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_DerplDrool.gif" alt="drool" title="drool">'));
            $(this).html($(this).html().replace(/:thumb:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_FroggyThumb.gif" alt="thumb" title="thumb">'));
            $(this).html($(this).html().replace(/:leoneyes:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_LeonEyes.gif" alt="leoneyes" title="leonEyes">'));
            $(this).html($(this).html().replace(/:shrug:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_FrogShrug.gif" alt="shrug" title="shrug">'));
            $(this).html($(this).html().replace(/:gnawshock:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_GnawSurprise.gif" alt="GnawShock" title="shock">'));
            $(this).html($(this).html().replace(/:huh:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_YuriHuh.gif" alt="huh" title="huh">'));
            $(this).html($(this).html().replace(/:lolstar:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_lolstar.gif" alt="lolstar" title="laughing">'));
            $(this).html($(this).html().replace(/:derp:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/SpikeDerp.gif" alt="derp" title="derp">'));
            $(this).html($(this).html().replace(/:kiss:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_CocoKiss.gif" alt="kiss" title="kiss">'));
            $(this).html($(this).html().replace(/:worship:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_GenjiWorship.gif" alt="worship" title="worship">'));
            $(this).html($(this).html().replace(/:rae:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_Raelynn.gif" alt="rae" title="Raelynn">'));
            $(this).html($(this).html().replace(/:blabl:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_Derpl.gif" alt="blabl" title="baffled">'));
            $(this).html($(this).html().replace(/:drone:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_Drone.gif" alt="drone" title="mind_blown">'));
            $(this).html($(this).html().replace(/:chew:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_ClunkBite.gif" alt="chew" title="Chew">'));
            $(this).html($(this).html().replace(/:sleep:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_ClunkNose.gif" alt="sleep" title="sleep">'));
            $(this).html($(this).html().replace(/:think:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_SentryThinking.gif" alt="think" title="think">'));
            $(this).html($(this).html().replace(/:facepalm:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_SwigginsFacepalm.gif" alt="facepalm" title="facepalm">'));
            $(this).html($(this).html().replace(/:tear:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_TedTear.gif" alt="tear" title="tear">'));
            $(this).html($(this).html().replace(/:clap:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_VinnieClapping.gif" alt="clap" title="clapping">'));
            $(this).html($(this).html().replace(/:shady:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_VoltarLook.gif" alt="shady" title="shady">'));
            $(this).html($(this).html().replace(/:party:/ig, '<img src="http://www.awesomenauts.com/forum/images/smilies/Smiley_PartyPenny.gif" alt="party" title="party">'));
            
            
            //Find moderators and make them orange
            $("b", this).each(function(){
                name = $(this).html().replace(/(<([^>]+)>)/ig,"").replace(":","");
                
                if (jQuery.inArray(name, Ronimo) != -1) { $(this).wrap("<span style='color:#AA0000'></span>") }
                if (jQuery.inArray(name, Adminauts) != -1) { $(this).wrap("<span style='color:#FF9900'></span>") }
                if (jQuery.inArray(name, Specials) != -1) { $(this).wrap("<span style='color:#0000AA'></span>") }
            });
            
            //TODO: bad word filter.
        });
    });
} 

var checker = 0;
function jqueryLoaded() {
    clearInterval(checker);
    console.log("Shoutbox jQuery found; running shoutbox script version " + currentVersion);
    
    $(document).ready(function(){
        //Remove pesky ads
        $("div[id^=div-gpt-ad]").each(function() { $(this).remove(); });
        
        //Hide MOTD bar (used for loading this script)
        $("#ShoutboxScript").parent().parent().parent().parent().parent().hide();
        
        //TODO custom emote input
        
        postEdits();
        
        if (socket) //First page, autorefresh enabled. 
        {
            $( document ).ajaxComplete(function() { postEdits() }); //Shouldn't be needed, but somehow the socket function below fails when you're a mod.
            socket.on('newPost', function(mess) { postEdits(); });
        }
    });
}

function checkJquery() {
    if (window.jQuery) {
            jqueryLoaded();
    } 
        if(checker == 0) {
            console.log("Waiting for shoutbox jQuery to load...");
            checker = window.setInterval(checkJquery, 100);
        }
}	

checkJquery();




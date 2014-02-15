function supports_local_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch(e){
    return false;
  }
}

//Insert string function for use further in the script.
String.prototype.insert = function (index, string) 
{
    if (index > 0)
        return this.substring(0, index) + string + this.substring(index, this.length);
    else
        return string + this;
};


//Find the banner at the top of the page
var banner;
var imgs = document.getElementsByTagName ('img');
for (i=0; i<imgs.length ; i++) 
{
    if(imgs[i].src == "http://www.awesomenauts.com/forum/styles/awesome/imageset/sitelogo.jpg")
    {
        banner = imgs[i];
    }
}

var script = document.createElement("script");
script.type = "text/javascript";

if (supports_local_storage()) //Local storage supported, good!
{
	var currentVersion = 2.7;

	GetStorage = function(item)
	{
		return JSON.parse(localStorage.getItem(item));
	}

	SetStorage = function(item, value)
	{
		localStorage.setItem(item, JSON.stringify(value));
	}

	if (GetStorage('version') == undefined)
	{
		//Storage version not found, set default values for all variables. 
		SetStorage('version',0); //Set current version to 0. Will induce all default settings. 
	}

	if (GetStorage('version') < currentVersion)
	{
		if (GetStorage('version')<2.5)
		{
			SetStorage('testScript',false);
			SetStorage('markingMode',1); //Post marking mode, 0 = none, 1 = avatar outline, 2 = avatar panel background
			SetStorage('markingColor',"blue"); //Post marking color. 
			SetStorage('markingText',"white"); //Text color used when markingMode = 2
			SetStorage('extraSmilies',true); //Extra smilies for posting. 
			SetStorage('strawpollEmbed',true); //Auto embedding of Strawpoll.me polls. 
		}
		
		if (GetStorage('version')<2.61)
		{
			SetStorage('settingsLink',true); //Puts a link for the settings in the top menu
		}
		
		if (GetStorage('version')<2.7)
		{
			SetStorage('extraBBCode',true); //Adds extra bbcode to the post menu
		}
		
		SetStorage('version',currentVersion); //Set the current version to prevent resetting to defaults next time. 
		alert("Awesomenauts Forum UserScript updated! Current version: " + currentVersion); //Alert the user that an update has happened.
	}

	if ( GetStorage('testScript') == true ) //Load test script?
	{
        banner.src = "https://github.com/Chirimorin/AwesomenautsForumAddon/raw/master/Resources/ReplaceBannerTest.png";
		script.src = "https://github.com/Chirimorin/AwesomenautsForumAddon/raw/master/AwesomenautsForumTest.js"
	}
	else //Load latest script version
	{
        banner.src = "https://github.com/Chirimorin/AwesomenautsForumAddon/raw/master/Resources/ReplaceBanner.png";
		script.src = "https://github.com/Chirimorin/AwesomenautsForumAddon/raw/master/AwesomenautsForumLatest.js"
	}
}
else //Local storage not supported, load legacy script. 
{
    banner.src = "https://github.com/Chirimorin/AwesomenautsForumAddon/raw/master/Resources/ReplaceBanner.png";
    script.src = "https://github.com/Chirimorin/AwesomenautsForumAddon/raw/master/AwesomenautsForumLegacy.js"
}

document.body.appendChild(script);

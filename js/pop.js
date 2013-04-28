function unpopup() {
    $("#popOverlay").css('display', 'none');
    $("#popBox").css('display', 'none');
}

function share(url) {
    window.open(decodeURIComponent(url));
}

function popup(img_path) {

    var fb = encodeURIComponent('https://www.facebook.com/sharer/sharer.php?u=');
    var tw = encodeURIComponent('https://twitter.com/home?status=');
    var plus = encodeURIComponent('https://plusone.google.com/_/+1/confirm?hl=en&url=');

    // check whether the pop code has existed already
    var elem = document.getElementById("popOverlay");
    if (elem != undefined) {
	$('#popOverlay').css('display', 'block');
	$('#popBox').css('display', 'block');
	$('#popBox').css('top', $(document).scrollTop() + 150);
	$('#popImageId').attr('src', img_path);

	$('#popOverlay').click(function() { unpopup(); });

	return ;
    }
    
    var pop_html = '';

    // background
    pop_html += ('<div id="popOverlay" onclick="unpopup()" style="width: '+$(window).width()+'px; height: '+$(document).height()+'px; display: block;"></div>');

    // popup image
    image_top = $(document).scrollTop() + 150;
    pop_html += ('<div id="popBox" style="display: block; top:'+ image_top +'px; left: 0px;">');
    pop_html += ('<div id="popImage">');
    pop_html += ('<img id="popImageId" src="'+img_path+'" onclick="unpopup()" >');
    pop_html += ('</div>'); // popup image

    // popup bottom - sharring buttons and close icon
    pop_html += ('<div class="popBottom" style="display: block;">');

    pop_html += ('<div class="popBottomImg"><img src="images/close.png" onclick="unpopup()"></div>');
    pop_html += ('<div class="shareButtons">');
    pop_html += ('<ul>');
    var url = encodeURIComponent('http://onejob.com/' + img_path);
    var fb_url = fb+url;
    pop_html += ('<li><img class="popBottomImg" src="images/fb.jpeg" onclick="share(&apos;'+fb_url+'&apos;)"></li>');
    var tw_url = tw + url;
    pop_html += ('<li><img class="popBottomImg" src="images/tw.jpeg" onclick="share(&apos;'+tw_url+'&apos;)"></li>');
    var plus_url = plus + url;
    pop_html += ('<li><img class="popBottomImg" src="images/plus.jpeg" onclick="share(&apos;'+plus_url+'&apos;)"></li>');
    pop_html += ('</ul>');
    pop_html += ('</div>');
    
    pop_html += ('</div>'); // popup bottom
    
    var body = document.getElementsByTagName("body")[0];
    body.innerHTML += pop_html;

    $('#popOverlay').click(function() { unpopup(); });
}

function popup_alert(text, bgcolor = "#f00", bgimg = "", fcolor = "#000", fsize = "", hid = false) {
    let ar, arw;
    ar = document.getElementById('aler');
    arw = document.getElementById('alerw');
    if (ar) {
        ar.remove();
        arw.remove();
    }
    document.body.innerHTML += `<div id="alerw" class="alert-rlss-wrapper alert-rlss-hidden" onclick="hid_popup_alert()">
                                    <div id="aler" class="alert-rlss-center-div alert-rlss-anim-dev alert-rlss-hidden alert-rlss-center-text"></div>
                                </div>`;
    ar = document.getElementById('aler');
    arw = document.getElementById('alerw');
    ar.style.display = !hid ? 'flex' : 'none';
    arw.style.display = !hid ? 'block' : 'none';
    if (bgcolor)
        ar.style.backgroundColor = bgcolor;
    if (bgimg)
        ar.style.backgroundImage = "url(" + bgimg + ")";
    if (fcolor)
        ar.style.color = fcolor;
    if (fsize)
        ar.style.fontSize = fsize;
    ar.innerHTML = text;
}

function hid_popup_alert() {
    popup_alert(undefined, undefined, undefined, undefined, undefined, true);
}
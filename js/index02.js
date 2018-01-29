/**
 * Created by maizhijian on 2017/7/4.
 */
function dafaultPlan() {
    document.getElementById('linkCSS').href = 'css/index_default.css';
}

function bluePlan() {
    document.getElementById('linkCSS').href = 'css/index_blue.css';
}
function pinkyPlan() {
    document.getElementById('linkCSS').href = 'css/index_pinky.css';
}

var i = localStorage.BGtheme;
changeSkin(i);
function changeSkin(id) {
    if (id =='dafault'){
        dafaultPlan();
        localStorage.setItem('BGtheme','dafault')
    }
    if (id =='blue'){
        bluePlan();
        localStorage.setItem('BGtheme','blue')
    }
    if (id =='pinky'){
        pinkyPlan();
        localStorage.setItem('BGtheme','pinky')
    }

}
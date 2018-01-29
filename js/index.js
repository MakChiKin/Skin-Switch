/**
 * Created by maizhijian on 2017/7/4.
 */
function greenPlan() {
    document.getElementById('hightLight').className = 'actionGreen';
    document.getElementById('bodyct-header_ul').className = 'bodyct-header_green';
}

function bluePlan() {
    // document.body.style.backgroundColor = 'rgba(65,129,255,0.1)';
    document.getElementById('hightLight').className = 'actionBlue';
    document.getElementById('bodyct-header_ul').className = 'bodyct-header_blue';
    var a = document.getElementsByClassName('greenFont');
    var c  = a.length;
    // for (var b=0;b<c; ++b){
    //     console.log(b);
    //     a[0].className = 'blueFont';
    //     console.log('a的数量：'+a.length);
    // }
    for (var b in a){
        console.log(b);
        a[0].className = 'blueFont';
        console.log('a的数量：'+a.length);
    }
}
jQuery(document).ready(function ($) {
    // ico01 animated-in

    GetAnimBlocks();
    setInterval(function () { // планируем setInterval каждые 24сек
        GetAnimBlocks();
    }, 10000);

});

function GetAnimBlocks() {
    setTimeout(function () {
        BlockAnimReset();
        BlockAnim4();
    }, 0);

    setTimeout(function () {
        BlockAnimReset();
        BlockAnim3();
    }, 1500);

    setTimeout(function () {
        BlockAnimReset();
        BlockAnim2();
    }, 3000);

    setTimeout(function () {
        BlockAnimReset();
        BlockAnim1();
    }, 4500);
    
    setTimeout(function () {
        BlockAnimReset();
        BlockAnim4();
        BlockAnim3();
        BlockAnim2();
        BlockAnim1();
    }, 6000);
}

function BlockAnim1() {    
    jQuery(".ico01 .str1, .bt_box1.tb1, .bt_box2.tb1").addClass("activebox");
}

function BlockAnim2() {
    jQuery(".ico01 .str2, .bt_box1.tb2, .bt_box2.tb2").addClass("activebox");
}

function BlockAnim3() {
    jQuery(".ico02").addClass("activebox");
}

function BlockAnim4() {
    jQuery(".ico01 .str3, .bt_box1.tb3, .bt_box2.tb3").addClass("activebox");
}

function BlockAnimReset() {
    jQuery(".animblock0001 div").removeClass("activebox");
}
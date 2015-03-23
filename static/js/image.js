function img_one (ele) {
    // 我是时尚
    var first = $(ele).find("div")[0],
        second = $(ele).find("div")[1];

    move(first)
        .set('opacity', 1 - $(first).css("opacity"))
        .duration('2s')
        .end();

    move(second)
        .set('opacity', 1 - $(second).css("opacity"))
        .duration('2s')
        .end();
}
function img_two (ele) {
    // 不吃药打死你
}

function img_three (ele) {
    // 萌化～
    var first = $(ele).find("div[index='1']")[0],
        second = $(ele).find("div[index='2']")[0];

    if ($(ele).attr("status") == 1) 
        return;
    else 
        $(ele).attr("status", 1);

    move(first)
        .scaleX(0.45)
        .scaleY(0.8)
        .rotateY(90)
        .duration('1.5s')
        .end();

    move(second)
        .scaleX(0.45)
        .scaleY(0.8)
        .rotateY(-90)
        .duration('1.5s')
        .end(function() {
            $(second).css("opacity", 1);

            move(second)
                .scaleX(1)
                .scaleY(1)
                .rotateY(0)
                .duration('1.5s')
                .end(function() {

                    $(first).attr("index", '2');
                    $(first).css("opacity", 0);
                    css($(first), "-webkit-transform", "none");

                    $(second).attr("index", '1');
                    $(second).css("opacity", 1);
                    css($(second), "-webkit-transform", "none");

                    $(ele).attr("status", 0);
                });
        });
}

function img_four (ele) {
    // 好青年
    var first = $(ele).find("div[index=1]")[0],
        second = $(ele).find("div[index=2]")[0],
        third = $(ele).find("div[index=3]")[0],
        fourth = $(ele).find("div[index=4]")[0];

    if ($(ele).attr("status") == 1) 
        return;
    else 
        $(ele).attr("status", 1);

    move(first)
        .rotateY(-120)
        .duration('1.5s')
        .end(function (argument) {
            $(first).css("z-index", 10);
            $(second).css("z-index", 11);

            $(first).attr("index", 2);
            $(second).attr("index", 1);

            css($(first), "-webkit-transform", "none");
        });

    move(third)
        .rotateY(120)
        .duration('1.5s')
        .end(function() {
            $(third).css("z-index", 10);
            $(fourth).css("z-index", 11);

            $(third).attr("index", 4);
            $(fourth).attr("index", 3);

            css($(third), "-webkit-transform", "none");
        });

    setTimeout(function() {
        $(ele).attr("status", 0);
    });
}

function img_five (ele) {
    // 我为何如此美
}
function img_six (ele) {
    // 自拍中勿打扰
}
function img_seven (ele) {
    // 基情噼里啪啦
    var first = $(ele).find("img[index=1]")[0],
        second = $(ele).find("img[index=2]")[0];
}

function css (ele, key, value) {
    var map = [""];

    map.forEach(function (item) {
        ele.css(item + key, value);
    });
}

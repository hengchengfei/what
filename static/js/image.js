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
    var first = $(ele).find("div[index='1']")[0],
        second = $(ele).find("div[index='2']")[0];

    $(first).ripples('drop', Number.parseInt($(first).css("width")) / 2, Number.parseInt($(first).css("height")) / 2, 20, 0.4);

    $(second).css("opacity", 1);
    move(first)
        .set("opacity", 0)
        .duration('1s')
        .end(function () {

            $(first).ripples('destroy');
            $(first).ripples({resolution: 128, dropRadius: 20, perturbance: 0.4,});

            $(first).attr("index", '2');
            $(first).css("z-index", 10);

            $(second).attr("index", '1');
            $(second).css("z-index", 11);
        });

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
    }, 1500);
}

function img_five (ele) {
    // 我为何如此美
    var first = $(ele).find("div[index=1]"),
        second = $(ele).find("div[index=2]"),
        divs = $(ele).find("div[index=1] div");

    if ($(ele).attr("status") == 1) 
        return;
    else 
        $(ele).attr("status", 1);

    var count = 0, add_one = function () {
        count++;
        if (count === divs.length) {
            $(first).css("z-index", 10);
            $(second).css("z-index", 11);

            $(first).attr("index", 2);
            $(second).attr("index", 1);

            divs.css("margin-top", "0");
            $(ele).attr("status", 0);
        }
    };

    (function move_x (divs, current) {

        move(divs[current--]).ease('snap').set("margin-top", "100%").end(add_one);
        move(divs[current--]).ease('in').set("margin-top", "100%").end(add_one);
        move(divs[current--]).ease('out').set("margin-top", "100%").end(add_one);
        move(divs[current--]).ease('in-out').set("margin-top", "100%").end(add_one);

        if (current > 0) {
            setTimeout(move_x(divs, current), 1000);
        };
    })(divs, divs.length - 1);
}

function img_six (ele) {
    // 自拍中勿打扰
}

function img_seven (ele) {
    // 基情噼里啪啦
    var first = $(ele).find("div[index=1]")[0],
        second = $(ele).find("div[index=2]")[0];

    if ($(ele).attr("status") == 1) 
        return;
    else
        $(ele).attr("status", 1);

    move(first)
        .rotateY(80)
        .scale(0.8)
        .duration('1.5s')
        .end();

    move(second)
        .rotateY(-80)
        .duration('0.3s')
        .scale(0.7)
        .duration('0.3s')
        .end(function () {

            css($(first), "z-index", "10");
            css($(second), "z-index", "11");
            css($(second), "opacity", 1);

            setTimeout(function () {
                move(second)
                    .rotateY(0)
                    .scale(1)
                    .duration('1.5s')
                    .end(function () {
                        // over
                        $(first).attr("index", 2);
                        $(second).attr("index", 1);

                        css($(first), "opacity", "0");
                        css($(first), "-webkit-transform", "none");

                        $(ele).attr("status", 0);
                    });
            }, 1);
    });

}

function css (ele, key, value) {
    var map = [""];

    map.forEach(function (item) {
        ele.css(item + key, value);
    });
}

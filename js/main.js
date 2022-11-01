

const user_chara = ""
//ユーザーのキャラを決まる
$(".user-select").on("click", function () {
    const user_chara = parseInt(prompt("ヘムヘムは１、稗田八宝菜は２をお選びください。"));
    if (user_chara === 1) {
        $(".user-name").text("ヘムヘム");
        $('.user').children('img').attr('src', 'https://github.com/ShoheiNagamura/janken-task/blob/main/img/hemhem-defo.png?raw=true');
    } else if (user_chara === 2) {
        $(".user-name").text("稗田八宝菜");
        $('.user').children('img').attr('src', '../img/hieta-defo.jpg');
    }
});

//相手キャラの画像を配列で用意
const chara_image = [
    "ranntarou.jpeg",
    "kirimaru.png",
    "sinnbe.png",
    "doi.png",
    "yamada.png",
    "gakuentcho.png"
]

// ルーレットの関数を用意
//相手のキャラをルーレットで決める
$(".start").on("click", function () {
    if ($(this).text() === "START") {
        $(this).text("STOP");
        timer = setInterval(function () {
            random = Math.floor(Math.random() * chara_image.length);
            $('.com').children('img').attr('src', '../img/' + chara_image[random]);

            // ランダムの値にとってCOMの名前を書き換え
            if (random === 0) {
                $(".com-name").text("乱太郎");
            } else if (random === 1) {
                $(".com-name").text("きり丸");
            } else if (random === 2) {
                $(".com-name").text("しんべえ");
            } else if (random === 3) {
                $(".com-name").text("土井先生");
            } else if (random === 4) {
                $(".com-name").text("山田先生");
            } else {
                $(".com-name").text("学園長");
            }
        }, 30);
    } else {
        $(this).text("START");
        clearInterval(timer);
    }
});


$(".start-janken").on("click", function () {

    //自分とCOMを左右に移動させ襖を開ける
    $(".user").animate({
        "margin-left": "-100px",
        "margin-right": "100px",
    }, 1000)

    $(".com").animate({
        "margin-right": "-100px",
        "margin-left": "100px",
    }, 1000)

    //クリックすると出現
    $('.vs img').fadeIn();
    $('.p-hand-box').fadeIn(1000);
    $('.c-hand-box').fadeIn(1000);
});

// グー = 0
// チョキ = 1
// パー = 2

// グーの場合
$(".gu").on("click", function () {
    const com_random = Math.floor(Math.random() * 3);
    $('.choki').hide('slow');
    $('.pa').hide('slow');

    if (com_random === 0) {
        $(".com-hand p").text("✊")
        $('.result').slideDown(500);
        $('.result p').text("draw")
    } else if (com_random === 1) {
        $(".com-hand p").text("✌️")
        $('.result').slideDown(500);
        $('.result p').text("draw！")
    } else {
        $(".com-hand p").text("✋")
        $('.result').slideDown(500);
        $('.result p').text("Lose、、")
    }
})

// チョキの場合
$(".choki").on("click", function () {
    const com_random = Math.floor(Math.random() * 3);
    $('.gu').hide('slow');
    $('.pa').hide('slow');

    if (com_random === 0) {
        $(".com-hand p").text("✊")
        $('.result').slideDown(500);
        $('.result p').text("Lose、、")
    } else if (com_random === 1) {
        $(".com-hand p").text("✌️")
        $('.result').slideDown(500);
        $('.result p').text("draw")
    } else {
        $(".com-hand p").text("✋")
        $('.result').slideDown(500);
        $('.result p').text("Win！")
    }
})

// パーの場合
$(".pa").on("click", function () {
    const com_random = Math.floor(Math.random() * 3);
    $('.gu').hide('slow');
    $('.choki').hide('slow');


    if (com_random === 0) {
        $(".com-hand p").text("✊")
        $('.result').slideDown(500);
        $('.result p').text("Win！")
    } else if (com_random === 1) {
        $(".com-hand p").text("✌️")
        $('.result').slideDown(500);
        $('.result p').text("Lose、、")
    } else {
        $(".com-hand p").text("✋")
        $('.result').slideDown(500);
        $('.result p').text("draw")
    }
})


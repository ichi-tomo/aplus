
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    // ドロワーメニュー

    $(".js-drawer").click(function () {
        $(".js-drawer").toggleClass("open");
        $(".drawer-menu").toggleClass("open");
        $("html").toggleClass("is-fixed");
        $("body").toggleClass("is-fixed");
    });

    // ドロワーメニューが768px以上で自動で閉じるようにする

    $(window).resize(function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
            closeDrawer();
        }
    });

    function closeDrawer() {
        $('.js-drawer').removeClass('open');
        $('.drawer-menu').removeClass('open');
    }

    //slick mvのスライドショーの設定

    $(".js-top-mv-slick")
        // 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
        .on("init", function () {
            $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
        })
        // 通常のオプション
        .slick({
            autoplay: true, // 自動再生ON
            fade: true, // フェードON
            arrows: false, // 矢印OFF
            speed: 2000, // スライド、フェードアニメーションの速度2000ミリ秒
            autoplaySpeed: 4000, // 自動再生速度4000ミリ秒
            pauseOnFocus: false, // フォーカスで一時停止OFF
            pauseOnHover: false, // マウスホバーで一時停止OFF
        })
        .on({
            // スライドが移動する前に発生するイベント
            beforeChange: function (event, slick, currentSlide, nextSlide) {
                // 表示されているスライドに"add-animation"のclassをつける
                $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
                // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
                $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
            },
            // スライドが移動した後に発生するイベント
            afterChange: function () {
                // 表示していないスライドはアニメーションのclassを外す
                $(".remove-animation", this).removeClass(
                    "remove-animation add-animation"
                );
            },
        });

        //slick トップページギャラリーのスライドショーの設定
        $(function () {
            $(".js-top-gallery-slick").slick({
                autoplay: true,
                autoplaySpeed: 0,
                speed: 6000,
                cssEase: 'linear',
                slidesToShow: 1,
                swipe: false,
                pauseOnFocus: false, 
                pauseOnHover: false,
                arrows: false,
                variableWidth: true
            });
        });

});

$(function () {
    /*初始化fullpage组件*/
    /*1.设置每一个屏幕的背景颜色*/
    /*2.设置屏幕内容的对齐方式  默认是垂直居中的  改成顶部对齐*/
    /*3.设置导航 设置指示器 点容器*/
    /*4.监听进入某一屏的时候 回调*/
    $('#container').fullpage({
        /*配置参数*/
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad:function (link,index) {
            /*index 序号 1开始  当前屏的序号*/
            $('.section').eq(index-1).addClass('now');
        },
        /*离开某一个页面的时候触发*/
        onLeave:function (index,nextIndex,direction) {
            if(index == 2 && nextIndex == 3){
                /*当前是从第二页到第三页*/
                $('.section').eq(index-1).addClass('leaved');
            }else if(index == 3 && nextIndex == 4){
                /*当前是从第三页到第四页*/
                $('.section').eq(index-1).addClass('leaved');
            }else if (index == 5 && nextIndex == 6) {
                $('.section').eq(index-1).addClass('leaved');
                $('.section .box').addClass('show');
            }else if (index == 6 && nextIndex == 7) {
                $('.section .star').addClass('show');
                $('.section .text').addClass('show');
                $('.section .star img').each(function (i,item) {
                    $(this).css('transition-delay',i*0.5+'s');
                });       
            }
        },
        afterRender:function () {
            /*点击更多切换下一页*/
            $('.more').on('click',function () {
                $.fn.fullpage.moveSectionDown();
            });

            /*当第四屏的购物车动画结束之后执行收货地址的动画*/
            $('.screen4 .cart').on('transitionend',function () {
                $('.screen4 .address').show().find('img:last').fadeIn(1000);
                $('.screen4 .text').addClass('show');
            });

            // 最后一屏手跟着鼠标移动
            $('.screen8').on('mousemove',function (e) {
                $(this).find('.hand').css({
                    left:e.clientX - 270,
                    top:e.clientY -20
                })
                
            });

            // 点击后回到第一屏
            $('.screen8 .again').on('click',function () {  
                $('.now , .show ,.leaved').removeClass('now').removeClass('show').removeClass('leaved');
                $('.content [style]').removeAttr('style');
                 /*跳回第一页*/
                $.fn.fullpage.moveTo(1);
            })
        },
        /*页面切换的时间 默认是700*/
        scrollingSpeed:1000
    });
});

/**
 * Created by MAC on 2017/10/20.
 */
app.directive('car',function(){
    return{
        templateUrl:"App/View/temp/_fuwu.html",
        link:function(){
            var mySwiper = new Swiper('.banner',{
                direction:"horizontal",
                pagination:".swiper-pagination",
                autoplay:5000
            })
        }
    }
});
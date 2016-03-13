/**
 * Created by kikepieraserra on 13/03/2016.
 */

$(window).load(function(){
    $('.container').find('img').each(function(){
        var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
        $(this).addClass(imgClass);
    })
})
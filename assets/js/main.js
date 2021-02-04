jQuery(function ($) {

        carouselImage()


});

function carouselImage(){
 let preview = jQuery('#carouselPreview').find('.carousel-bg');
 let imageList = jQuery('.img-carousel').find('.list-preview');
 let lenght = jQuery('.img-carousel').find('img.list-preview').length;

   /* let src =  jQuery('.img-carousel').find('img.list-preview').first().attr('src');
    jQuery('.carousel-bg').css("background-image", "url("+ src+")");*/
    let offset = 0;
    let mainOffset = 0;
    setInterval(function (){

        imageList.each(function (){
            // Remuevo la clase a la current image
            var parent =   jQuery(this).closest('.img-carousel');

            //Obtengo los valores que necesito
            var  src = jQuery(this).attr('src');
            var featured = jQuery(this).data('featured');

            setTimeout(function (){
                jQuery(parent).find('.overlay').removeClass('active');
                //quito los
                let currentOverlay =   jQuery(parent).find('.overlay');
                let actives =   jQuery('.img-carousel').find('.overlay');
                actives.not(currentOverlay).addClass('active');
                jQuery('.carousel-bg').css("background-image", "url("+ src+")");
                jQuery('.carousel-bg').find('.post-title a').html(featured);
            },  offset);
            offset += 3000;

        });
    }, mainOffset);

    mainOffset += 9000;




}
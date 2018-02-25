$( document ).ready(function() {
    var upper = $('.uppernav');
    var childrens = upper.children();

    for(var cpt = 0 ; cpt < childrens.length ; cpt++){
        let id = childrens[cpt].id;

        $('#'+id).click(function(){
            $(".lowernav").hide();

            if($('#'+id).hasClass("has-child")){
                console.log('#lower'+id+" click");

                if($('#'+id).hasClass("upper-active")){
                    $(".main-nav ").removeClass("upper-active");
                }else{
                    $(".main-nav ").removeClass("upper-active");
                    $('#lower'+id).show();
                    $('#'+id).addClass("upper-active");
                }

            }else{
                $(".main-nav ").removeClass("upper-active");
                $('#'+id).addClass("upper-active");
            }

        });

    }

});
$( document ).ready(function() {
    var upper = $('.uppernav');
    var childrens = upper.children();
    //Verifying all elements of main menu
    for(var cpt = 0 ; cpt < childrens.length ; cpt++){
        let id = childrens[cpt].id;
        //adding onclick action on It
        $('#'+id).click(function(){
            $(".lowernav").hide();

            //if he has dropdowns
            if($('#'+id).hasClass("has-child")){

                //If already active
                if($('#'+id).hasClass("upper-active")){
                    $(".main-nav ").removeClass("upper-active");
                //If not
                }else{
                    $(".main-nav ").removeClass("upper-active");
                    $('#lower'+id).show();
                    $('#'+id).addClass("upper-active");
                }
            
            //If it doesn't have any dropdowns
            }else{
                $(".main-nav ").removeClass("upper-active");
                $('#'+id).addClass("upper-active");
            }

        });

    }

});
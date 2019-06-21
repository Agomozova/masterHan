
$(document).ready(function () {
/*animated buttom*/
    $(".send").hover(function (e) {
        $(".icon").addClass('animated heartBeat');
    });
    $(".send").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
        $(".icon").removeClass('animated heartBeat');
    });

/*request*/
    $(function() {
        $('.for_click, .request_about').click(function(){
            if ($(".request_form").css("display") == "none") {
                $(".request_form").show();
                $(".request_btn").hide();
                $(".request_title").css("border-radius", "46px 46px 0 46px");
                $(".request_close-btn").css("display", "block");
            }
            else {
                $(".request_form").hide();
                $(".request_btn").show();
                $(".request_title").css("border-radius", "46px");
                $(".request_close-btn").css("display", "none");
            }  
        });
    });

/*form*/
    $(function() {
        $("form").submit(function(e) {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        $.ajax({
            url: 'send.php',
            type: 'POST',
            data: formNm.serialize(),
            success: function(res) {
            if(res == 1) {
                formNm.find(".repair_cost-form input, .request_form-input").val("");
                alert("Письмо отправлено");
            } else {
                alert("Ошибка отправки! Попробуйте позже или позвоните +7 (915) 114-15-11!");
            }
            },
            error: function(){
            alert("Ошибка!")
            } 
        });
        e.preventDefault();
        });
    });

/*scroll menu*/
    var $menu = $(".main_header");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 500 && $menu.hasClass("default") ){
            $menu.removeClass("default").addClass("fixed");
            $(".infomation").hide();
            $(".fixed_menu").addClass("d-flex").show();
            $(".logo_name").css("font-size", "1.4em");
            $(".logo img").attr("src", "img/penguin-xxs.png")
            
        } else if($(this).scrollTop() <= 500 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
            $(".infomation").show();
            $(".fixed_menu").removeClass("d-flex").hide();
            $(".logo_name").css("font-size", "2.2em");
            $(".logo img").attr("src", "img/penguin-xs.png")
        }
    });


    
});

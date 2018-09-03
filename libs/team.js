jQuery(document).ready(function ($) {

    $('body').on('click', 'div[data-persid]', function () {
        var id = $(this).attr('data-persid');
        var cid = $(this).attr('data-cid'); 
        $(".pers_img_block").removeClass('p_active'); 
        $(this).addClass('p_active');
        $.ajax({
            url: "/wp-admin/admin-ajax.php",
            type: "POST",
            data: "action=get_teaminfo&id=" + id,
            success: function (html) {                
                $("#team_containid_"+cid).html(html);                
            }
        });
    });
    
    $('.pers_cnt_box div:first-child').click();
              
});
$(function () {

    function sendFeedBack(listname, email, messageElement) {
        $.post('/subscribe/', {"email": email, "mailchimp": listname}, function(data) {
            if (data.status == 'ok') {
                messageElement.show().text("Thanks for your submission!");
                $('#subscribe-popup-form').data('url', '/fill_subscribe_info/'+data.code+'/');
                openPopupById('#subscribe-popup');
            } else {
                messageElement.show().text(data.error)
            }
        }, 'json');
    }

    $(document).on('click', '.sbbtn', function(e) {
        e.preventDefault();
        ga('send', 'event', 'button', 'subscribe_for_news');
        twttr.conversion.trackPid('nxxbu', { tw_sale_amount: 0, tw_order_quantity: 0 });
        fbq('track', 'Lead');
        if (jQuery('#subform-output').length == 0) jQuery('.subform').append('<h6 id="subform-output" style="text-align: center;"></h6>');
        sendFeedBack('tge2', $('#subid001:input').val(), $('#subform-output'));
    });
    $(document).on('click', '.feedback__submit', function(e) {
        e.preventDefault();
        sendFeedBack('tge2tokenpage', $(this).parent().siblings(':input').val(), $(this).parent().parent().siblings('.feedback-message'))
    });

    $(document).on('submit', '#subscribe-popup-form', function(e) {
        e.preventDefault();
        $.post($(this).data('url'), $(this).serialize(), function() {
            $('.g-overlay_black,#subscribe-popup').hide();
        }, 'json');
    });

});

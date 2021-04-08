
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var subject = $('.validate-input input[name="subject"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(event){
        event.preventDefault();
        var check = true;

        //random contact number
        this.contact_number.value=  Math.random() * 100000 | 0;

        if($('#user_name').val().trim() == ''){
            showValidate(user_name);
            check=false;
        }

        //if($(subject).val().trim() == ''){
          //  showValidate(subject);
          //  check=false;
        //}


        if($('#user_email').val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(user_email);
            check=false;
        }

        if($('#message').val().trim() == ''){
            showValidate(message);
            check=false;
        }

        if (check == true) {
          emailjs.sendForm('service_4x36ald', 'template_jyhdwem', this)
                    .then(function() {
                        alert('Sent message; please also do not spam this or this functionality will be taken down.');
                    }, function(error) {
                        alert('FAILED...', error);
                    });
        }
        return check;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);

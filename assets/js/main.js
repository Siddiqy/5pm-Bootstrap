$(document).ready(function(){
    $('#form-validation').validate({
        rules: {
            name: "required",
            phone: {
                required: true,
                number: true,
                minlength: 11
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            name: {
                required: "Please type your name."
            },
            phone: {
                required: "Phone number is mandatory."
            },
            email: {
                required: "Email address is mandatory."
            },
            message: {
                required: "This field can't be empty."
            }
        }, 
        submitHandler: function(form) {
            $(form).submit();
        }
    });
});
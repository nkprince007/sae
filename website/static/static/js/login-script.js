$(document).ready(function() {
    $(".login-form").find(".cpassword, .fname, .lname, .roll-class, .branch-class, .phone-class, .ev").hide();
    $(".firstName, .lastName, .confirmPassword, .password, .email, .roll, .phone, .branch").hide();
    $("#form").find(".btn").html("Log In");
    $("#tab-group").find(".btn").click(function(event) {
        if ($(this).hasClass("btn-active"))
            return;
        resetForm();
        var prev = $("#tab-group").find(".btn-active");
        var cur = $("#tab-group").find(".btn-inactive");
        prev.removeClass("btn-active").addClass("btn-inactive");
        cur.removeClass("btn-inactive").addClass("btn-active");
        if ($(".btn-active").html() == "Login") {
            $("#form").find(".cpassword, .fname, .lname, .roll-class, .branch-class, .phone-class, .ev").hide(200);
            $("#form").removeClass('register-form').addClass('login-form');
            $("#form").find(".btn").html("Log In");
        } else {
            var validator = $('#form').validate()
            validator.resetForm();
            var settings = validator.settings
            $.extend(settings, {
                rules: {
                    firstName: {
                        required : true,
                        minlength : 3,
                        maxlength : 15
                    }, 
                    lastName: {
                        required : true,
                        minlength : 3,
                        maxlength : 15
                    },
                    roll: {
                        required : true,
                        minlength : 3,
                        maxlength : 15
                    },
                    branch: {
                        required : true,
                        minlength : 3,
                        maxlength : 30
                    },
                    phone: {
                        required : true,
                        minlength : 10,
                        maxlength : 15
                    },
                    confirmPassword: {
                        required : true,
                        equalTo : '#password'
                    }
                }, 
                messages: {
                    confirmPassword : "Passwords do not match",
                    lastName : {
                        required : "Your Last Name is required.",
                        minlength : "Last name should atleast 3 letters long",
                        maxlength : "Last name exceeds specified size limit."
                    },
                    firstName : {
                        required : "Your First Name is required.",
                        minlength : "First name should atleast 3 letters long",
                        maxlength : "First name exceeds specified size limit."
                    },
                    roll : "Invalid Roll No. entered",
                    branch : "Enter a valid branch name",
                    phone : "Enter a valid mobile number"
                }
            })
            $("#form").find(".btn").html("Sign Up");
            $("#form").find(".cpassword, .fname, .lname, .roll-class, .branch-class, .phone-class, .ev").show(250);
            $("#form").addClass('register-form').removeClass('login-form');
        }
    });

    $("#form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 15
            }
        },
        messages: {
            password: {
                required: "please provide a password",
                minlength: "password should have at least 8 characters"
            },
            email: "please enter a valid email address",
        },
        showErrors: function(errorMap, errorList) {
            $(".firstName, .lastName, .confirmPassword, .password, .email, .roll, .phone, .branch").hide();
            for (i=0;i<errorList.length;i++) {
                var id = errorList[i].element.getAttribute("id")
                var str = "."+id
                var msg = errorList[i].message
                $(str).html(msg);
                $(str).show(100);
            }
        },
        submitHandler: function(){
            if ($("#form").hasClass("login-form")) {
                postLogin();
            } else {
                postRegister();
            }
        } 
    });
});  

function postRegister() {
    var data = $("#form").serialize();
    $.ajax({
        type: 'POST',
        url: '../server-scripts/register.php',
        data: data,
        beforeSend: function() {
            console.log(data);
            $(".firstName, .lastName, .confirmPassword, .password, .email, .roll, .phone, .branch").hide();        
        },  
        success: function(data) {
            console.log(data);
            if(data=="SUCCESS") {
                window.location="../index.html";
            }
        }
    })
}

function postLogin() {
    var data = {
        email: $("#email").val(),
        password: $("#password").val() 
    }

    $.ajax({
        type: 'POST',
        url: '../server-scripts/login.php',
        data: data,
        beforeSend: function() {
            $("#form").find('.btn').html('Logging in...');
        },
        success : function(data) {
            if(data=="SUCCESS") {
                window.location = 'home.php';
            } else {
                $('.password').html("Invalid credentials!!").css("color","red").show(500);
                resetForm();
                $("#form").find(".btn").html("Log In");
                $('#form').addClass("animated wobble");
            }
        }
    })
}

function resetForm() {
    var form = document.getElementById("form");
    form.reset();
}
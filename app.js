$(document).ready(function(){


    $("#login").click(function(){
        const email = $("#email").val();
        const password = $("#password").val();
        if(email.length == ""){
            $(".email").addClass("is-invalid");
        } else {
            $(".email").removeClass("is-invalid");
        }

        if(password.length == ""){
            $(".password").addClass("is-invalid");
        } else {
            $(".password").removeClass("is-invalid");
        }

        if(email.length != "" && password.length != ""){
            $.ajax({
                type : 'POST',
                url  : 'userLogin.php',
                data : {'email': email, 'password': password},
                dataType : 'JSON',
                success : function(feedback){
                    if(feedback.status === "success"){
                        window.location = "profile.php";
                    } else if(feedback.status === "passwordError"){
                        $(".password").addClass("is-invalid");
                        $(".passwordError").html(feedback.message);
                        $(".email").removeClass("is-invalid");
                        $(".emailError").html("");
                    } else if(feedback.status === "emailError"){
                        $(".password").removeClass("is-invalid");
                        $(".passwordError").html("");
                        $(".email").addClass("is-invalid");
                        $(".emailError").html(feedback.message);
                    }
                }
            })
        }
    })








})
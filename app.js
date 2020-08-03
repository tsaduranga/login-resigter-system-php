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




    $("#signup").click(function(){
        const name = $("#name").val();
        const email = $("#email").val();
        const password = $("#password").val();
        const re_password = $("#re-password").val();
        const phone = $("#phone").val();
        const address = $("#address").val();
        const nic = $("#nic").val();


        if(name.length == ""){
            $(".name").addClass("is-invalid");
        } else {
            $(".name").removeClass("is-invalid");
        }

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

        if(re_password.length == ""){
            $(".re-password").addClass("is-invalid");
        } else {
            $(".re-password").removeClass("is-invalid");
        }

        if(nic.length == ""){
            $(".nic").addClass("is-invalid");
        } else {
            $(".nic").removeClass("is-invalid");
        }

        if(phone.length == ""){
            $(".phone").addClass("is-invalid");
        } else {
            $(".phone").removeClass("is-invalid");
        }

        if(address.length == ""){
            $(".address").addClass("is-invalid");
        } else {
            $(".address").removeClass("is-invalid");
        }

        if(name.length != "" && email.length != "" && password.length != ""){
            $.ajax({
              type: "POST",
              url : "userSignup.php",
              data : {
                  "name": name, "email": email,
                   "password": password, "re_password" : re_password,
                   "nic" : nic , "address" :address, "phone" : phone
                },
              dataType: 'JSON',
              success : function(feedback){
                  if(feedback.status === "error"){
                      $(".email").addClass("is-invalid");
                      $(".emailError").html(feedback.message);
                  } else if(feedback.status === "success"){
                       window.location = "login.php";
                  }
              }
            })
        } 
    })






})
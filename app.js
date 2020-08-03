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

        var nameValidate=false;
        var emailValidate=false;
        var passwordValidate=false;
        var re_passwordValidate=false;
        var nicValidate=false;
        var addressValidate=false;
        var phoneValidate=false;

        if(name.length == ""){
            $(".name").addClass("is-invalid");
        } else {
            $(".name").removeClass("is-invalid");
            nameValidate=true;
        }


        //   NIC Validate
        if(nic.length == ""){
            $(".emailValidate").addClass("invisible");
            $(".nic").addClass("is-invalid");
        } else if(nic.length==10) {
           
            $(".emailValidate").addClass("invisible"); 
            $(".nic").removeClass("is-invalid");


            // last letter should be X or V
            const lastLetter = nic[nic.length-1];
            const numbers = nic.slice(0,nic.length-1);
           // console.log(numbers,!isNaN(numbers))
            if((lastLetter==='V' || lastLetter==='X') && !isNaN(numbers))
            {
                $(".emailValidate").addClass("invisible");
                nicValidate=true;
            }
            else
            {
                $(".emailValidate").removeClass("invisible");
            }

        }else{
            $(".nic").removeClass("is-invalid");
            $(".emailValidate").removeClass("invisible");
        }


        //End NIC Validate



        if(phone.length == ""){
            $(".phone").addClass("is-invalid");
            $(".phoneValidate").addClass("invisible");
        } else {
            $(".phone").removeClass("is-invalid");

            
            if(isNaN(phone)){
                $(".phoneValidate").removeClass("invisible");
                //document.write(num1 + " is not a number <br/>");
             }else{
                 
                //document.write(num1 + " is a number <br/>");
                if (phone.length == 10) {
                    $(".phoneValidate").addClass("invisible");
                    phoneValidate=true;
                }else{
                    $(".phoneValidate").removeClass("invisible");
                }
             }

            
        }

        if(address.length == ""){
            $(".address").addClass("is-invalid");
        } else {
            $(".address").removeClass("is-invalid");
            addressValidate =true;
        }

        //Email Validate

        if(email.length == ""){
            $(".email").addClass("is-invalid");
            $(".emailValidateError").addClass("invisible");
        } else {
            $(".email").removeClass("is-invalid");
            $(".emailValidateError").addClass("invisible");

            //reguler expression
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            if (filter.test(email)) {

                emailValidate =true;
         }else{
            $(".emailValidateError").removeClass("invisible");
         }
            

         

        }
        //Email Validate End


        //Password Validate 
        if(password.length == ""){
            $(".password").addClass("is-invalid");
            $(".passwordError").addClass("invisible");

            if(re_password.length == ""){
                $(".re-password").addClass("is-invalid");
            } else {
                $(".re-password").removeClass("is-invalid");
            }

        } else {
          

            if(re_password.length == ""){
                $(".re-password").addClass("is-invalid");
                $(".passwordError").addClass("invisible");
            } else {

                if(password  != re_password){
                    $(".re-password").removeClass("is-invalid");
                    $(".passwordError").removeClass("invisible");
                    
                } else {
                    $(".re-password").removeClass("is-invalid");
                    $(".passwordError").addClass("invisible");
                    passwordValidate=true;
                    re_passwordValidate =true;
                }
            }

            
        }

        //password Validate End

        

       
      //  console.log("name"+nameValidate);
        //console.log("email"+emailValidate);
        //console.log("password"+passwordValidate);
        //console.log("re password"+re_passwordValidate);
        //console.log("nic"+nicValidate);
        //console.log("phone"+phoneValidate);
        //console.log("addree"+addressValidate);

        if( (nameValidate == true) && (emailValidate == true) && (passwordValidate == true) && (re_passwordValidate == true) && (nicValidate == true) && (addressValidate == true) && (phoneValidate == true)){
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
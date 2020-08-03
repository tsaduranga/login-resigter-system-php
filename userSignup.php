
<?php
include "db.php";

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password']) 
    && isset($_POST['nic']) && isset($_POST['phone']) && isset($_POST['address'])){


    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = password_hash(trim($_POST['password']), PASSWORD_DEFAULT);

    $phone = trim($_POST['phone']);
    $nic = trim($_POST['nic']);
    $address = trim($_POST['address']);

    $checkEmail = $db->prepare("SELECT email FROM users WHERE email = ?");
    $checkEmail->execute([$email]);
    if($checkEmail->rowCount() > 0 ){
        echo json_encode(['status' => 'error', 'message' => 'Sorry this email is already taken']);
    } else {
     $Query = $db->prepare("INSERT INTO users (name, email, password, phone, nic, address ) VALUES (?,?,?,?,?,?)");
     $Query->execute([$name, $email, $password, $phone, $nic, $address]);
     if($Query){
         $_SESSION['created'] = "Your account has been created successfully";
         echo json_encode(['status' => 'success']);
     }
    }

}
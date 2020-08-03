
<?php
include "db.php";

if(isset($_POST['email']) && isset($_POST['password'])){

    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    $Query = $db->prepare("SELECT * FROM users WHERE email = ?");
    $Query->execute([$email]);
    if($Query->rowCount() > 0 ){
    $row = $Query->fetch(PDO::FETCH_OBJ);
    $dbPassword = $row->password;
    $name = $row->name;
    $id = $row->id;
    if(password_verify($password, $dbPassword)){
        $_SESSION['id'] = $id;
        $_SESSION['name'] = $name;
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'passwordError', 'message' => 'Your Password is wrong']);
    }
    } else {
        echo json_encode(['status' => 'emailError', 'message' => 'Your email is wrong']);
    }

}

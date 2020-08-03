
<?php
include "db.php";
if(!isset($_SESSION['id'])):
  header("location: login.php");
endif;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ajax Signup</title>
    <link rel="stylesheet" href="https://bootswatch.com/4/materia/bootstrap.min.css">
</head>
<body>
  <div class="container">
  <div class="row">
   <div class="col-md-12">
   <div class="jumbotron">
  <h1 class="display-3">Hello, <?php echo $_SESSION['name']; ?></h1>
  <hr class="my-4">
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="logout.php" role="button">Logout</a>
  </p>
</div>
   </div>
  </div>
  <!-- Close row -->
  </div>
  <!-- Close container -->

    
   <script src="app.js"></script>
</body>
</html>
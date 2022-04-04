<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>

<body>

    <a href="index.php">Return to login page.</a>
    <br><br>

    <?php
    require_once("functions.php");
    if (isset($_GET["utworzCookie"])){
        setcookie("cookie", "cookie_val", time() + $_GET["czas"], "/");
        echo "Cookie created!";
    }//trwa w przyblizeniu tyle ile się poda
    
    ?>
</body>

</html>
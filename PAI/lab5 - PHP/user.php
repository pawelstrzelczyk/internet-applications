<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>

<body>

    <a href="index.php">Return to login page.</a>
    <?php
    if ($_SESSION["zalogowany"] != 1) {
        header("Location: index.php");
    } else {
        require_once("functions.php");
        echo "<h2>Hello, " . $_SESSION["zalogowanyImie"] . "</h2>";
    }

    ?>

    <form action="index.php" method="post">
        <input type="submit" value="Wyloguj" name="Wyloguj"><br>
    </form>

    <form action='user.php' method='POST' enctype='multipart/form-data'>
        <input type="file" name="upload" value="Wybierz plik">
        <input type="submit">
    </form>

    <?php
    if (isset($_FILES["upload"])) {
        $uploadDirectory = "/zdjeciaUzytkownikow/";
        $currentDir = getcwd();
        $fileType = $_FILES["upload"]["type"];
        if (
            $_FILES["upload"]["name"] != "" &&
            ($fileType == 'image/png' || $fileType == 'image/jpeg' ||
                $fileType == 'image/PNG' || $fileType == 'image/JPEG')
        ) {
            $uploadPath = $currentDir . $uploadDirectory . $_FILES["upload"]["name"];
            move_uploaded_file($_FILES["upload"]["tmp_name"], $uploadPath);
            echo "Zdjęcie zostało załadowane na serwer";
        }
        echo "<br><br>";
    }
    ?>

    <img src="zdjeciaUzytkownikow/circle.png" alt="Brak zdjecia">
</body>

</html>
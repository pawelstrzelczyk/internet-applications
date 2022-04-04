<?php
session_start();
require("functions.php");

if (isset($_POST["Zaloguj"])) {
    if ($_POST["f_login"] == $osoba1->login && $_POST["f_haslo"] == $osoba1->haslo) {
        $_SESSION["zalogowanyImie"] = $osoba1->imieNazwisko;
        $_SESSION["zalogowany"] = 1;
        header("Location: user.php");
    } else if (($_POST["f_login"] == $osoba2->login) && ($_POST["f_haslo"] == $osoba2->haslo)) {
        $_SESSION["zalogowanyImie"] = $osoba2->imieNazwisko;
        $_SESSION["zalogowany"] = 1;
        header("Location: user.php");
    } else {
        $_SESSION["zalogowany"] = 0;
        header("Location: index.php");
    }
}
// echo "<a> Przesłany login: $_POST[f_login]</a><br>";
// echo "<a> Przesłane hasło: $_POST[f_haslo]</a><br><br>";

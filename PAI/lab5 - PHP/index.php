<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
	<title>PHP</title>
	<meta charset='UTF-8' />
</head>

<body>
	<a href="user.php">Go to user page.</a>

	<?php echo "<h1>Nasz system</h1>";

	if (isset($_POST["Wyloguj"])) {
		$_SESSION["zalogowany"] = 0;
	} ?>

	<?php
	require("functions.php");
	?>

	<form action="login.php" method="POST">
		<fieldset>
			<legend> Log in </legend>
			<table>
				<tr>
					<td>Login:</td>
					<td><input type="text" name="f_login"></td>
				</tr>
				<tr>
					<td>Hasło:</td>
					<td><input type="password" name="f_haslo"></td>
				</tr>
				<tr>
					<td colspan="2"><input type="submit" value="Zaloguj" name="Zaloguj"></td>

				</tr>
			</table>
		</fieldset>
	</form>

	<br><br>


	<form action="cookie.php" method="GET">
		<fieldset>
			<legend>cookie time set</legend>
			<table>
				<tr>
					<td>czas: </td>
					<td><input type="number" name="czas"></td>
				</tr>
				<tr>
					<input type="submit" name="utworzCookie">
				</tr>
			</table>

		</fieldset>

	</form>


	<br>
	<br>

	<?php
	if (isset($_COOKIE["cookie"])) {
		echo "Wartość ciasteczka: " . $_COOKIE["cookie"];
	}
	?>



</body>

</html>
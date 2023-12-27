<?php
session_start();
include("db_connect.php");
$login = $_POST['login'];
$password = $_POST['password'];
$md5_password = md5($password);
$query = mysqli_query($mysql, "SELECT * FROM `users` WHERE `login`='{$login}' AND `password`='{$md5_password}'");
if (mysqli_num_rows($query) == 1) {
    $_SESSION['user'] = ['nick' => $login];
    header("Location: /trueno/user.php");
} else {
    echo("Ошибка: Данный логин или пароль неправильны.");
}
?>
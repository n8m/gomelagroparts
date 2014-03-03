<?php

    $name = $_GET['name'];
    $email = $_GET['mail'];
    $message = $_GET['msg'];


    mail("name.xru@gmail.com", "Письмо с сайта", "Имя: $name \nМэйл: $email \n$message");

    // mail("name.xru@gmail.com", "Вопрос с сайта", "wow");


?>


<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if( $_POST) {


/* Exception class. */
require 'PHPMailer-master\src\Exception.php';

/* The main PHPMailer class. */
require 'PHPMailer-master\src\PHPMailer.php';

/*SMTP class, needed if you want to use SMTP. */
require 'PHPMailer-master\src\SMTP.php';
    
require 'PHPMailer-master\src\POP3.php';


$mail = new PHPMailer();
 
$mail->IsSMTP();
$mail->CharSet = "UTF-8";
$mail->SMTPSecure = 'tsl';
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->Username = "vsuarisvili@gmail.com";
$mail->Password = 'Cefhbidbkb79';
$mail->SMTPAuth = true;

$mail->From = 'vsuarisvili@gmail.com';
$mail->FromName = 'МастерХан';
$mail->AddAddress('gania_sundy@mail.ru');


$mail->IsHTML(true);
$mail->Subject = 'Заявка с сайта';
$mail->Body = "Имя: {$_POST['user_name']}<br>Телефон: {$_POST['user_phone']}";
$mail->AltBody = '';

if( $mail->send() ) {
    $answer = "1";
} else{
    $answer = "0";
}

die( $answer );

}


?>

<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $mail = new PHPMailer(true);

    try {

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'keranthey02@gmail.com';
        $mail->Password = 'wibp bzqd xiqn mdzd';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;


        $mail->setFrom($email, $name);
        $mail->addAddress('keranthey02@gmail.com');

        $mail->isHTML(false);
        $mail->Subject = 'Nouveau message via le portfolio';
        $mail->Body = "Nom: $name\nEmail: $email\nMessage:\n$message";

        $mail->send();
        echo "Votre message a bien été envoyé.";
    } catch (Exception $e) {
        echo "Erreur lors de l'envoi de l'e-mail : {$mail->ErrorInfo}";
    }
}
?>





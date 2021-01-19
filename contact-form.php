<?php

$EmailFrom = $_POST['email'];
$EmailTo = "citas@zihuacali.mx";
$Subject = "Mensaje desde tu web";
$Name = $_POST['name'];

$Subject = "Mensaje desde tu web";
$Phone = $_POST['phone'];
$Email = $_POST['email'];
$Service = $_POST['service'];
$Hour = $_POST['hour'];
$Date = $_POST['date'];
$Message = $_POST['message'] . "\n\n" . 'Saludos, ' . $_POST['name'] . '.';

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";

$Body .= "Subject: ";
$Body .= "Nuevo mensaje";
$Body .= "\n";

$Body .= "Phone: ";
$Body .= $Phone;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";

$Body .= "Servicio de interés: ";
$Body .= $Service;
$Body .= "\n";

$Body .= "Fecha: ";
$Body .= $Date;
$Body .= "\n";

$Body .= "Hora: ";
$Body .= $Hour;
$Body .= "\n";

$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";


// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");
if ($success) {
// header("Location: /thanks.html");
 exit;
} else {
 header("Location: /error.html");
 exit;
}
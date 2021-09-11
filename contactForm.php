<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $mailFrom = $_POST['email'];
  $subject = $_POST['subject'];
  $department = $_POST['department'];
  $message = $_POST['message'];

  $mailTo = "support@ckmarkets.com";
  $headers = "From: ".$mailFrom;
  $text = "Your have received an e-mail from ".$name.".\n\n".$department.".\n\n".$message;

  mail($mailTo, $subject, $text, $headers);
  header("Location: contact-us.html");
}

?>
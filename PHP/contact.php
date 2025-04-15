<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);
  $to = "rlphclmnte@gmail.com"; // Change to your email
  $subject = "Hiring Inquiry from $name";
  $headers = "From: $email";

  if (mail($to, $subject, $message, $headers)) {
    echo "<div class='success-msg'>Message sent successfully!</div>";
  } else {
    echo "<div class='error-msg'>Something went wrong. Please try again.</div>";
  }
}

include ('header/header.php') 
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Personal Portfolio </title>
  <link rel="stylesheet" href="../CSS/contact.css">
  <link rel="stylesheet" href="../CSS/header.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>

  <main>
    <section class="contact-section">
      <div class="form-container">
        <h2>Let's Work Together</h2>
        <p>If you’d like to connect, feel free to send a message below.</p>
        <form action="contact.php" method="POST" class="contact-form">
          <div class="input-group">
            <i class="fas fa-user"></i>
            <input type="text" name="name" placeholder="Your Name" required>
          </div>
          <div class="input-group">
            <i class="fas fa-envelope"></i>
            <input type="email" name="email" placeholder="Your Email" required>
          </div>
          <div class="input-group">
            <i class="fas fa-comment-dots"></i>
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="submit-btn"><i class="fas fa-paper-plane"></i> Send Message</button>
        </form>
      </div>
    </section>
  </main>

  <?php include ('header/footer.php')  ?>
</body>
</html>
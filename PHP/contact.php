<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);
  $to = "rlphclmnte@gmail.com"; 
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
  <title>Contact Me</title>
  <link rel="stylesheet" href="../CSS/contact.css">
  <link rel="stylesheet" href="../CSS/header.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>

<canvas id="constellation"></canvas>

<main>
  <section class="contact-section">
    <div class="form-container">
      <h2><i class="fas fa-star"></i> Let’s Work Together</h2>
      <p>Send me a message, I’ll get back to you faster than light</p>
      <form action="contact.php" method="POST" class="contact-form">
        <div class="input-group">
          <i class="fas fa-user-astronaut"></i>
          <input type="text" name="name" placeholder="Your Name" required>
        </div>
        <div class="input-group">
          <i class="fas fa-envelope-open-text"></i>
          <input type="email" name="email" placeholder="Your Email" required>
        </div>
        <div class="input-group">
          <i class="fas fa-meteor"></i>
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" class="submit-btn">
          <i class="fas fa-rocket"></i> Send Message
        </button>
      </form>
    </div>
  </section>
</main>

<?php include ('header/footer.php') ?>
<script src="../java/constellation.js"></script> <!-- If using background script -->
</body>
</html>
<?php Include ('header/header.php')  ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Portfolio</title>
    <link rel="stylesheet" href="../CSS/style.css">
    <link rel="stylesheet" href="../CSS/header.css">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />  
</head>
<body>

<canvas id="constellation"></canvas>

<section class="hero">
<img  src="../assets/landings.png" alt="">
  <div class="container-hero">
  <h2>I'm <span class="typewriter"><span class="typed-text"></span></span></h2>
    <p>I bring creativity and precision to front-end development and advertising operations.</p>
    <a href="projects.php" class="btn">View My Projects</a>
  </div>
</section>

<!-- ✨ Stats Section: Achievements FIRST -->
<section class="stats" id="stats">
  <div class="stat-box">
    <i class='bx bx-bullseye stat-icon'></i>
    <h3 class="counter" data-target="240">0</h3>
    <p>Completed Campaigns</p>
  </div>
  <div class="stat-box">
    <i class='bx bx-rocket stat-icon'></i>
    <h3 class="counter" data-target="198">0</h3>
    <p>Campaigns Set Live</p>
  </div>
  <div class="stat-box">
    <i class='bx bx-check-shield stat-icon'></i>
    <h3 class="counter" data-target="96">0%</h3>
    <p>QA Accuracy</p>
  </div>
  <div class="stat-box">
    <i class='bx bx-code-alt stat-icon'></i>
    <h3 class="counter" data-target="11">0</h3>
    <p>Front-End Projects</p>
  </div>
</section>

    <section class="skills">
    <div class="container">
      <h2>What I Do!</h2>
      <ul>
        <li>🎨 Front-End Development (HTML, PHP, CSS, JavaScript)</li>
        <li>🧪 Quality Assurance & Testing</li>
        <li>📊 Ad Operations (Lead Manager, Tune, Okata...)</li>
        <li>🖥️ Virtualization (VMware, VirtualBox)</li>
        <li>🛠️ SQL & Database Management</li>
        <li>🗣️ Multilingual: English, Filipino, Chavacano, Bisaya</li>
      </ul>
    </div>
  </section>   
    <?php Include ('header/footer.php')  ?>
    <script src="../java/index.js"></script>
</body>
</html>
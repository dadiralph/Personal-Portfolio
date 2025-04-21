<?php Include ('header/header.php')  ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Portfolio </title>
    <link rel="stylesheet" href="../CSS/skills.css">
    <link rel="stylesheet" href="../CSS/header.css">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>



<canvas id="matrixCanvas"></canvas>

<div class="container-skills">

<div class="card">

      <h1><i class="fas fa-user-cog"></i> Skills & Certifications</h1>

      <div class="tabs">
        <button class="tab-button active" onclick="showTab(event, 'computer')"><i class="fas fa-laptop-code"></i> Technical Skills</button>
        <button class="tab-button" onclick="showTab(event, 'communication')"><i class="fas fa-comments"></i> Communication</button>
        <button class="tab-button" onclick="showTab(event, 'certifications')"><i class="fas fa-certificate"></i> Certifications</button>
      </div>

      <div id="computer" class="tab-content active">
  <h2>Computer & Technical Skills</h2>

  <div class="skill-section">
    <h3><i class="fas fa-desktop"></i> Operating Basic Systems</h3>
    <div class="skills-flex">
      <div class="skill" style="animation-delay: 0.4s;"><i class="fas fa-laptop"></i> Basic OS Navigation</div>
      <div class="skill"><i class="fas fa-headset"></i> CRM Platforms</div>
    </div>
  </div>

  <div class="skill-section">
    <h3><i class="fas fa-file-alt"></i> Basic Use of Office Suites</h3>
    <div class="skills-flex">
      <div class="skill" ><i class="fas fa-file-word"></i> MS Word</div>
      <div class="skill"><i class="fas fa-file-powerpoint"></i> PowerPoint</div>
      <div class="skill"><i class="fas fa-file-excel"></i> Excel</div>
    </div>
  </div>

  <div class="skill-section">
    <h3><i class="fas fa-pencil-ruler"></i> Graphic Design and Layout</h3>
    <div class="skills-flex">
      <div class="skill"><i class="fas fa-paint-brush"></i> Canva</div>
      <div class="skill"><i class="fas fa-columns"></i> Wix</div>
      <div class="skill"><i class="fab fa-figma"></i> Figma</div>
      <div class="skill"><i class="fas fa-layer-group"></i> Padlet</div>
    </div>
  </div>

  <div class="skill-section">
    <h3><i class="fas fa-server"></i> Virtualization Technologies</h3>
    <div class="skills-flex">
      <div class="skill"><i class="fas fa-network-wired"></i> VMware</div>
      <div class="skill"><i class="fas fa-box"></i> VirtualBox</div>
    </div>
  </div>

  <div class="skill-section">
    <h3><i class="fas fa-bullhorn"></i> Ad Building Platforms</h3>
    <div class="skills-flex">
      <div class="skill"><i class="fas fa-bullseye"></i> Lead Manager</div>
      <div class="skill"><i class="fas fa-chart-line"></i> Minionplatform</div>
      <div class="skill"><i class="fas fa-ad"></i> Tune</div>
      <div class="skill"><i class="fas fa-bolt"></i> Okata</div>
    </div>
  </div>

  <div class="skill-section">
    <h3><i class="fas fa-search"></i> Communication & SEO Tools</h3>
    <div class="skills-flex">
      <div class="skill"><i class="fas fa-envelope"></i> Gmail</div>
      <div class="skill"><i class="fas fa-envelope-open-text"></i> Outlook</div>
      <div class="skill"><i class="fab fa-slack"></i> Slack</div>
      <div class="skill"><i class="fas fa-tasks"></i> Asana</div>
      <div class="skill"><i class="fas fa-users-cog"></i> MS Teams</div>
    </div>
  </div>

  <div class="skill-section">
    <h3><i class="fas fa-database"></i> SQL & Database Management</h3>
    <div class="skills-flex">
      <div class="skill"><i class="fas fa-code"></i> SQL Queries</div>
      <div class="skill"><i class="fas fa-database"></i> QA Data Validation</div>
    </div>
  </div>
</div>


<div id="communication" class="tab-content">
        <h2>Communication Skills</h2>
        <div class="skills-flex">
          <div class="skill" ><i class="fas fa-language"></i> Filipino</div>
          <div class="skill" ><i class="fas fa-language"></i> English</div>
          <div class="skill" ><i class="fas fa-language"></i> Chavacano</div>
          <div class="skill" ><i class="fas fa-language"></i> Bisaya</div>
        </div>
      </div>


      <div id="certifications" class="tab-content">
        <h2>Certifications</h2>
        
        <ul>
          <li>DICT Webinar: Intro to UI/UX Design <br><span>June 9, 2022</span></li>
          <li>DICT Region 9: Personal & Career Development <br><span>Talon Talon, km7, Zamboanga City, Philippines 7000 <br>Aug 3, 2022</span></li>
          <li>GDG Zamboanga: Devfest ZamPen 2022<br><span>Normal Road, Baliwasan, Zamboanga City, Philippines 7000 <br> Nov 26, 2022</span></li>
          <li>Bisaya Freelancers: YouTube, Facebook, TikTok Ads <br><span> Nov 2, 2024</span></li>
        </ul>
        <p>
          <i  id="cons" class="fas fa-folder-open"></i>
          <a href="https://drive.google.com/drive/folders/1KDniXQHytLEv4xbI3xJTa-h53UY-D7Tp?usp=sharing" target="_blank">
            View All Certificates
          </a>
        </p>
      </div>
    </div>
  </div>



<?php Include ('header/footer.php')  ?>
<script src="../java/skills.js"></script>
</body>
</html>

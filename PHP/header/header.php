<?php require_once 'functions.php'; ?>

<?php $currentPage = basename($_SERVER['PHP_SELF']); ?>

<link rel="stylesheet" href="../../CSS/header.css">

<header>
    <div class="container">
        <h1>Ralph Allen E. Clemente</h1>
        <p>Front-End Developer || Ads Specialist </p>
        
        <nav>
            <ul>
                <li><a class="<?= $currentPage === 'index.php' ? 'active' : '' ?>" href="index.php">Home</a></li>
                <li><a class="<?= $currentPage === 'about.php' ? 'active' : '' ?>" href="about.php">About</a></li>
                <li><a class="<?= $currentPage === 'skills.php' ? 'active' : '' ?>" href="skills.php">Skills</a></li>
                <li><a class="<?= $currentPage === 'projects.php' ? 'active' : '' ?>" href="projects.php">Projects</a></li>
                <li><a class="<?= $currentPage === 'contact.php' ? 'active' : '' ?>" href="contact.php">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>
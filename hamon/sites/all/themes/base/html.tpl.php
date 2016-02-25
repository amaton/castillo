<!DOCTYPE html>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir;?>">
<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
    <?php print $scripts; ?>
  <?php print $styles; ?>

  <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,700italic,400italic,300italic,600,600italic,300&subset=cyrillic-ext,latin-ext' rel='stylesheet' type='text/css'>
	<!--[if lt IE 9]>
		<script async src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>

	<![endif]-->
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
  <div id=skip-link>
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>

</body>
</html>

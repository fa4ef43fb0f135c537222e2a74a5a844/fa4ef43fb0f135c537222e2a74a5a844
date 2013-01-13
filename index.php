<?php
	$dir = dirname(__FILE__);
	// find images
	$imageArr = glob($dir.DIRECTORY_SEPARATOR.'images'.DIRECTORY_SEPARATOR.'*.*');
	// relative paths
	foreach($imageArr as $key => $src) $imageArr[$key] = str_replace($dir, '', $src);
	sort($imageArr);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="nl" lang="nl">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="imagetoolbar" content="no" />
		<meta name="creator" content="nivonova" />
		<meta name="keywords" content="Hedwig Hulshof, Art Gallery" />
		<meta name="description" content="Hedwig Hulshof - Art Gallery" />
		<title>Hedwig Hulshof - Art Gallery</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
        <script type="text/javascript" src="gallery.js"></script>
	</head>
	<body>
		<script type="text/javascript">$(document.body).fadeOut(0);</script>
		<div id="slideshow">
			<ul class="slides">
				<?php foreach($imageArr as $src) {
					$name = $src;
					echo "<li><img src='{$src}' title='{$name}' alt='{$name}'/></li>";
				}?>
			</ul>
		</div>

        <span class="arrow previous"></span>
        <span class="arrow next"></span>
	</body>
</html>
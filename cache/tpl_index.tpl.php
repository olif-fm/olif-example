<!DOCTYPE html>
<html lang="en">
<head>
<title><?php echo (isset($this->_rootref['meta_title'])) ? $this->_rootref['meta_title'] : ''; ?></title>
<!-- META -->
<meta http-equiv="X-UA-Compatible" content="IE=8"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="<?php echo (isset($this->_rootref['meta_desc'])) ? $this->_rootref['meta_desc'] : ''; ?>" />
<meta name="keywords" content="<?php echo (isset($this->_rootref['meta_keywords'])) ? $this->_rootref['meta_keywords'] : ''; ?>" />
<link rel="Shortcut Icon" href="<?php echo (isset($this->_rootref['base_url'])) ? $this->_rootref['base_url'] : ''; ?>img/favicon.ico" />

<!-- CSS -->
<link rel="stylesheet" href="<?php echo (isset($this->_rootref['base_url'])) ? $this->_rootref['base_url'] : ''; ?>css/style.css" type="text/css" media="screen" />
<!-- JS -->
<script type="text/javascript" src="<?php echo (isset($this->_rootref['base_url'])) ? $this->_rootref['base_url'] : ''; ?>js/jquery-2.0.3.min.js"></script>
<script type="text/javascript" src="<?php echo (isset($this->_rootref['base_url'])) ? $this->_rootref['base_url'] : ''; ?>js/easyAjax.js"></script>
<script type="text/javascript" src="<?php echo (isset($this->_rootref['base_url'])) ? $this->_rootref['base_url'] : ''; ?>js/functions.js"></script>
<script>
var ria_url="<?php echo (isset($this->_rootref['ria_url'])) ? $this->_rootref['ria_url'] : ''; ?>";
var base_url="<?php echo (isset($this->_rootref['base_url'])) ? $this->_rootref['base_url'] : ''; ?>";
</script>

</head>
<body>
	<?php echo (isset($this->_rootref['contenido'])) ? $this->_rootref['contenido'] : ''; ?>
</body>
</html>
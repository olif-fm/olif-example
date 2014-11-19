<?php
$ROOT = $_POST['OLIF_ROOT'];
$NODE_ROOT = $_POST['NODE_ROOT'];
$DIR_INDEX = $_POST['DIR_INDEX'];
if (! defined('NODE_ROOT'))
    define('NODE_ROOT', $NODE_ROOT);
$TYPE_SCRIPT = 'script';
$exist = false;
$bootstrap = "Bootstrap.php";
$dir = "olif";
$folder = "";
for ($i = 0; $i < 4 && $exist === false; $i ++) {
    if (is_dir($folder . $dir))
        $exist = true;
    else
        $folder .= "../";
}
$bootstrap = $folder . $dir . DIRECTORY_SEPARATOR . $bootstrap;
require_once ($bootstrap);
if ($_SERVER['HTTP_USER_AGENT'] != 'OLIF FM System') {
    $dev->sendError("ERROR User Agent: " . $_SERVER['HTTP_USER_AGENT']);
}

<?php
define('NODE_ROOT', '');
$TYPE_SCRIPT='page';
$exist=false;
$bootstrap = "Bootstrap.php";
$dir = "olif";
$folder = "";
for ($i=0; $i<4 && $exist===false; $i++) {
    if (is_dir($folder.$dir)) $exist=true;
    else $folder.="../";
}
$bootstrap=$folder.$dir.DIRECTORY_SEPARATOR.$bootstrap;
$DIR_INDEX=dirname(__FILE__).DIRECTORY_SEPARATOR;
require_once($bootstrap);

<?php
namespace Olif;

if (! defined('NODE_ROOT'))
    define('NODE_ROOT', '');
$TYPE_SCRIPT = 'TEST';
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
$DIR_INDEX = str_replace("tests/", "", dirname(__FILE__) . DIRECTORY_SEPARATOR);
require_once ($bootstrap);

class projectTest extends \PHPUnit_Framework_TestCase
{

    public $test;

    public function setUp()
    {
        $devm = new ModelDeveloper();
        $devm->getModelDB();

        $this->test = new ControllerDeveloper();
        $this->test->init();
        $this->assertTrue(is_object($this->test) === true);

        $this->assertTrue(get_class($this->test) === "Olif\ControllerDeveloper");

        $result = $this->test->db->connect(DBHOST, DBUSER, DBPASS, DBNAME, DBPORT, DBSOCKET);
        $this->assertTrue($result === true);
    }

    public function tearDown()
    {}

    public function testControllerPageExist()
    {
        /**
         * Checkear las páginas
         */
        $this->test->page->assignPage("", "");
        $this->test->page->assignPage("", "noIL");
    }
    /*
    public function testControllerPageExistAdmin()
    {
        $this->test->page->assignPage("admin/login", "");
        $this->test->page->assignPage("admin/inicio", "");
    }
    */
}

<?php
$dev->page->assignVar("base_url", WEB_URL . NODE_ROOT);
$dev->page->assignVar("base_url_lang", WEB_URL . NODE_ROOT . strtolower(LANG_SELECTED) . "/");
$dev->page->assignVar("ACTUAL_LANG", strtolower(LANG_SELECTED));
$dev->page->assignVar("ria_url", WEB_URL . NODE_ROOT . AJAX_URL);
$dev->page->assignVar("front_url", WEB_URL);
$dev->page->assignVar("proyect_name", PROJECT_NAME);
$dev->page->assignVar("ACTUAL_LOC", $dev->page->getPageURI());
$dev->page->assignVar("RESULT_OP", false);
$dev->page->assignVar("CMS_LOGO", false);
$dev->page->assignVar("OPEN_WINDOW", '');
$dev->page->assignVar("RAND", rand(10000, 99999));
$dev->page->assignVar("OAUTH_METHOD", $dev->session->get('SESSION_OAUTH_APP'));


$menu = $dev->page->getMenu();

$dev->page->assignMenu();

$dev->page->setBreadCrumbs();


<?php
/*** PARTICULAR DE CADA PROYECTO ***/
define("PROJECT_NAME", "OLIF V.3.0-beta Example Project");
define("TABLE_CLIENTS", "");
define("TABLE_CLIENTS_FIELDS_LONG", "");

define("TABLE_MENU", "olif_menu");
define("TABLE_MENU_FIELDS", "ID, CREATED, FILE, URL, ACTION, NAME_ES, NAME_EN, NAME_GE, NAME_FR, NAME_CAT, NAME_EUS, USE_NODE_ROOT, TYPE, LVL, SECURITY, TITLE_META_ES, TITLE_META_EN, TITLE_META_GE, TITLE_META_FR, TITLE_META_CAT, TITLE_META_EUS, DESC_META_ES, DESC_META_EN, DESC_META_GE, DESC_META_FR, DESC_META_CAT, DESC_META_EUS, KEYWORDS_META_ES, KEYWORDS_META_EN, KEYWORDS_META_GE, KEYWORDS_META_FR, KEYWORDS_META_CAT, KEYWORDS_META_EUS, CLASS, POSITION, STATUS");

define("URI_PRIVATE_SITE", "admin/");

define("SESSIONIDNAME", "cliendID");


/*
 * SERVER dev
 */
if (DOMAIN == '192.168.1.4' || DOMAIN == '192.168.1.9' || DOMAIN == null || DOMAIN == 'dev.gobalo.es') {
    /* Configuración DEV */
    define("IS_DEV", true);
    define("IS_APPENGINE", false);
    /* Configuración Correo */
    /*
     * @define("MAILER_HOST","smtp.*****.com");
     * @define("MAILER_PORT",25);
     * @define("MAILER_USER","noreply@*****.com");
     * @define("MAILER_USER_EMAIL","noreply@*****.com");
     * @define("MAILER_PASS","*****");
     * @define("MAILER_USE_SLL",false);
     */
    /**
     * OAuth
     */
    /* Email contact config */
    define("MAIL_CONTACT", "a.vara.1986@gmail.com");
    define("MAIL_ALERTS", "a.vara.1986@gmail.com");
    /* FILES */
    define("PATH_FILES", "../files/");
    /* Google APIS config */
    define("GOOGLE_IDCLIENT", "");
    define("GOOGLE_SECRET", "");
    /* Facebook config */
    define("FACEBOOK_IDCLIENT", "");
    define("FACEBOOK_SECRET", "0");
    /* Twitter config */
    define("TWITTER_IDCLIENT", "");
    define("TWITTER_SECRET", "");
    /* GitHub config */
    define("GITHUB_IDCLIENT", "");
    define("GITHUB_SECRET", "");
    /* METODO DE PAYPAL. 0 desarrollo. 1 prod */
    define("PAYPAL_MODE", 0);
    /* CURL SSL config */
    define("CURL_SSLCERT", 0);
    define("CURLOPT_CAINFO_PATH", OLIF_ROOT . ".certs/" . '[YOUR_CERTIFICATE].pem');
    define("CURL_SSLCERT_PATH", OLIF_ROOT . ".certs/" . '[YOUR_CERTIFICATE].pem');
    define("CURL_SSLKEY_PATH", OLIF_ROOT . ".certs/" . '[YOUR_KEY].key');
    define("CURL_SSLCERTPASSWD", "");
    define("NEED_CURL_AUTHORIZATION", 0);
    define("NEED_CURL_AUTHORIZATION_USER", "");
    define("NEED_CURL_AUTHORIZATION_PASS", "");
    /*
     * ****************
     * SQL connection GRANT ALL PRIVILEGES ON olif_example_project.* TO 'olif_user'@'localhost' IDENTIFIED BY 'test1234' WITH GRANT OPTION;
     * ***************
     */
    define("DDBBTYPE", "MYSQL"); // OPTIONS: APPENGINE, MYSQL
    define("DBHOST", "localhost");
    define("DBPORT", null);
    define("DBUSER", "root");
    define("DBPASS", "");
    define("DBNAME", "olif_example");
    define("DBSOCKET", "");
    /**
     * *****************************************************
     * Para testear, comentar esta linea
     * Incluir al principio para que salte al menor fallo
     * ******************************************************
     */
    ini_set("display_errors", 'on');
    define("SHOW_SYSTEM_ERRORS", E_ALL);
    define("SHOW_USER_ERRORS", E_USER_ERROR);
    error_reporting(SHOW_SYSTEM_ERRORS);
    /*
     * SERVER production
     */
} else {
    /* Configuración DEV */
    define("IS_DEV", true);
    define("IS_APPENGINE", false);
    /* Configuración Correo */
    /*
     * @define("MAILER_HOST","smtp.*****.com");
     * @define("MAILER_PORT",25);
     * @define("MAILER_USER","noreply@*****.com");
     * @define("MAILER_USER_EMAIL","noreply@*****.com");
     * @define("MAILER_PASS","*****");
     * @define("MAILER_USE_SLL",false);
     */
    /* Email contact config */
    define("MAIL_CONTACT", "a.vara.1986@gmail.com");
    define("MAIL_ALERTS", "a.vara.1986@gmail.com");
    /* FILES */
    define("PATH_FILES", "../files/");
    /* Google APIS config */
    define("GOOGLE_IDCLIENT", "");
    define("GOOGLE_SECRET", "");
    /* Facebook config */
    define("FACEBOOK_IDCLIENT", "");
    define("FACEBOOK_SECRET", "");
    /* Twitter config */
    define("TWITTER_IDCLIENT", "");
    define("TWITTER_SECRET", "");
    /* GitHub config */
    define("GITHUB_IDCLIENT", "");
    define("GITHUB_SECRET", "");
    /* METODO DE PAYPAL. 0 desarrollo. 1 prod */
    define("PAYPAL_MODE", 0);
    /* CURL SSL config */
    define("CURL_SSLCERT", 0);
    define("CURLOPT_CAINFO_PATH", OLIF_ROOT . ".certs/" . '[YOUR_CERTIFICATE].pem');
    define("CURL_SSLCERT_PATH", OLIF_ROOT . ".certs/" . '[YOUR_CERTIFICATE].pem');
    define("CURL_SSLKEY_PATH", OLIF_ROOT . ".certs/" . '[YOUR_KEY].key');
    define("CURL_SSLCERTPASSWD", "");
    define("NEED_CURL_AUTHORIZATION", 0);
    define("NEED_CURL_AUTHORIZATION_USER", "");
    define("NEED_CURL_AUTHORIZATION_PASS", "");
    /*
     * ****************
     * SQL connection GRANT ALL PRIVILEGES ON *.* TO 'olif_user'@'localhost' IDENTIFIED BY 'test1234' WITH GRANT OPTION;
     * ***************
     */
    define("DDBBTYPE", "MYSQL"); // OPTIONS: APPENGINE, MYSQL
    define("DBHOST", "localhost");
    define("DBPORT", null);
    define("DBUSER", "root");
    define("DBPASS", "");
    define("DBNAME", "olif_example");
    define("DBSOCKET", "");
    /**
     * *****************************************************
     * Para testear, comentar esta linea
     * Incluir al principio para que salte al menor fallo
     * ******************************************************
     */
    ini_set("display_errors", 'on');
    define("SHOW_SYSTEM_ERRORS", E_ALL);
    define("SHOW_USER_ERRORS", E_USER_ERROR);
    error_reporting(SHOW_SYSTEM_ERRORS);
}

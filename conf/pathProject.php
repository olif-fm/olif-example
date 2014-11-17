<?php
/**
 * PATHS
 */
if (DOMAIN=='192.168.1.4' || DOMAIN=='192.168.1.9' || DOMAIN=='localhost') {
    /* LOCAL */
    /**
     * Cuando la web se encuentra dentro de una subcarpeta, hay que indicarle esta ruta
     * @var string
     */
    define("WEB_PATH_RELATIVE", "/OLIF_EXAMPLE_PROJECT/");
    /**
     * URL de la web sin HTTP o HTTPS
     * @var string
     */
    define("WEB_URL_NO_PROTOCOL", DOMAIN.WEB_PATH_RELATIVE);
    /**
     * URL de la web con HTTP o HTTPS.
     * Esta URL suele ser bastante útil para llamar a los ficheros de la web pública dentro del CMS
     * @var string
     */
    define("WEB_URL", PROTOCOL.DOMAIN.WEB_PATH_RELATIVE);
    /**
     * URL del CMS
     * @var string
     */
    define("ADMIN_URL", PROTOCOL.DOMAIN.WEB_PATH_RELATIVE."admin/");
    define("ADMIN_ROOT", WEBSITE_ROOT."admin/");
} elseif (DOMAIN=='192.168.1.2') {
    //echo DOMAIN;
    define("WEB_PATH_RELATIVE", "/");
    define("WEB_URL_NO_PROTOCOL", DOMAIN.WEB_PATH_RELATIVE);
    define("WEB_URL", PROTOCOL.DOMAIN.WEB_PATH_RELATIVE);
    define("ADMIN_URL", PROTOCOL.DOMAIN.WEB_PATH_RELATIVE."admin/");
    define("ADMIN_ROOT", WEBSITE_ROOT."admin/");
} else {
    define("WEB_PATH_RELATIVE", "/");
    define("WEB_URL_NO_PROTOCOL", DOMAIN.WEB_PATH_RELATIVE);
    define("WEB_URL", PROTOCOL.DOMAIN.WEB_PATH_RELATIVE);
    define("ADMIN_URL", PROTOCOL.DOMAIN.WEB_PATH_RELATIVE."admin/");
    define("ADMIN_ROOT", WEBSITE_ROOT."admin/");
}

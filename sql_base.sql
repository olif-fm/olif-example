--
-- Estructura de tabla para la tabla `ceo_files`
--

DROP TABLE IF EXISTS `ceo_files`;
CREATE TABLE IF NOT EXISTS `ceo_files` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CREATED` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `FK_USER` varchar(40) COLLATE utf8_bin DEFAULT NULL,
  `IP` varchar(100) COLLATE utf8_bin NULL,
  `PATH` varchar(250) COLLATE utf8_bin NOT NULL,
  `FILENAME` varchar(250) COLLATE utf8_bin NOT NULL,
  `MIME_TYPE` varchar(250) COLLATE utf8_bin NOT NULL,
  `NODE_ROOT` varchar(250) COLLATE utf8_bin NOT NULL,
  `FK_GOOGLE_DRIVE` varchar(250) COLLATE utf8_bin NOT NULL,
  `GOOGLE_DRIVE_URL` text COLLATE utf8_bin NOT NULL,
  `LAST_UPDATE` datetime NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=40 ;

--
-- Volcado de datos para la tabla `ceo_files`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ceo_log`
--

DROP TABLE IF EXISTS `ceo_log`;
CREATE TABLE IF NOT EXISTS `ceo_log` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CREATED` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `FK_USER` varchar(40) COLLATE utf8_bin NOT NULL,
  `IP` varchar(100) COLLATE utf8_bin NULL,
  `ACTION` longtext COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `ceo_rols`
--

DROP TABLE IF EXISTS `ceo_rols`;
CREATE TABLE IF NOT EXISTS `ceo_rols` (
  `ID` varchar(40) COLLATE utf8_bin NOT NULL,
  `NAME_ES` text COLLATE utf8_bin NOT NULL,
  `NAME_EN` text COLLATE utf8_bin NOT NULL,
  `DESCRIPTION` text COLLATE utf8_bin NOT NULL,
  `STATUS` varchar(1) COLLATE utf8_bin NOT NULL DEFAULT '1',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `ceo_rols`
--

INSERT INTO `ceo_rols` (`ID`, `NAME_ES`, `NAME_EN`, `DESCRIPTION`, `STATUS`) VALUES
('0', 'Ninguno (Sin acceso/público)', 'None (No access/public)', 'Sin permisos para acceder al sistema', '1'),
('11', 'Rol 4', 'Rol 4', '', '1'),
('13', 'Rol 5', 'Rol 5', '', '1'),
('17', 'Rol 6', 'Rol 6', '', '1'),
('19', 'Rol 7', 'Rol 7', '', '1'),
('2', 'Usuario', 'User', 'Usuarios con permisos estandar registrados en el sistema', '1'),
('3', 'Rol 1', 'Rol 1', 'Nivel de usuario "Rol1"', '1'),
('5', 'Rol 2', 'Rol 2', '', '1'),
('67', 'Administrador', 'Admin', 'Usuario con permisos globales. SÓLO para personal de GÓBALO', '1'),
('7', 'Rol 3', 'Rol 3', '', '1');



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `olif_menu`
--

CREATE TABLE IF NOT EXISTS `olif_menu` (
  `ID` varchar(250) COLLATE utf8_bin NOT NULL,
  `CREATED` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `FILE` varchar(250) COLLATE utf8_bin NOT NULL,
  `URL` varchar(250) COLLATE utf8_bin NOT NULL,
  `ACTION` varchar(250) COLLATE utf8_bin NOT NULL,
  `TYPE` varchar(250) COLLATE utf8_bin NOT NULL COMMENT 'Se usa para conocer si es un elemento del menú o está oculto',
  `LVL` varchar(10) COLLATE utf8_bin NOT NULL,
  `SECURITY` varchar(255) COLLATE utf8_bin NOT NULL COMMENT 'Valor numérico del cálculo que se realiza en ceo_rols',
  `USE_NODE_ROOT` varchar(1) COLLATE utf8_bin NOT NULL DEFAULT '0' COMMENT 'Se usa para generar el fichero en la carpeta correspondiente al guardar menú',
  `SECTION` enum('index','admin') COLLATE utf8_bin NOT NULL DEFAULT 'index' COMMENT 'Añadir en este campos los diferentes NODE_ROOT que se van a usar',
  `POSITION` int(4) NOT NULL,
  `NAME_ES` varchar(250) COLLATE utf8_bin NOT NULL,
  `NAME_EN` varchar(250) COLLATE utf8_bin NOT NULL,
  `NAME_GE` varchar(250) COLLATE utf8_bin NOT NULL,
  `NAME_FR` varchar(250) COLLATE utf8_bin NOT NULL,
  `NAME_CAT` varchar(250) COLLATE utf8_bin NOT NULL,
  `NAME_EUS` varchar(250) COLLATE utf8_bin NOT NULL,
  `TITLE_META_ES` varchar(250) COLLATE utf8_bin NOT NULL,
  `TITLE_META_EN` varchar(250) COLLATE utf8_bin NOT NULL,
  `TITLE_META_GE` varchar(250) COLLATE utf8_bin NOT NULL,
  `TITLE_META_FR` varchar(250) COLLATE utf8_bin NOT NULL,
  `TITLE_META_CAT` varchar(250) COLLATE utf8_bin NOT NULL,
  `TITLE_META_EUS` varchar(250) COLLATE utf8_bin NOT NULL,
  `DESC_META_ES` varchar(250) COLLATE utf8_bin NOT NULL,
  `DESC_META_EN` varchar(250) COLLATE utf8_bin NOT NULL,
  `DESC_META_GE` varchar(250) COLLATE utf8_bin NOT NULL,
  `DESC_META_FR` varchar(250) COLLATE utf8_bin NOT NULL,
  `DESC_META_CAT` varchar(250) COLLATE utf8_bin NOT NULL,
  `DESC_META_EUS` varchar(250) COLLATE utf8_bin NOT NULL,
  `KEYWORDS_META_ES` varchar(250) COLLATE utf8_bin NOT NULL,
  `KEYWORDS_META_EN` varchar(250) COLLATE utf8_bin NOT NULL,
  `KEYWORDS_META_GE` varchar(250) COLLATE utf8_bin NOT NULL,
  `KEYWORDS_META_FR` varchar(250) COLLATE utf8_bin NOT NULL,
  `KEYWORDS_META_CAT` varchar(250) COLLATE utf8_bin NOT NULL,
  `KEYWORDS_META_EUS` varchar(250) COLLATE utf8_bin NOT NULL,
  `CLASS` varchar(250) COLLATE utf8_bin NOT NULL,
  `STATUS` char(1) COLLATE utf8_bin NOT NULL DEFAULT '1',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `olif_menu`
--

INSERT INTO `olif_menu` (`ID`, `CREATED`, `FILE`, `URL`, `ACTION`, `TYPE`, `LVL`, `SECURITY`, `USE_NODE_ROOT`, `SECTION`, `NAME_ES`, `NAME_EN`, `NAME_GE`, `NAME_FR`, `NAME_CAT`, `NAME_EUS`, `TITLE_META_ES`, `TITLE_META_EN`, `TITLE_META_GE`, `TITLE_META_FR`, `TITLE_META_CAT`, `TITLE_META_EUS`, `DESC_META_ES`, `DESC_META_EN`, `DESC_META_GE`, `DESC_META_FR`, `DESC_META_CAT`, `DESC_META_EUS`, `KEYWORDS_META_ES`, `KEYWORDS_META_EN`, `KEYWORDS_META_GE`, `KEYWORDS_META_FR`, `KEYWORDS_META_CAT`, `KEYWORDS_META_EUS`, `CLASS`, `POSITION`, `STATUS`) VALUES
('inicio', '2013-06-18 01:33:19', 'inicio', 'inicio', '', 'menu', '1', '0', '0', 'index', 'OLIF System', 'OLIF System', 'OLIF System', '', '', '', 'OLIF System', 'OLIF System', 'OLIF System', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 5, '1');


--
-- Estructura de tabla para la tabla `login`
--


CREATE TABLE `login` (
  `id_user` int(11) NOT NULL,
  `user` varchar(100) NOT NULL,
  `pass` int(11) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `login`
--

INSERT INTO `login` (`id_user`, `user`, `pass`) VALUES
(1, 'johnny', 888);

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `edad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `nombre`, `apellido`, `edad`) VALUES
(1, 'Johnny', 'Benitez', 36);
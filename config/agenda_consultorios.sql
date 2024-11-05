-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-11-2024 a las 06:31:48
-- Versión del servidor: 8.0.34
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `agenda_consultorios`
--
CREATE DATABASE IF NOT EXISTS `agenda_consultorios` DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci;
USE `agenda_consultorios`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agendas`
--

DROP TABLE IF EXISTS `agendas`;
CREATE TABLE `agendas` (
  `id_agenda` int NOT NULL,
  `id_medico_especialidad` int NOT NULL,
  `id_clasificacion` int NOT NULL,
  `dias` set('Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo') CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_fin` time NOT NULL,
  `duracion_turno` int NOT NULL,
  `nombre_sucursal` varchar(50) COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clasificaciones`
--

DROP TABLE IF EXISTS `clasificaciones`;
CREATE TABLE `clasificaciones` (
  `id_clasificacion` int NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `clasificaciones`
--

INSERT INTO `clasificaciones` (`id_clasificacion`, `nombre`) VALUES
(1, 'Normal'),
(2, 'Especial'),
(3, 'VIP');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dias`
--

DROP TABLE IF EXISTS `dias`;
CREATE TABLE `dias` (
  `id_agenda` int NOT NULL,
  `dia` enum('Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo') CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dias_no_laborables`
--

DROP TABLE IF EXISTS `dias_no_laborables`;
CREATE TABLE `dias_no_laborables` (
  `id_dia_no_laborable` int NOT NULL,
  `fecha` date NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidades`
--

DROP TABLE IF EXISTS `especialidades`;
CREATE TABLE `especialidades` (
  `id_especialidad` int NOT NULL,
  `descripcion` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `especialidades`
--

INSERT INTO `especialidades` (`id_especialidad`, `descripcion`) VALUES
(1, 'Cardiología'),
(2, 'Dermatología'),
(3, 'Gastroenterología'),
(4, 'Neurología'),
(5, 'Pediatría'),
(6, 'Oftalmología'),
(7, 'Oncología'),
(8, 'Psiquiatría'),
(9, 'Traumatología'),
(10, 'Medicina Interna'),
(11, 'Neumología');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_turnos`
--

DROP TABLE IF EXISTS `estado_turnos`;
CREATE TABLE `estado_turnos` (
  `id_estado_turno` int NOT NULL,
  `estado` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `estado_turnos`
--

INSERT INTO `estado_turnos` (`id_estado_turno`, `estado`) VALUES
(1, 'No disponible'),
(2, 'Libre'),
(3, 'Reservada'),
(4, 'Confirmado'),
(5, 'Cancelado'),
(6, 'Ausente'),
(7, 'Presente'),
(8, 'En consulta'),
(9, 'Atendido'),
(10, 'Sobreturno');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicos`
--

DROP TABLE IF EXISTS `medicos`;
CREATE TABLE `medicos` (
  `id_medico` int NOT NULL,
  `apellido` varchar(100) COLLATE utf8mb3_spanish_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb3_spanish_ci NOT NULL,
  `dni` int NOT NULL,
  `activo` tinyint NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `medicos`
--

INSERT INTO `medicos` (`id_medico`, `apellido`, `nombre`, `dni`, `activo`, `email`) VALUES
(1, 'Pérez', 'Carlos', 12345678, 1, 'carlos.perez@norte.com'),
(2, 'González', 'María', 87654321, 1, 'maria.gonzalez@centro.com'),
(3, 'Rodríguez', 'Lucía', 23456789, 0, 'lucia.rodriguez@sur.com'),
(4, 'López', 'Federico', 34567890, 1, 'federico.lopez@este.com'),
(5, 'Fernández', 'Ana', 45678901, 1, 'ana.fernandez@oeste.com'),
(6, 'Martínez', 'Julio', 56789012, 1, 'julio.martinez@norte.com'),
(7, 'Sánchez', 'Paula', 67890123, 0, 'paula.sanchez@centro.com'),
(8, 'Gómez', 'Luis', 78901234, 1, 'luis.gomez@sur.com'),
(9, 'Romero', 'Sofía', 89012345, 1, 'sofia.romero@este.com'),
(10, 'Vargas', 'Javier', 90123456, 1, 'javier.vargas@oeste.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicos_especialidades`
--

DROP TABLE IF EXISTS `medicos_especialidades`;
CREATE TABLE `medicos_especialidades` (
  `id_medico_especialidad` int NOT NULL,
  `id_medico` int NOT NULL,
  `id_especialidad` int NOT NULL,
  `matricula` varchar(50) COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `medicos_especialidades`
--

INSERT INTO `medicos_especialidades` (`id_medico_especialidad`, `id_medico`, `id_especialidad`, `matricula`) VALUES
(1, 6, 8, 'M777'),
(2, 8, 1, 'T456'),
(3, 10, 3, 'M123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `obra_social`
--

DROP TABLE IF EXISTS `obra_social`;
CREATE TABLE `obra_social` (
  `id_obra_social` int NOT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `obra_social`
--

INSERT INTO `obra_social` (`id_obra_social`, `nombre`) VALUES
(1, 'OSDE'),
(2, 'Swiss Medical'),
(3, 'Galeno'),
(4, 'Medicus'),
(5, 'Federada Salud'),
(6, 'IAPOS'),
(7, 'PAMI'),
(8, 'OSECAC'),
(9, 'OSPLAD'),
(10, 'Sancor Salud'),
(11, 'OSDEPYM'),
(12, 'Medifé'),
(13, 'OSUNLa'),
(14, 'OSPOCE'),
(15, 'Union Personal'),
(16, 'OSDE Binario'),
(17, 'OMINT'),
(18, 'OSPACA'),
(19, 'OSBA'),
(20, 'OSMATA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

DROP TABLE IF EXISTS `pacientes`;
CREATE TABLE `pacientes` (
  `id_paciente` int NOT NULL,
  `nombre_completo` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `dni` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `domicilio` varchar(100) COLLATE utf8mb3_spanish_ci NOT NULL,
  `sexo` char(1) COLLATE utf8mb3_spanish_ci NOT NULL,
  `telefono` varchar(100) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `id_obra_social` int NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`id_paciente`, `nombre_completo`, `dni`, `fecha_nacimiento`, `domicilio`, `sexo`, `telefono`, `email`, `id_obra_social`, `activo`) VALUES
(1, 'Johnny Benitez', '32543123', '1988-09-23', 'Av. Siempre Viva 123', 'M', '3415123456', 'jonbenitez@gmail.com', 3, 1),
(2, 'Ana Laura Miranda', '40123456', '1992-07-15', 'Calle Falsa 456', 'F', '3416234567', 'miranda@hotmail.com', 5, 1),
(3, 'Roberto Sánchez', '37894567', '1985-11-12', 'San Martín 987', 'M', '3417345678', 'roberto.sanchez@yahoo.com', 8, 0),
(4, 'Luisa Fernández', '29983456', '1979-04-23', 'Rivadavia 456', 'F', '3418456789', 'luisa.fernandez@gmail.com', 1, 1),
(5, 'María Teresa López', '34562123', '1995-05-30', 'Av. Belgrano 234', 'F', '3419567890', 'maria.lopez@hotmail.com', 10, 0),
(6, 'Carlos Ramírez', '30875467', '1991-01-17', 'Calle 9 de Julio 789', 'M', '3416678901', 'carlos.ramirez@yahoo.com', 12, 1),
(7, 'Paula Juárez', '42123457', '1997-03-28', 'Mitre 432', 'F', '3417789012', 'paula.juarez@gmail.com', 15, 1),
(8, 'Fernando Ruiz', '33674567', '1983-12-11', 'Corrientes 123', 'M', '3418890123', 'fernando.ruiz@gmail.com', 6, 1),
(9, 'Gabriela Castro', '38901234', '1990-06-22', 'Belgrano 567', 'F', '3419901234', 'gabriela.castro@hotmail.com', 14, 1),
(10, 'Martín Gómez', '30567891', '1984-10-05', 'Alsina 234', 'M', '3411012345', 'martin.gomez@gmail.com', 18, 0),
(11, 'Rosa Vidal', '32456789', '1996-02-20', 'Sarmiento 890', 'F', '3412123456', 'rosa.vidal@gmail.com', 4, 1),
(12, 'Andrés Moreno', '31567891', '1987-08-15', 'Av. Pueyrredón 123', 'M', '3413234567', 'andres.moreno@gmail.com', 19, 0),
(13, 'Camila Reyes', '42345678', '1999-12-09', 'Saavedra 567', 'F', '3414345678', 'camila.reyes@yahoo.com', 13, 1),
(14, 'Esteban Benítez', '39871234', '1993-09-13', 'San Lorenzo 890', 'M', '3415456789', 'esteban.benitez@hotmail.com', 9, 1),
(15, 'Natalia Álvarez', '35678901', '1986-07-27', 'Av. Colon 234', 'F', '3416567890', 'natalia.alvarez@gmail.com', 7, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id_rol` int NOT NULL,
  `nombre` varchar(60) COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id_rol`, `nombre`) VALUES
(1, 'Admin'),
(2, 'Secretaria'),
(3, 'Usuario'),
(4, 'Medico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursales`
--

DROP TABLE IF EXISTS `sucursales`;
CREATE TABLE `sucursales` (
  `nombre_sucursal` varchar(50) COLLATE utf8mb3_spanish_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8mb3_spanish_ci NOT NULL,
  `telefono` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `ciudad` varchar(100) COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `sucursales`
--

INSERT INTO `sucursales` (`nombre_sucursal`, `direccion`, `telefono`, `ciudad`) VALUES
('Sucursal Este', 'Avenida Este 789', '1122334455', 'Ciudad Este'),
('Sucursal Norte', 'Calle Norte 123', '1234567890', 'Ciudad Norte'),
('Sucursal Oeste', 'Boulevard Oeste 321', '5566778899', 'Ciudad Oeste'),
('Sucursal Sur', 'Calle Sur 456', '0987654321', 'Ciudad Sur');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

DROP TABLE IF EXISTS `turnos`;
CREATE TABLE `turnos` (
  `id_turno` int NOT NULL,
  `id_paciente` int DEFAULT NULL,
  `id_estado_turno` int NOT NULL,
  `id_agenda` int NOT NULL,
  `fecha` date DEFAULT NULL,
  `horario_inicio` time NOT NULL,
  `horario_final` time NOT NULL,
  `orden` int DEFAULT NULL,
  `motivo` varchar(50) COLLATE utf8mb3_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb3_spanish_ci NOT NULL,
  `id_rol` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `email`, `password`, `id_rol`) VALUES
(1, 'admin@mail.com', 'admin123', 1),
(2, 'secre@mail.com', 'secre123', 2),
(3, 'user@mail.com', 'user123', 3),
(4, 'medico@mail.com', 'medi123', 4);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agendas`
--
ALTER TABLE `agendas`
  ADD PRIMARY KEY (`id_agenda`),
  ADD KEY `id_medico_especialidad` (`id_medico_especialidad`),
  ADD KEY `id_clasificacion` (`id_clasificacion`),
  ADD KEY `nombre_sucursal` (`nombre_sucursal`);

--
-- Indices de la tabla `clasificaciones`
--
ALTER TABLE `clasificaciones`
  ADD PRIMARY KEY (`id_clasificacion`);

--
-- Indices de la tabla `dias`
--
ALTER TABLE `dias`
  ADD KEY `id_agenda` (`id_agenda`);

--
-- Indices de la tabla `dias_no_laborables`
--
ALTER TABLE `dias_no_laborables`
  ADD PRIMARY KEY (`id_dia_no_laborable`);

--
-- Indices de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  ADD PRIMARY KEY (`id_especialidad`);

--
-- Indices de la tabla `estado_turnos`
--
ALTER TABLE `estado_turnos`
  ADD PRIMARY KEY (`id_estado_turno`);

--
-- Indices de la tabla `medicos`
--
ALTER TABLE `medicos`
  ADD PRIMARY KEY (`id_medico`);

--
-- Indices de la tabla `medicos_especialidades`
--
ALTER TABLE `medicos_especialidades`
  ADD PRIMARY KEY (`id_medico_especialidad`),
  ADD KEY `id_medico` (`id_medico`),
  ADD KEY `id_especialidad` (`id_especialidad`);

--
-- Indices de la tabla `obra_social`
--
ALTER TABLE `obra_social`
  ADD PRIMARY KEY (`id_obra_social`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id_paciente`),
  ADD KEY `id_obra_social` (`id_obra_social`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  ADD PRIMARY KEY (`nombre_sucursal`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`id_turno`),
  ADD KEY `id_paciente` (`id_paciente`),
  ADD KEY `id_agenda` (`id_agenda`),
  ADD KEY `id_estado_turno` (`id_estado_turno`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agendas`
--
ALTER TABLE `agendas`
  MODIFY `id_agenda` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clasificaciones`
--
ALTER TABLE `clasificaciones`
  MODIFY `id_clasificacion` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `dias_no_laborables`
--
ALTER TABLE `dias_no_laborables`
  MODIFY `id_dia_no_laborable` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  MODIFY `id_especialidad` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `estado_turnos`
--
ALTER TABLE `estado_turnos`
  MODIFY `id_estado_turno` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `medicos`
--
ALTER TABLE `medicos`
  MODIFY `id_medico` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `medicos_especialidades`
--
ALTER TABLE `medicos_especialidades`
  MODIFY `id_medico_especialidad` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `obra_social`
--
ALTER TABLE `obra_social`
  MODIFY `id_obra_social` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id_paciente` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id_rol` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `turnos`
--
ALTER TABLE `turnos`
  MODIFY `id_turno` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `agendas`
--
ALTER TABLE `agendas`
  ADD CONSTRAINT `agendas_ibfk_2` FOREIGN KEY (`id_medico_especialidad`) REFERENCES `medicos_especialidades` (`id_medico_especialidad`),
  ADD CONSTRAINT `agendas_ibfk_3` FOREIGN KEY (`id_clasificacion`) REFERENCES `clasificaciones` (`id_clasificacion`),
  ADD CONSTRAINT `agendas_ibfk_5` FOREIGN KEY (`nombre_sucursal`) REFERENCES `sucursales` (`nombre_sucursal`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `medicos_especialidades`
--
ALTER TABLE `medicos_especialidades`
  ADD CONSTRAINT `medicos_especialidades_ibfk_1` FOREIGN KEY (`id_medico`) REFERENCES `medicos` (`id_medico`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `medicos_especialidades_ibfk_2` FOREIGN KEY (`id_especialidad`) REFERENCES `especialidades` (`id_especialidad`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD CONSTRAINT `pacientes_ibfk_1` FOREIGN KEY (`id_obra_social`) REFERENCES `obra_social` (`id_obra_social`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD CONSTRAINT `turnos_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes` (`id_paciente`),
  ADD CONSTRAINT `turnos_ibfk_4` FOREIGN KEY (`id_agenda`) REFERENCES `agendas` (`id_agenda`),
  ADD CONSTRAINT `turnos_ibfk_5` FOREIGN KEY (`id_estado_turno`) REFERENCES `estado_turnos` (`id_estado_turno`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

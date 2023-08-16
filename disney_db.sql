-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Aug 16, 2023 at 09:37 PM
-- Server version: 5.7.43
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `disney_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `Genero`
--

CREATE TABLE `Genero` (
  `GeneroID` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Imagen` varchar(255) DEFAULT NULL,
  `PeliculaSerieID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Genero`
--

INSERT INTO `Genero` (`GeneroID`, `Nombre`, `Imagen`, `PeliculaSerieID`) VALUES
(1, 'Apto para todo público', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/GCAM_G.png/62px-GCAM_G.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `PeliculaSerie`
--

CREATE TABLE `PeliculaSerie` (
  `PeliculaSerieID` int(11) NOT NULL,
  `Imagen` varchar(255) DEFAULT NULL,
  `Titulo` varchar(100) NOT NULL,
  `FechaCreacion` int(11) DEFAULT NULL,
  `Calificacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `PeliculaSerie`
--

INSERT INTO `PeliculaSerie` (`PeliculaSerieID`, `Imagen`, `Titulo`, `FechaCreacion`, `Calificacion`) VALUES
(1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Toy_Story.svg/520px-Toy_Story.svg.png', 'ToyStory', 1995, 5),
(2, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Moana.svg/220px-Moana.svg.png', 'Mohana', 2016, 4),
(3, 'https://acortar.link/9nGVJR', 'Cars', 2006, 3);

-- --------------------------------------------------------

--
-- Table structure for table `PersonajePorPelicula`
--

CREATE TABLE `PersonajePorPelicula` (
  `PersonajePorPeliculaID` int(11) NOT NULL,
  `PersonajesId` int(11) DEFAULT NULL,
  `PeliculaSerieId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `PersonajePorPelicula`
--

INSERT INTO `PersonajePorPelicula` (`PersonajePorPeliculaID`, `PersonajesId`, `PeliculaSerieId`) VALUES
(1, 1, 2),
(2, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Personajes`
--

CREATE TABLE `Personajes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `peso` float DEFAULT NULL,
  `historia` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Personajes`
--

INSERT INTO `Personajes` (`id`, `nombre`, `imagen`, `edad`, `peso`, `historia`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Mohana2', 'https://acortar.link/4YRniy', 18, 53, 'Moana es una tierna adolescente oriunda de Polinesia que se preocupa en rescatar las tradiciones de su antiguo pueblo.', '2023-08-16 04:30:36', '2023-08-16 04:30:36', NULL),
(2, 'buzz-lightyear', 'https://toystory.disney.com/buzz-lightyear', 35, 97, 'Buzz Lightyear es un personaje principal de la franquicia Toy Story. Es un superhéroe de juguete y una figura de acción en la franquicia. Junto con su amigo, el sheriff Woody, es uno de los dos personajes principales de las cuatro películas de Toy Story. También ha protagonizado la película Lightyear.', '2023-08-16 04:34:36', '2023-08-16 04:34:36', '2023-08-16 04:47:17'),
(3, 'Buzz Lightyear', 'https://toystory.disney.com/buzz-lightyear', 38, 97, 'Buzz Lightyear es un personaje principal de la franquicia Toy Story. Es un superhéroe de juguete y una figura de acción en la franquicia. Junto con su amigo, el sheriff Woody, es uno de los dos personajes principales de las cuatro películas de Toy Story. También ha protagonizado la película Lightyear.', '2023-08-16 04:49:52', '2023-08-16 04:58:22', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Genero`
--
ALTER TABLE `Genero`
  ADD PRIMARY KEY (`GeneroID`),
  ADD KEY `PeliculaSerieID` (`PeliculaSerieID`);

--
-- Indexes for table `PeliculaSerie`
--
ALTER TABLE `PeliculaSerie`
  ADD PRIMARY KEY (`PeliculaSerieID`);

--
-- Indexes for table `PersonajePorPelicula`
--
ALTER TABLE `PersonajePorPelicula`
  ADD PRIMARY KEY (`PersonajePorPeliculaID`),
  ADD KEY `PersonajesId` (`PersonajesId`),
  ADD KEY `PeliculaSerieId` (`PeliculaSerieId`);

--
-- Indexes for table `Personajes`
--
ALTER TABLE `Personajes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Genero`
--
ALTER TABLE `Genero`
  MODIFY `GeneroID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `PeliculaSerie`
--
ALTER TABLE `PeliculaSerie`
  MODIFY `PeliculaSerieID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `PersonajePorPelicula`
--
ALTER TABLE `PersonajePorPelicula`
  MODIFY `PersonajePorPeliculaID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Personajes`
--
ALTER TABLE `Personajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Genero`
--
ALTER TABLE `Genero`
  ADD CONSTRAINT `Genero_ibfk_1` FOREIGN KEY (`PeliculaSerieID`) REFERENCES `PeliculaSerie` (`PeliculaSerieID`);

--
-- Constraints for table `PersonajePorPelicula`
--
ALTER TABLE `PersonajePorPelicula`
  ADD CONSTRAINT `PersonajePorPelicula_ibfk_1` FOREIGN KEY (`PersonajesId`) REFERENCES `Personajes` (`id`),
  ADD CONSTRAINT `PersonajePorPelicula_ibfk_2` FOREIGN KEY (`PeliculaSerieId`) REFERENCES `PeliculaSerie` (`PeliculaSerieID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

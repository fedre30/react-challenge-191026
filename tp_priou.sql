-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 12 nov. 2019 à 11:03
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `tp_priou`
--

-- --------------------------------------------------------

--
-- Structure de la table `promotion`
--

DROP TABLE IF EXISTS `promotion`;
CREATE TABLE IF NOT EXISTS `promotion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `years` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `promotion`
--

INSERT INTO `promotion` (`id`, `name`, `years`) VALUES
(1, 'WEB', 2020),
(2, 'H1', 2022),
(3, 'Web marketing', 2020),
(4, 'parcours grande cole', 2020);

-- --------------------------------------------------------

--
-- Structure de la table `skills`
--

DROP TABLE IF EXISTS `skills`;
CREATE TABLE IF NOT EXISTS `skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `skills`
--

INSERT INTO `skills` (`id`, `name`) VALUES
(1, 'HTML'),
(2, 'Javascript'),
(3, 'Symfony');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `firstname` varchar(60) NOT NULL,
  `nickname` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `email` varchar(150) NOT NULL,
  `reference_link` varchar(160) DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `cursus` longtext NOT NULL,
  `id_promotion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `name`, `firstname`, `nickname`, `password`, `email`, `reference_link`, `rate`, `image`, `cursus`, `id_promotion`) VALUES
(1, 'durand', 'rainald', 'rhayzeh', 'mdpmdpmdp', 'test@email.com', '', 10, '', 'lorem ipsum dolor sit amet', 1),
(4, 'hillou', 'manon', 'TheHorizone', 'mdpmdpmdp', 'test@manon.email', '', 10, '', '', 1),
(8, 'name', 'firstnam', 'nickname', '$2y$10$vr2cFgbX81U6f1rOi6WOFuC/B6KG2lB80E02rpOrMRhYXl2dIWQSy', 'email@test.com', 'no', NULL, NULL, 'lalalalala', 1),
(7, 'durand', 'rainald', 'rhayzeh', '$2y$10$0XU7W0qS/eV4m3zo/ZBSl.7jB99YtH94xg3pPAhuO2wR3CTUnMgMa', 'email@test.com', 'no', NULL, NULL, 'lor', 1);

-- --------------------------------------------------------

--
-- Structure de la table `user_skills`
--

DROP TABLE IF EXISTS `user_skills`;
CREATE TABLE IF NOT EXISTS `user_skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_skills` int(11) NOT NULL,
  `rate` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user_skills`
--

INSERT INTO `user_skills` (`id`, `id_user`, `id_skills`, `rate`) VALUES
(1, 1, 1, 0),
(2, 4, 2, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

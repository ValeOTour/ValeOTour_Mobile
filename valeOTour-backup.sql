-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.28-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for valeotour
DROP DATABASE IF EXISTS `valeotour`;
CREATE DATABASE IF NOT EXISTS `valeotour` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `valeotour`;

-- Dumping structure for table valeotour.agendamento_guia
DROP TABLE IF EXISTS `agendamento_guia`;
CREATE TABLE IF NOT EXISTS `agendamento_guia` (
  `id_agendamento_guia` int(11) NOT NULL AUTO_INCREMENT,
  `id_guia` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `data_agendamento_guia` date DEFAULT NULL,
  `hora_agendamento_guia` time DEFAULT NULL,
  `numeroPessoas_agendamento_guia` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_agendamento_guia`),
  KEY `id_guia` (`id_guia`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `agendamento_guia_ibfk_1` FOREIGN KEY (`id_guia`) REFERENCES `guias` (`id_guia`) ON DELETE CASCADE,
  CONSTRAINT `agendamento_guia_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table valeotour.agendamento_guia: ~0 rows (approximately)
DELETE FROM `agendamento_guia`;

-- Dumping structure for table valeotour.agendamento_quarto
DROP TABLE IF EXISTS `agendamento_quarto`;
CREATE TABLE IF NOT EXISTS `agendamento_quarto` (
  `id_agendamento_quarto` int(11) NOT NULL,
  `data_agendamento_quarto` date DEFAULT NULL,
  `hora_agendamento_quarto` time DEFAULT NULL,
  `data_saida_quarto` date DEFAULT NULL,
  `data_entrada_quarto` date DEFAULT NULL,
  `id_quarto` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_agendamento_quarto`),
  KEY `id_quarto` (`id_quarto`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `agendamento_quarto_ibfk_1` FOREIGN KEY (`id_quarto`) REFERENCES `quartos` (`id_quarto`) ON DELETE CASCADE,
  CONSTRAINT `agendamento_quarto_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table valeotour.agendamento_quarto: ~0 rows (approximately)
DELETE FROM `agendamento_quarto`;

-- Dumping structure for table valeotour.avaliacoes_guias
DROP TABLE IF EXISTS `avaliacoes_guias`;
CREATE TABLE IF NOT EXISTS `avaliacoes_guias` (
  `id_avaliacao_guia` int(11) NOT NULL AUTO_INCREMENT,
  `id_guia` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `comentario_avaliacao_guia` varchar(250) DEFAULT NULL,
  `qtd_estrela_avaliacao_guia` float(2,1) DEFAULT NULL,
  `data_avaliacao_guia` date DEFAULT NULL,
  PRIMARY KEY (`id_avaliacao_guia`),
  KEY `id_guia` (`id_guia`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `avaliacoes_guias_ibfk_1` FOREIGN KEY (`id_guia`) REFERENCES `guias` (`id_guia`) ON DELETE CASCADE,
  CONSTRAINT `avaliacoes_guias_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table valeotour.avaliacoes_guias: ~0 rows (approximately)
DELETE FROM `avaliacoes_guias`;

-- Dumping structure for table valeotour.avaliacoes_pontos_turisticos
DROP TABLE IF EXISTS `avaliacoes_pontos_turisticos`;
CREATE TABLE IF NOT EXISTS `avaliacoes_pontos_turisticos` (
  `id_avaliacao_pt` int(11) NOT NULL AUTO_INCREMENT,
  `data_avaliacao_pt` date DEFAULT NULL,
  `id_usuarios` int(11) DEFAULT NULL,
  `id_pontos_turistico` int(11) DEFAULT NULL,
  `qtd_estrela_avaliacao_pt` float(2,1) DEFAULT NULL,
  `comentario_avaliacao_pt` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_avaliacao_pt`),
  KEY `id_usuarios` (`id_usuarios`),
  KEY `id_pontos_turistico` (`id_pontos_turistico`),
  CONSTRAINT `avaliacoes_pontos_turisticos_ibfk_1` FOREIGN KEY (`id_usuarios`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE,
  CONSTRAINT `avaliacoes_pontos_turisticos_ibfk_2` FOREIGN KEY (`id_pontos_turistico`) REFERENCES `pontos_turisticos` (`id_ponto_turistico`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table valeotour.avaliacoes_pontos_turisticos: ~0 rows (approximately)
DELETE FROM `avaliacoes_pontos_turisticos`;

-- Dumping structure for table valeotour.avaliacoes_pousadas
DROP TABLE IF EXISTS `avaliacoes_pousadas`;
CREATE TABLE IF NOT EXISTS `avaliacoes_pousadas` (
  `id_avaliacao_pousada` int(11) NOT NULL,
  `comentario_avaliacao_pousada` varchar(250) DEFAULT NULL,
  `qtd_estrela_avaliacao_pousada` float(2,1) DEFAULT NULL,
  `data_avaliacao_pousada` date DEFAULT NULL,
  `id_pousada` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_avaliacao_pousada`),
  KEY `id_pousada` (`id_pousada`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `avaliacoes_pousadas_ibfk_1` FOREIGN KEY (`id_pousada`) REFERENCES `pousadas` (`id_pousada`) ON DELETE CASCADE,
  CONSTRAINT `avaliacoes_pousadas_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table valeotour.avaliacoes_pousadas: ~0 rows (approximately)
DELETE FROM `avaliacoes_pousadas`;

-- Dumping structure for table valeotour.estabelecimentos
DROP TABLE IF EXISTS `estabelecimentos`;
CREATE TABLE IF NOT EXISTS `estabelecimentos` (
  `id_estabelecimento` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_estabelecimento` varchar(50) DEFAULT NULL,
  `id_ponto_turistico` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_estabelecimento`),
  KEY `id_ponto_turistico` (`id_ponto_turistico`),
  CONSTRAINT `estabelecimentos_ibfk_1` FOREIGN KEY (`id_ponto_turistico`) REFERENCES `pontos_turisticos` (`id_ponto_turistico`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table valeotour.estabelecimentos: ~0 rows (approximately)
DELETE FROM `estabelecimentos`;

-- Dumping structure for table valeotour.guias
DROP TABLE IF EXISTS `guias`;
CREATE TABLE IF NOT EXISTS `guias` (
  `id_guia` int(11) NOT NULL,
  `cadastur_guia` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `cidade_guia` varchar(50) DEFAULT NULL,
  `estado_guia` varchar(50) DEFAULT NULL,
  `numero_guia` int(5) DEFAULT NULL,
  `bairro_guia` varchar(50) DEFAULT NULL,
  `rua_guia` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_guia`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `guias_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table valeotour.guias: ~0 rows (approximately)
DELETE FROM `guias`;

-- Dumping structure for table valeotour.pontos_turisticos
DROP TABLE IF EXISTS `pontos_turisticos`;
CREATE TABLE IF NOT EXISTS `pontos_turisticos` (
  `id_ponto_turistico` int(11) NOT NULL AUTO_INCREMENT,
  `nome_pt` varchar(50) DEFAULT NULL,
  `longitude_pt` varchar(11) DEFAULT NULL,
  `latitude_pt` varchar(11) DEFAULT NULL,
  `caminho_imagem_pt` varchar(250) DEFAULT NULL,
  `descricao_pt` varchar(250) DEFAULT NULL,
  `tipo_pt` varchar(30) DEFAULT NULL,
  `rua_pt` varchar(50) DEFAULT NULL,
  `bairro_pt` varchar(50) DEFAULT NULL,
  `numero_pt` int(5) DEFAULT NULL,
  `cidade_pt` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_ponto_turistico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table valeotour.pontos_turisticos: ~0 rows (approximately)
DELETE FROM `pontos_turisticos`;

-- Dumping structure for table valeotour.pousadas
DROP TABLE IF EXISTS `pousadas`;
CREATE TABLE IF NOT EXISTS `pousadas` (
  `id_pousada` int(11) NOT NULL AUTO_INCREMENT,
  `rua_pousada` varchar(50) DEFAULT NULL,
  `numero_pousada` int(5) DEFAULT NULL,
  `bairro_pousada` varchar(50) DEFAULT NULL,
  `cidade_pousada` varchar(50) DEFAULT NULL,
  `descricao_pousada` varchar(250) DEFAULT NULL,
  `email_pousada` varchar(150) DEFAULT NULL,
  `senha_pousada` varchar(30) DEFAULT NULL,
  `longitude_pousada` varchar(11) DEFAULT NULL,
  `latitude_pousada` varchar(11) DEFAULT NULL,
  `caminho_imagem_pousada` varchar(250) DEFAULT NULL,
  `nome_pousada` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_pousada`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table valeotour.pousadas: ~0 rows (approximately)
DELETE FROM `pousadas`;

-- Dumping structure for table valeotour.quartos
DROP TABLE IF EXISTS `quartos`;
CREATE TABLE IF NOT EXISTS `quartos` (
  `id_quarto` int(11) NOT NULL AUTO_INCREMENT,
  `id_pousada` int(11) DEFAULT NULL,
  `descricao_quarto` varchar(250) DEFAULT NULL,
  `caminho_imagem_quarto` varchar(250) DEFAULT NULL,
  `tipo_quarto` varchar(30) DEFAULT NULL,
  `status_quarto` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id_quarto`),
  KEY `id_pousada` (`id_pousada`),
  CONSTRAINT `quartos_ibfk_1` FOREIGN KEY (`id_pousada`) REFERENCES `pousadas` (`id_pousada`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table valeotour.quartos: ~0 rows (approximately)
DELETE FROM `quartos`;

-- Dumping structure for table valeotour.trilhas
DROP TABLE IF EXISTS `trilhas`;
CREATE TABLE IF NOT EXISTS `trilhas` (
  `id_trilha` int(11) NOT NULL AUTO_INCREMENT,
  `extensao_trilha` float(4,2) DEFAULT NULL,
  `dificuldade_trilha` varchar(10) DEFAULT NULL,
  `id_ponto_turistico` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_trilha`),
  KEY `id_ponto_turistico` (`id_ponto_turistico`),
  CONSTRAINT `trilhas_ibfk_1` FOREIGN KEY (`id_ponto_turistico`) REFERENCES `pontos_turisticos` (`id_ponto_turistico`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table valeotour.trilhas: ~0 rows (approximately)
DELETE FROM `trilhas`;

-- Dumping structure for table valeotour.usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `email_usuario` varchar(150) DEFAULT NULL,
  `nome_usuario` varchar(100) DEFAULT NULL,
  `caminho_imagem_usuario` varchar(250) DEFAULT NULL,
  `tipo_usuario` varchar(10) DEFAULT NULL,
  `senha_usuario` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table valeotour.usuarios: ~4 rows (approximately)
DELETE FROM `usuarios`;
INSERT INTO `usuarios` (`id_usuario`, `email_usuario`, `nome_usuario`, `caminho_imagem_usuario`, `tipo_usuario`, `senha_usuario`) VALUES
	(1, 'admin@', 'Kauã', NULL, 'Cliente', 'admin'),
	(2, 'a', 'a', NULL, 'Cliente', 'a'),
	(3, 'bb', 'b', NULL, 'Cliente', 'ab'),
	(4, 'teste', 'teste', NULL, 'Cliente', 'teste');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

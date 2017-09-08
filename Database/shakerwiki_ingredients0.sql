-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: shakerwiki
-- ------------------------------------------------------
-- Server version	5.7.19-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingredients` (
  `idIngredients` int(11) NOT NULL AUTO_INCREMENT,
  `ingredient` varchar(35) NOT NULL,
  PRIMARY KEY (`idIngredients`),
  UNIQUE KEY `ingredient_UNIQUE` (`ingredient`),
  UNIQUE KEY `idIngredients_UNIQUE` (`idIngredients`)
) ENGINE=InnoDB AUTO_INCREMENT=562 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients`
--

LOCK TABLES `ingredients` WRITE;
/*!40000 ALTER TABLE `ingredients` DISABLE KEYS */;
INSERT INTO `ingredients` VALUES (7,'Абрикосовый бренди'),(69,'Абрикосовый ликер'),(10,'Айриш крим'),(500,'Ананас'),(71,'Ананасовый сок'),(1,'Апельсин'),(490,'Апельсиновый ликер'),(8,'Апельсиновый сок'),(505,'Битте Ангостура'),(60,'Блю Кюрасао'),(68,'Вишневый ликер'),(12,'Водка'),(468,'Водка цитрон'),(476,'Вустрейший соус'),(52,'Гвоздика'),(11,'Гранд марнье'),(70,'Гренадин'),(6,'Джин'),(555,'Зеленое яблоко'),(507,'Золотая текила'),(67,'Золотой ром'),(533,'Какосовое молоко'),(2,'Кампари'),(51,'Карица в палочках'),(471,'Клюквенный сок'),(75,'Коктейльная вишня'),(493,'Кола'),(74,'Колотый лед'),(9,'Кофейный ликер'),(48,'Красное сухое вино'),(3,'Красный вермут'),(554,'Куанто'),(469,'Куантро'),(62,'Лайм'),(5,'Лед в кубиках'),(49,'Лимон'),(61,'Лимонад'),(18,'Маринованная луковица'),(498,'Миндальный силоп'),(54,'Мускатный орех'),(501,'Мята'),(497,'Орандж крюкасо'),(479,'Перец'),(538,'Персиковый шнапс'),(503,'Ржаное виски'),(50,'Сахар'),(65,'Светлый ром'),(478,'Сельдереевая соль'),(480,'Сельдерей'),(489,'Серебряная текила'),(492,'Сироп Gomme'),(14,'Сливки'),(4,'Содовая'),(511,'Соль'),(477,'Соус Тобаско'),(17,'Сухой вермут'),(66,'Темный ром'),(474,'Томатный сок'),(483,'Тоник'),(553,'Яблочный шнапс');
/*!40000 ALTER TABLE `ingredients` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-07 17:07:34

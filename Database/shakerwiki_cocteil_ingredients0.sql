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
-- Table structure for table `cocteil_ingredients`
--

DROP TABLE IF EXISTS `cocteil_ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cocteil_ingredients` (
  `idCocteil` int(11) NOT NULL,
  `idIngredient` int(11) NOT NULL,
  `volum` varchar(45) DEFAULT NULL,
  KEY `idCocteil_idx` (`idCocteil`),
  KEY `idIngredients_idx` (`idIngredient`),
  CONSTRAINT `idCocteil` FOREIGN KEY (`idCocteil`) REFERENCES `info_of_cocteils` (`idCocteil`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idIngredients` FOREIGN KEY (`idIngredient`) REFERENCES `ingredients` (`idIngredients`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cocteil_ingredients`
--

LOCK TABLES `cocteil_ingredients` WRITE;
/*!40000 ALTER TABLE `cocteil_ingredients` DISABLE KEYS */;
INSERT INTO `cocteil_ingredients` VALUES (1,1,'1/2 дольки'),(1,2,'30 мл'),(1,3,'30 мл'),(1,4,NULL),(1,5,NULL),(2,9,'20 мл'),(2,10,'20 мл'),(2,11,'20 мл'),(3,12,'50 мл'),(3,9,'20 мл'),(3,14,'30 мл'),(3,5,NULL),(4,6,'60 мл'),(4,17,'10 мл'),(4,18,'1 шт'),(4,5,NULL),(15,48,'200 мл'),(15,49,'1 ломтик'),(15,50,'2 ч.л.'),(15,51,'1 палочка'),(15,52,'2 шт'),(15,1,'1 долька'),(15,54,'1 щепотка'),(20,12,'25 мл'),(20,60,'25 мл'),(20,61,'100 мл'),(20,62,'1 долька'),(20,5,NULL),(53,6,'60 мл'),(53,65,'20 мл'),(53,66,'20 мл'),(53,67,'20 мл'),(53,68,'15 мл'),(53,69,'15 мл'),(53,70,'5 мл'),(53,71,'30 мл'),(53,8,'30 мл'),(53,75,'1 шт'),(53,1,'1 долька'),(53,5,' '),(53,74,' '),(54,468,'40 мл'),(54,469,'15 мл'),(54,62,'1 половинка'),(54,471,'30 мл'),(54,5,' '),(55,12,'45 мл'),(55,474,'90 мл'),(55,49,'1/4 штуки'),(55,476,'3 капли'),(55,477,' 2 капли'),(55,478,' '),(55,479,' '),(55,480,' 1 веточка'),(55,5,' '),(56,6,'40 мл'),(56,483,'80 мл'),(56,62,'1 долька'),(56,5,' '),(57,12,'15 мл'),(57,6,'20 мл'),(57,65,'15 мл'),(57,489,'15 мл'),(57,490,'15 мл'),(57,49,'1/2 шт'),(57,492,'30 мл'),(57,493,' '),(57,5,' '),(58,65,'40 мл'),(58,66,'40 мл'),(58,497,'15 мл'),(58,498,'15 мл'),(58,62,'1/3 шт'),(58,500,'1 кусочек'),(58,501,'1 веточка'),(58,5,' '),(59,503,'50 мл'),(59,3,'20 мл'),(59,505,'1 капля'),(59,75,'1 шт'),(60,507,'35 мл'),(60,469,'20 мл'),(60,62,'1/2 шт'),(60,5,' '),(60,511,' '),(61,65,'40 мл'),(61,62,'1 шт'),(61,50,'2 ч.л.'),(61,501,'6 веточек'),(61,4,' '),(61,74,' '),(62,2,'30 мл'),(62,6,'30 мл'),(62,3,'30 мл'),(62,1,'1/2 дольки'),(62,5,' '),(63,12,'50 мл'),(63,8,'100 мл'),(63,1,'1 долька'),(63,5,' '),(64,6,'35 мл'),(64,7,'20 мл'),(64,8,'15 мл'),(64,5,' '),(65,65,'30 мл'),(65,71,'90 мл'),(65,533,'30 мл'),(65,500,'1 долька'),(65,74,' '),(65,75,' 1 шт'),(66,12,'40 мл'),(66,538,'20 мл'),(66,8,'40 мл'),(66,471,'40 мл'),(66,1,'1 долька'),(66,5,' '),(67,489,'50 мл'),(67,61,'100 мл'),(68,507,'45 мл'),(68,8,'90 мл'),(68,70,'15 мл'),(68,5,' '),(69,12,'50 мл'),(69,9,'20 мл'),(69,5,' '),(71,12,'40 мл'),(71,553,'15 мл'),(71,554,'15 мл'),(71,555,'1 долька'),(71,5,' ');
/*!40000 ALTER TABLE `cocteil_ingredients` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-07 17:07:33

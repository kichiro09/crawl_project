-- MySQL dump 10.13  Distrib 5.1.45, for Win64 (unknown)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	5.1.45-community

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
-- Table structure for table `story`
--

DROP TABLE IF EXISTS `story`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `story` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avt` varchar(100) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `chap_count` smallint(6) NOT NULL DEFAULT '0',
  `updated` varchar(50) NOT NULL DEFAULT '1 giờ',
  `rate_count` mediumint(9) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `story`
--

LOCK TABLES `story` WRITE;
/*!40000 ALTER TABLE `story` DISABLE KEYS */;
INSERT INTO `story` VALUES (19,'/toi-muon-tro-thanh-tieu-thu-cong-tuoc-phe-vat_avt.jpg','toi-muon-tro-thanh-tieu-thu-cong-tuoc-phe-vat','Tôi Muốn Trở Thành Tiểu Thư Công Tước Phế Vật',58,' 34 phút',164);
/*!40000 ALTER TABLE `story` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `story_detail`
--

DROP TABLE IF EXISTS `story_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `story_detail` (
  `story_id` int(11) NOT NULL,
  `dif_name` varchar(50) NOT NULL,
  `author` varchar(50) NOT NULL,
  `sub_team` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `created` varchar(50) NOT NULL DEFAULT '1970-01-01',
  `view` varchar(20) NOT NULL DEFAULT '0',
  `category` varchar(50) NOT NULL,
  UNIQUE KEY `story_id` (`story_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `story_detail`
--

LOCK TABLES `story_detail` WRITE;
/*!40000 ALTER TABLE `story_detail` DISABLE KEYS */;
INSERT INTO `story_detail` VALUES (19,'Không có','Diego',' Ngôn Phong','Đang tiến hành',' 20/05/2020 ','843.6K','Cổ Đại-Xuyên Không-Ngôn Tình-Hài Hước-');
/*!40000 ALTER TABLE `story_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chapter_content`
--

DROP TABLE IF EXISTS `chapter_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chapter_content` (
  `chap_name` varchar(30) NOT NULL,
  `story_id` int(11) NOT NULL,
  `image_path` varchar(50) NOT NULL,
  UNIQUE KEY `image_path` (`image_path`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chapter_content`
--

LOCK TABLES `chapter_content` WRITE;
/*!40000 ALTER TABLE `chapter_content` DISABLE KEYS */;
INSERT INTO `chapter_content` VALUES ('chap-45',19,'chap-450.jpg'),('chap-45',19,'chap-451.jpg'),('chap-45',19,'chap-4510.jpg'),('chap-45',19,'chap-4511.jpg'),('chap-45',19,'chap-4512.jpg'),('chap-45',19,'chap-4513.jpg'),('chap-45',19,'chap-452.jpg'),('chap-45',19,'chap-453.jpg'),('chap-45',19,'chap-454.jpg'),('chap-45',19,'chap-455.jpg'),('chap-45',19,'chap-456.jpg'),('chap-45',19,'chap-457.jpg'),('chap-45',19,'chap-458.jpg'),('chap-45',19,'chap-459.jpg'),('chap-46',19,'chap-460.jpg'),('chap-46',19,'chap-461.jpg'),('chap-46',19,'chap-4610.jpg'),('chap-46',19,'chap-4611.jpg'),('chap-46',19,'chap-462.jpg'),('chap-46',19,'chap-463.jpg'),('chap-46',19,'chap-464.jpg'),('chap-46',19,'chap-465.jpg'),('chap-46',19,'chap-466.jpg'),('chap-46',19,'chap-467.jpg'),('chap-46',19,'chap-468.jpg'),('chap-46',19,'chap-469.jpg'),('chap-47',19,'chap-470.jpg'),('chap-47',19,'chap-471.jpg'),('chap-47',19,'chap-4710.jpg'),('chap-47',19,'chap-4711.jpg'),('chap-47',19,'chap-4712.jpg'),('chap-47',19,'chap-472.jpg'),('chap-47',19,'chap-473.jpg'),('chap-47',19,'chap-474.jpg'),('chap-47',19,'chap-475.jpg'),('chap-47',19,'chap-476.jpg'),('chap-47',19,'chap-477.jpg'),('chap-47',19,'chap-478.jpg'),('chap-47',19,'chap-479.jpg'),('chap-48',19,'chap-480.jpg'),('chap-48',19,'chap-481.jpg'),('chap-48',19,'chap-4810.jpg'),('chap-48',19,'chap-4811.jpg'),('chap-48',19,'chap-482.jpg'),('chap-48',19,'chap-483.jpg'),('chap-48',19,'chap-484.jpg'),('chap-48',19,'chap-485.jpg'),('chap-48',19,'chap-486.jpg'),('chap-48',19,'chap-487.jpg'),('chap-48',19,'chap-488.jpg'),('chap-48',19,'chap-489.jpg'),('chap-49',19,'chap-490.jpg'),('chap-49',19,'chap-491.jpg'),('chap-49',19,'chap-4910.jpg'),('chap-49',19,'chap-4911.jpg'),('chap-49',19,'chap-4912.jpg'),('chap-49',19,'chap-4913.jpg'),('chap-49',19,'chap-492.jpg'),('chap-49',19,'chap-493.jpg'),('chap-49',19,'chap-494.jpg'),('chap-49',19,'chap-495.jpg'),('chap-49',19,'chap-496.jpg'),('chap-49',19,'chap-497.jpg'),('chap-49',19,'chap-498.jpg'),('chap-49',19,'chap-499.jpg'),('chap-50',19,'chap-500.jpg'),('chap-50',19,'chap-501.jpg'),('chap-50',19,'chap-5010.jpg'),('chap-50',19,'chap-502.jpg'),('chap-50',19,'chap-503.jpg'),('chap-50',19,'chap-504.jpg'),('chap-50',19,'chap-505.jpg'),('chap-50',19,'chap-506.jpg'),('chap-50',19,'chap-507.jpg'),('chap-50',19,'chap-508.jpg'),('chap-50',19,'chap-509.jpg'),('chap-51',19,'chap-510.jpg'),('chap-51',19,'chap-511.jpg'),('chap-51',19,'chap-5110.jpg'),('chap-51',19,'chap-5111.jpg'),('chap-51',19,'chap-512.jpg'),('chap-51',19,'chap-513.jpg'),('chap-51',19,'chap-514.jpg'),('chap-51',19,'chap-515.jpg'),('chap-51',19,'chap-516.jpg'),('chap-51',19,'chap-517.jpg'),('chap-51',19,'chap-518.jpg'),('chap-51',19,'chap-519.jpg'),('chap-52',19,'chap-520.jpg'),('chap-52',19,'chap-521.jpg'),('chap-52',19,'chap-5210.jpg'),('chap-52',19,'chap-5211.jpg'),('chap-52',19,'chap-5212.jpg'),('chap-52',19,'chap-5213.jpg'),('chap-52',19,'chap-522.jpg'),('chap-52',19,'chap-523.jpg'),('chap-52',19,'chap-524.jpg'),('chap-52',19,'chap-525.jpg'),('chap-52',19,'chap-526.jpg'),('chap-52',19,'chap-527.jpg'),('chap-52',19,'chap-528.jpg'),('chap-52',19,'chap-529.jpg'),('chap-53',19,'chap-530.jpg'),('chap-53',19,'chap-531.jpg'),('chap-53',19,'chap-5310.jpg'),('chap-53',19,'chap-5311.jpg'),('chap-53',19,'chap-532.jpg'),('chap-53',19,'chap-533.jpg'),('chap-53',19,'chap-534.jpg'),('chap-53',19,'chap-535.jpg'),('chap-53',19,'chap-536.jpg'),('chap-53',19,'chap-537.jpg'),('chap-53',19,'chap-538.jpg'),('chap-53',19,'chap-539.jpg'),('chap-54',19,'chap-540.jpg'),('chap-54',19,'chap-541.jpg'),('chap-54',19,'chap-5410.jpg'),('chap-54',19,'chap-542.jpg'),('chap-54',19,'chap-543.jpg'),('chap-54',19,'chap-544.jpg'),('chap-54',19,'chap-545.jpg'),('chap-54',19,'chap-546.jpg'),('chap-54',19,'chap-547.jpg'),('chap-54',19,'chap-548.jpg'),('chap-54',19,'chap-549.jpg'),('chap-55',19,'chap-550.jpg'),('chap-55',19,'chap-551.jpg'),('chap-55',19,'chap-5510.jpg'),('chap-55',19,'chap-5511.jpg'),('chap-55',19,'chap-5512.jpg'),('chap-55',19,'chap-5513.jpg'),('chap-55',19,'chap-5514.jpg'),('chap-55',19,'chap-552.jpg'),('chap-55',19,'chap-553.jpg'),('chap-55',19,'chap-554.jpg'),('chap-55',19,'chap-555.jpg'),('chap-55',19,'chap-556.jpg'),('chap-55',19,'chap-557.jpg'),('chap-55',19,'chap-558.jpg'),('chap-55',19,'chap-559.jpg'),('chap-56',19,'chap-560.jpg'),('chap-56',19,'chap-561.jpg'),('chap-56',19,'chap-5610.jpg'),('chap-56',19,'chap-5611.jpg'),('chap-56',19,'chap-5612.jpg'),('chap-56',19,'chap-5613.jpg'),('chap-56',19,'chap-5614.jpg'),('chap-56',19,'chap-562.jpg'),('chap-56',19,'chap-563.jpg'),('chap-56',19,'chap-564.jpg'),('chap-56',19,'chap-565.jpg'),('chap-56',19,'chap-566.jpg'),('chap-56',19,'chap-567.jpg'),('chap-56',19,'chap-568.jpg'),('chap-56',19,'chap-569.jpg'),('chap-57',19,'chap-570.jpg'),('chap-57',19,'chap-571.jpg'),('chap-57',19,'chap-5710.jpg'),('chap-57',19,'chap-5711.jpg'),('chap-57',19,'chap-5712.jpg'),('chap-57',19,'chap-572.jpg'),('chap-57',19,'chap-573.jpg'),('chap-57',19,'chap-574.jpg'),('chap-57',19,'chap-575.jpg'),('chap-57',19,'chap-576.jpg'),('chap-57',19,'chap-577.jpg'),('chap-57',19,'chap-578.jpg'),('chap-57',19,'chap-579.jpg'),('chap-58',19,'chap-580.jpg'),('chap-58',19,'chap-581.jpg'),('chap-58',19,'chap-5810.jpg'),('chap-58',19,'chap-5811.jpg'),('chap-58',19,'chap-5812.jpg'),('chap-58',19,'chap-582.jpg'),('chap-58',19,'chap-583.jpg'),('chap-58',19,'chap-584.jpg'),('chap-58',19,'chap-585.jpg'),('chap-58',19,'chap-586.jpg'),('chap-58',19,'chap-587.jpg'),('chap-58',19,'chap-588.jpg'),('chap-58',19,'chap-589.jpg');
/*!40000 ALTER TABLE `chapter_content` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-07 13:48:15

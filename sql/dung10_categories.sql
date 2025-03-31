-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dung10
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) NOT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `parent_category_id` int DEFAULT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `category_name` (`category_name`),
  KEY `fk_parent_category` (`parent_category_id`),
  CONSTRAINT `fk_parent_category` FOREIGN KEY (`parent_category_id`) REFERENCES `categories` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Thể Thao',NULL,'2025-03-17 07:56:21',NULL),(2,'Chính Trị',NULL,'2025-03-17 07:56:35',NULL),(3,'Giải Trí',NULL,'2025-03-17 07:56:35',NULL),(4,'Góc Nhìn',NULL,'2025-03-19 08:38:11',NULL),(5,'Kinh Doanh',NULL,'2025-03-21 03:24:48',NULL),(6,'Pháp Luật',NULL,'2025-03-21 03:24:48',NULL),(7,'Giáo Dục',NULL,'2025-03-21 03:24:48',NULL),(8,'Sức Khỏe',NULL,'2025-03-21 03:24:48',NULL),(9,'Đời Sống',NULL,'2025-03-21 03:24:48',NULL),(10,'Du Lịch',NULL,'2025-03-21 03:24:48',NULL),(11,'Bất động sản',NULL,'2025-03-28 08:30:19',NULL),(12,'Khoa học',NULL,'2025-03-31 04:33:55',NULL),(13,'Thời sự',NULL,'2025-03-31 08:10:56',NULL),(14,'Thế giới',NULL,'2025-03-31 08:10:56',NULL),(15,'Tâm sự ',NULL,'2025-03-31 09:37:56',NULL),(16,'Ý kiến',NULL,'2025-03-31 09:37:56',NULL),(17,'Thư giãn',NULL,'2025-03-31 09:37:56',NULL),(18,'Ảnh',NULL,'2025-03-31 09:46:38',NULL),(19,'Intographics',NULL,'2025-03-31 09:46:38',NULL),(20,'Công nghệ',NULL,'2025-03-31 11:00:02',NULL),(21,'Video',NULL,'2025-03-31 11:00:02',NULL),(22,'Podcasts',NULL,'2025-03-31 11:00:02',NULL),(23,'Xe',NULL,'2025-03-31 11:00:02',NULL),(24,'Vaccine',NULL,'2025-03-31 11:14:09',NULL),(25,'Nhân sự',NULL,'2025-03-31 11:14:09',NULL),(26,'Kỉ nguyên mới',NULL,'2025-03-31 11:14:09',NULL),(27,'Nhân sinh',NULL,'2025-03-31 11:14:09',NULL),(28,'Việc làm',NULL,'2025-03-31 11:14:09',NULL),(29,'Giao thông',NULL,'2025-03-31 11:14:09',NULL),(30,'Mekong',NULL,'2025-03-31 11:14:09',NULL),(31,'Quỹ hy vọng',NULL,'2025-03-31 11:14:09',NULL),(32,'Tư liệu',NULL,'2025-03-31 11:14:09',NULL),(33,'Phân tích',NULL,'2025-03-31 11:14:09',NULL),(34,'Người việt 5 châu',NULL,'2025-03-31 11:14:09',NULL),(35,'Cuộc sống đó đây',NULL,'2025-03-31 11:14:09',NULL),(36,'Quân sự',NULL,'2025-03-31 11:14:09',NULL),(37,'Netzezo',NULL,'2025-03-31 11:14:09',NULL),(38,'Quốc tế',NULL,'2025-03-31 11:14:09',NULL),(39,'Doanh nghiệp',NULL,'2025-03-31 11:14:09',NULL),(40,'Chứng khoán',NULL,'2025-03-31 11:14:09',NULL),(41,'Ebank',NULL,'2025-03-31 11:14:09',5),(42,'Vĩ mô',NULL,'2025-03-31 11:14:09',NULL),(43,'Tiền của tôi',NULL,'2025-03-31 11:14:09',NULL),(44,'Hàng hóa',NULL,'2025-03-31 11:14:09',NULL),(45,'AI',NULL,'2025-03-31 11:14:09',NULL),(46,'Chuyển đổi số',NULL,'2025-03-31 11:14:09',NULL),(47,'Nhịp sống số',NULL,'2025-03-31 11:14:09',NULL),(48,'Thiết bị',NULL,'2025-03-31 11:14:09',NULL),(49,'Trải nghiệm',NULL,'2025-03-31 11:14:09',NULL),(50,'GameVerse 2025',NULL,'2025-03-31 11:14:09',NULL),(51,'Tin tức',NULL,'2025-03-31 11:14:09',NULL),(52,'Đổi mới sáng tạo',NULL,'2025-03-31 11:14:09',NULL),(53,'Bàn tròn',NULL,'2025-03-31 11:14:09',NULL),(54,'Nhân vật',NULL,'2025-03-31 11:14:09',NULL),(55,'Cửa số tri thức',NULL,'2025-03-31 11:14:09',NULL),(56,'Thế giới tự nhiên',NULL,'2025-03-31 11:14:09',NULL),(57,'Vũ trụ',NULL,'2025-03-31 11:14:09',NULL),(58,'Sáng kiến khoa học',NULL,'2025-03-31 11:14:09',NULL),(59,'Thời sự ',NULL,'2025-03-31 11:14:09',NULL),(60,'Nhịp sống ',NULL,'2025-03-31 11:14:09',NULL),(61,'Food',NULL,'2025-03-31 11:14:09',NULL),(62,'Chính sách',NULL,'2025-03-31 11:14:09',NULL),(63,'Thị trường',NULL,'2025-03-31 11:14:09',NULL),(64,'Không gian sống',NULL,'2025-03-31 11:14:09',NULL),(65,'Dự án',NULL,'2025-03-31 11:14:09',NULL),(66,'Giới sao',NULL,'2025-03-31 11:14:09',NULL),(67,'Chủ đề',NULL,'2025-03-31 11:14:09',NULL),(68,'VnExpress hôm nay',NULL,'2025-03-31 11:14:09',NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-31 19:15:01

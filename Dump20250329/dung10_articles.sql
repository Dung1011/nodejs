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
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `article_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `status` enum('draft','published','archived') DEFAULT 'draft',
  `published_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`article_id`),
  KEY `fk_author_id` (`author_id`),
  KEY `fk_category_id` (`category_id`),
  CONSTRAINT `fk_author_id` FOREIGN KEY (`author_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'Việt Nam vô địch AFF Cup 2024','Đội tuyển Việt Nam Thắng Thái Lan 3-2 ở lượt về chung kết, đội tuyển Việt Nam lần thứ ba vô địch Đông Nam Á với tỷ số chung cuộc 5-3.',1,2,'published','2025-03-17 07:41:29','2025-03-17 07:41:29','2025-03-28 08:06:39','/uploads/th.jpg'),(2,'Thái Lan thua Philippines tại bán kết ','Thủng lưới ở phút bù thứ năm, ĐKVĐ Thái Lan thua 1-2 trên sân Philippines, ở lượt đi bán kết ASEAN Cup.',1,1,'published','2025-03-01 03:00:00','2025-03-01 02:00:00','2025-03-28 07:10:25','/uploads/h.jpg'),(3,'Điều dưỡng Mỹ \'chạy đua\' với điều dưỡng AI','Giới nghệ sĩ đang có nhiều hoạt động nổi bật...',3,3,'published',NULL,'2025-03-17 09:02:42','2025-03-28 07:10:25','/uploads/vn.jpg'),(4,'Cập nhật tình hình thời sự','Nhiều sự kiện quan trọng đã diễn ra trong tuần qua như Hội nghị thượng đỉnh G20, Hội nghị thượng đỉnh ASEAN, các sự kiện văn hóa quốc tế...',2,2,'published','2025-03-17 09:02:42','2025-03-17 09:02:42','2025-03-28 07:10:25','/uploads/anh.jpg'),(5,'Tranh luận với AI','Làm sao để AI hỗ trợ sinh viên học tập nhưng không khiến họ lười suy nghĩ, tư duy phản biện kém đi?',2,4,'published','2025-03-17 09:02:42','2025-03-19 08:40:31','2025-03-28 07:10:25','/uploads/10.jpg'),(6,'Bóng đá Việt Nam vươn tầm châu lục','Đội tuyển Việt Nam đã có màn trình diễn ấn tượng...',1,1,'published','2025-03-20 07:00:00','2025-03-21 03:26:08','2025-03-28 07:10:25','/uploads/11.jpg'),(7,'Chính sách kinh tế mới và công cuộc','Chính phủ vừa ban hành chính sách kinh tế...',2,2,'published','2025-03-20 08:00:00','2025-03-21 03:26:08','2025-03-28 07:30:59','/uploads/12.jpg'),(8,'Sao Hollywood thăm Việt Nam','Ngôi sao nổi tiếng Hollywood đã có chuyến...',3,3,'published','2025-03-20 09:00:00','2025-03-21 03:26:08','2025-03-28 07:10:25','/uploads/13.jpg'),(9,'Góc nhìn: Nền giáo dục Việt Nam','Nền giáo dục Việt Nam cần những bước chuyển...',4,4,'published','2025-03-20 10:00:00','2025-03-21 03:26:08','2025-03-28 07:10:25','/uploads/14.jpg'),(10,'Thể thao Việt Nam và bước tiến lớn','Các vận động viên Việt Nam đã có bước...',1,1,'published','2025-03-21 03:00:00','2025-03-21 03:26:08','2025-03-28 07:10:25','/uploads/15.jpg'),(11,'Biến động thị trường chứng khoán','Thị trường chứng khoán gần đây ghi nhận...',2,2,'published','2025-03-21 04:00:00','2025-03-21 03:26:08','2025-03-28 07:10:25','/uploads/16.jpg'),(12,'Ca sĩ A ra mắt MV mới','Ca sĩ A vừa ra mắt MV mang tên “Đố anh quên được em.” Đây là MV thứ 2 của Lona sau MV “Thích hay là yêu còn chưa biết” từng tạo xu hướng trong giới trẻ.',3,3,'published','2025-03-21 05:00:00','2025-03-21 03:26:08','2025-03-28 07:10:25','/uploads/17.jpg'),(13,'Bài học từ các startup thành công','Nhiều startup Việt Nam đã gặt hái được nhiều thành công và đóng góp to lớn vào sự phát triển kinh tế – xã hội của đất nước. Với sự sáng tạo, dám nghĩ dám làm và tinh thần...',4,5,'published','2025-03-21 06:00:00','2025-03-21 03:26:08','2025-03-28 07:10:25','/uploads/18.jpg'),(14,'Phát triển đô thị thông minh','Các thành phố lớn đang áp dụng, triển khai xây dựng đề án về đô thị thông minh ',2,6,'published','2025-03-21 07:00:00','2025-03-21 03:26:08','2025-03-28 07:10:25','/uploads/19.jpg'),(15,'Giải mã hiện tượng mạng xã hội','Hiện tượng mạng xã hội gần đây...',3,7,'published','2025-03-21 08:00:00','2025-03-21 03:26:08','2025-03-28 07:10:25','/uploads/20.jpg'),(16,'Công nghệ AI trong giáo dục','Ứng dụng AI trong giáo dục đang ngày càng phổ biến...',2,4,'published','2025-03-22 01:30:00','2025-03-28 07:22:03','2025-03-28 09:44:16','/uploads/21.jpg'),(17,'Thị trường chứng khoán biến động mạnh','Chứng khoán hôm nay chứng kiến mức biến động lớn...',1,6,'published','2025-03-22 02:00:00','2025-03-28 07:22:03','2025-03-28 09:44:16','/uploads/22.jpg'),(18,'Đội tuyển Việt Nam chuẩn bị cho vòng loại World Cup','HLV trưởng chia sẻ về chiến thuật mới của đội...',3,1,'published','2025-03-22 03:00:00','2025-03-28 07:22:03','2025-03-28 09:44:16','/uploads/23.jpg'),(19,'Du lịch hè 2025 - Những điểm đến hấp dẫn','Mùa hè này, những điểm đến nào sẽ hot nhất...',4,10,'published','2025-03-22 04:00:00','2025-03-28 07:22:03','2025-03-28 09:44:16','/uploads/24.jpg'),(20,'Xu hướng thời trang mới năm 2025','Những xu hướng thời trang nổi bật của năm...',5,3,'published','2025-03-22 05:00:00','2025-03-28 07:22:03','2025-03-28 09:44:16','/uploads/25.jpg'),(21,'Những cải cách mới trong chính sách thuế','Chính phủ công bố một số thay đổi quan trọng...',6,2,'published','2025-03-22 06:00:00','2025-03-28 07:22:03','2025-03-28 09:44:16','/uploads/26.jpg'),(22,'Sức khỏe tinh thần trong thời đại số','Áp lực công việc và mạng xã hội ảnh hưởng thế nào...',7,8,'published','2025-03-22 07:00:00','2025-03-28 07:22:03','2025-03-28 09:44:16','/uploads/27.jpg'),(23,'Startup công nghệ Việt Nam bứt phá','Các công ty khởi nghiệp Việt Nam đang có bước tiến mạnh mẽ...',8,5,'published','2025-03-22 08:00:00','2025-03-28 07:22:03','2025-03-28 09:44:16','/uploads/28.jpg'),(24,'Dự án chung cư cao cấp tại TP.HCM sắp ra mắt','Nhiều dự án chung cư cao cấp tại TP.HCM chuẩn bị mở bán với mức giá hấp dẫn.',1,11,'published','2025-03-28 08:38:04','2025-03-28 08:38:04','2025-03-28 09:44:16','/uploads/29.jpg'),(25,'Giá nhà đất Hà Nội tiếp tục leo thang','Bất chấp tình hình kinh tế, giá nhà đất tại Hà Nội vẫn duy trì mức tăng trưởng mạnh.',2,11,'published','2025-03-28 08:38:04','2025-03-28 08:38:04','2025-03-28 09:44:16','/uploads/30.jpg'),(26,'Xu hướng đầu tư bất động sản nghỉ dưỡng 2025','Bất động sản nghỉ dưỡng ven biển đang thu hút nhiều nhà đầu tư lớn.',3,11,'published','2025-03-28 08:38:04','2025-03-28 08:38:04','2025-03-28 09:44:16','/uploads/31.jpg'),(27,'Người mua nhà cần lưu ý gì khi chọn chung cư?','Những yếu tố quan trọng giúp người mua tránh sai lầm khi chọn căn hộ chung cư.',4,11,'published','2025-03-28 08:38:04','2025-03-28 08:38:04','2025-03-28 09:44:16','/uploads/32.jpg'),(28,'Dự án nhà ở xã hội được hưởng nhiều ưu đãi mới','Chính phủ vừa ban hành các chính sách hỗ trợ người mua nhà ở xã hội.',5,11,'published','2025-03-28 08:38:04','2025-03-28 08:38:04','2025-03-28 09:44:16','/uploads/33.jpg'),(29,'Doanh thu bán lẻ Việt Nam đạt mức kỷ lục','Doanh thu ngành bán lẻ trong nước tăng mạnh nhờ sự bùng nổ của thương mại điện tử.',6,5,'published','2025-03-28 08:38:04','2025-03-28 08:38:04','2025-03-28 09:44:16','/uploads/34.jpg'),(30,'Cạnh tranh  giữa các chuỗi cà phê tại Việt Nam','Các thương hiệu cà phê trong nước và quốc tế đang cạnh tranh khốc liệt để giành thị phần.',1,5,'published','2025-03-28 08:38:04','2025-03-28 08:38:04','2025-03-28 09:55:46','/uploads/35.jpg'),(31,'Xu hướng tiêu dùng thay đổi sau đại dịch','Người tiêu dùng có xu hướng chi tiêu nhiều hơn cho sức khỏe và giáo dục.',2,5,'published','2025-03-28 08:38:04','2025-03-28 08:38:04','2025-03-28 09:44:16','/uploads/36.jpg'),(32,'Làn sóng khởi nghiệp công nghệ tại Việt Nam','Việt Nam đang chứng kiến sự gia tăng mạnh mẽ của các startup công nghệ.',3,5,'published','2025-03-28 08:38:04','2025-03-28 08:38:04','2025-03-28 09:44:16','/uploads/37.jpg'),(33,'Thị trường ô tô Việt Nam bùng nổ với các mẫu xe mới','Nhiều mẫu xe điện và hybrid được ra mắt nhằm đáp ứng nhu cầu ngày càng cao của khách hàng.',4,5,'published','2025-03-28 08:38:04','2025-03-28 08:38:04','2025-03-28 09:44:16','/uploads/38.jpg'),(34,'Messi giành Quả bóng vàng thứ 8','Lionel Messi chính thức giành Quả bóng vàng thứ 8 sau một mùa giải xuất sắc cùng Argentina và Inter Miami.',1,1,'published','2024-03-24 03:00:00','2025-03-28 10:11:42','2025-03-29 02:36:16','/uploads/39.jpg'),(35,'MU thắng kịch tính trước Liverpool','Manchester United có chiến thắng nghẹt thở 3-2 trước Liverpool trong trận derby nước Anh.',2,1,'published','2024-03-24 04:30:00','2025-03-28 10:11:42','2025-03-29 02:36:16','/uploads/40.jpg'),(36,'Ronaldo lập hat-trick tại Saudi Pro League','Cristiano Ronaldo tiếp tục thể hiện phong độ đỉnh cao khi ghi hat-trick giúp Al Nassr giành chiến thắng 4-1.',3,1,'published','2024-03-24 06:45:00','2025-03-28 10:11:42','2025-03-29 02:36:16','/uploads/41.jpg'),(37,'Đội tuyển Việt Nam sẵn sàng cho vòng loại World Cup','HLV Philippe Troussier khẳng định đội tuyển Việt Nam đã chuẩn bị kỹ lưỡng cho loạt trận vòng loại World Cup 2026.',4,1,'published','2024-03-24 08:00:00','2025-03-28 10:11:42','2025-03-29 02:36:16','/uploads/42.jpg'),(38,'Novak Djokovic vô địch Australian Open 2024','Tay vợt số một thế giới Novak Djokovic đã đánh bại Carlos Alcaraz để lên ngôi tại Australian Open.',5,1,'published','2024-03-24 09:20:00','2025-03-28 10:11:42','2025-03-29 02:36:16','/uploads/43.jpg'),(42,'Bùng nổ showbiz 2025','Showbiz Việt đang chứng kiến sự thay đổi lớn...',1,3,'published','2025-03-29 02:16:35','2025-03-29 02:16:35','2025-03-29 02:36:16','/uploads/44.jpg'),(43,'Phim bom tấn mùa hè','Những bộ phim đáng xem nhất hè này...',2,3,'published','2025-03-29 02:16:35','2025-03-29 02:16:35','2025-03-29 02:36:16','/uploads/45.jpg'),(44,'Ca sĩ A ra mắt album mới','Album mới của ca sĩ A đang gây sốt...',3,3,'published','2025-03-29 02:16:35','2025-03-29 02:16:35','2025-03-29 02:36:16','/uploads/46.jpg'),(45,'Sao B bất ngờ kết hôn','Thông tin nóng nhất làng giải trí hôm nay...',4,3,'published','2025-03-29 02:16:35','2025-03-29 02:16:35','2025-03-29 02:36:16','/uploads/47.jpg'),(46,'Lễ trao giải hoành tráng','Những khoảnh khắc ấn tượng tại lễ trao giải...',5,3,'published','2025-03-29 02:16:35','2025-03-29 02:16:35','2025-03-29 02:36:16','/uploads/48.jpg');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-29 18:42:51

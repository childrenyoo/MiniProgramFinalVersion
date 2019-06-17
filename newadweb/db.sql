-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: localhost    Database: adweb_project
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chatbox_msg`
--

DROP TABLE IF EXISTS `chatbox_msg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `chatbox_msg` (
  `chatbox_id` varchar(100) NOT NULL,
  `uuid` int(11) NOT NULL,
  PRIMARY KEY (`chatbox_id`,`uuid`),
  KEY `uuid` (`uuid`),
  CONSTRAINT `chatbox_msg_ibfk_1` FOREIGN KEY (`uuid`) REFERENCES `message` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chatbox_msg`
--

LOCK TABLES `chatbox_msg` WRITE;
/*!40000 ALTER TABLE `chatbox_msg` DISABLE KEYS */;
INSERT INTO `chatbox_msg` VALUES ('ip',1),('ip',2),('ip',3),('ip',4),('tcp',5),('tcp',6),('tcp',7),('mac',8),('mac',9),('interpreter',10),('interpreter',11),('interpreter',12),('interpreter',13),('interpreter',14),('assembler',15),('assembler',16),('assembler',17),('assembler',18),('linker',19),('linker',20),('linker',21),('linker',22),('loader',23),('loader',24),('loader',25),('loader',26),('vector',27),('vector',28),('vector',29),('vector',30),('vector',31),('vector',32),('vector',33),('linearmapping',34),('linearmapping',35),('linearmapping',36),('linearmapping',37),('linearmapping',38),('function',39),('function',40),('function',41),('function',42),('function',43),('function',44),('function',45),('matrix',46),('matrix',47),('matrix',48),('matrix',49),('web2.0',50),('web2.0',51),('web2.0',52),('web2.0',53),('web2.0',54),('web2.0',55),('webcloud',56),('webcloud',57),('webcloud',58),('webcloud',59),('webcloud',60),('angular',61),('angular',62),('angular',63),('angular',64),('angular',65),('spring',66),('spring',67),('spring',68),('spring',69),('spring',70),('cprobability',71),('cprobability',72),('cprobability',73),('cprobability',74),('cprobability',75),('randdistribution',76),('randdistribution',77),('randdistribution',78),('randdistribution',79),('randdistribution',80),('expect_variance',81),('expect_variance',82),('expect_variance',83),('expect_variance',84),('expect_variance',85),('paramEstimation',86),('paramEstimation',87),('paramEstimation',88),('paramEstimation',89),('meaningAndType',90),('meaningAndType',91),('meaningAndType',92),('meaningAndType',93),('meaningAndType',94),('meaningAndType',95),('crawlswimming',96),('crawlswimming',97),('crawlswimming',98),('crawlswimming',99),('crawlswimming',100),('crawlswimming',101),('teachingAndApplication',102),('teachingAndApplication',103),('teachingAndApplication',104),('teachingAndApplication',105),('teachingAndApplication',106),('teachingAndApplication',107),('breaststroke',108),('breaststroke',109),('breaststroke',110),('breaststroke',111),('breaststroke',112),('breaststroke',113),('storagePrinciple',114),('storagePrinciple',115),('storagePrinciple',116),('storagePrinciple',117),('storagePrinciple',118),('storagePrinciple',119),('cpuManagement',120),('cpuManagement',121),('cpuManagement',122),('cpuManagement',123),('cpuManagement',124),('cpuManagement',125),('deviceManagement',126),('deviceManagement',127),('deviceManagement',128),('deviceManagement',129),('deviceManagement',130),('deviceManagement',131),('fileManagement',132),('fileManagement',133),('fileManagement',134),('fileManagement',135),('fileManagement',136),('fileManagement',137),('userInterface',138),('userInterface',139),('userInterface',140),('userInterface',141),('userInterface',142),('userInterface',143);
/*!40000 ALTER TABLE `chatbox_msg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contents`
--

DROP TABLE IF EXISTS `contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `contents` (
  `content_id` varchar(100) NOT NULL,
  `id` int(11) NOT NULL,
  `text` varchar(100) NOT NULL,
  `chatbox_id` varchar(100) NOT NULL,
  PRIMARY KEY (`content_id`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contents`
--

LOCK TABLES `contents` WRITE;
/*!40000 ALTER TABLE `contents` DISABLE KEYS */;
INSERT INTO `contents` VALUES ('adwancedweb',1,'WEB2.0','web2.0'),('adwancedweb',2,'web云计算','webcloud'),('adwancedweb',3,'web前端框架','angular'),('adwancedweb',4,'web后端框架','spring'),('compile',1,'解释程序','interpreter'),('compile',2,'汇编程序','assembler'),('compile',3,'连接程序','linker'),('compile',4,'装入程序','loader'),('linearalgebra',1,'向量','vector'),('linearalgebra',2,'线性变换','linearmapping'),('linearalgebra',3,'函数','function'),('linearalgebra',4,'矩阵','matrix'),('network',1,'IP地址','ip'),('network',2,'MAC地址','mac'),('network',3,'TCP','tcp'),('operatingsystem',1,'存储原理','storagePrinciple'),('operatingsystem',2,'处理器管理','cpuManagement'),('operatingsystem',3,'设备管理','deviceManagement'),('operatingsystem',4,'文件管理','fileManagement'),('operatingsystem',5,'用户接口','userInterface'),('probability',1,'条件概率','cprobability'),('probability',2,'随机变量分布','randdistribution'),('probability',3,'期望和方差','expect_variance'),('probability',4,'参数估计','paramEstimation'),('swimming',1,'游泳的意义和分类','meaningAndType'),('swimming',2,'爬泳技术','crawlswimming'),('swimming',3,'游泳教学原则与应用','teachingAndApplication'),('swimming',4,'蛙泳技术','breaststroke');
/*!40000 ALTER TABLE `contents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `course` (
  `course_id` int(11) NOT NULL AUTO_INCREMENT,
  `course_name` varchar(100) NOT NULL,
  `content_id` varchar(100) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  PRIMARY KEY (`course_id`),
  KEY `teacher_id` (`teacher_id`),
  CONSTRAINT `course_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,'计算机网络','network',1),(2,'编译原理','compile',1),(3,'线性代数','linearalgebra',2),(4,'高级web','adwancedweb',2),(5,'概率论','probability',2),(6,'游泳课','swimming',3),(7,'操作系统','operatingsystem',3),(8,'计算机图形学','computergraphics',3);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `message` (
  `uuid` int(11) NOT NULL,
  `text` varchar(100) DEFAULT NULL,
  `image_url` varchar(100) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (1,'IP地址是指互联网协议地址','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(2,'IP地址是IP协议提供的一种统一的地址格式','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(3,'英文意思是“网络之间互连的协议','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(4,'为什么IP协议叫做因特网协议','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(5,'TCP是一种面向连接的、可靠的、基于字节流的传输层通信协议','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(6,'在简化的计算机网络OSI模型中，它完成第四层传输层所指定的功能','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(7,'TCP位于IP层之下吗？','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(8,'MAC地址直译为媒体访问控制地址，也称为局域网地址','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(9,'OSI模型中MAC地址在哪一层？','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(10,'解释程序是如同编译器的一种语言翻译程序','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(11,'解释程序与编译器的不同在哪里？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(12,'解释器立即执行源程序而不是生成在翻译后才执行的目标代码','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(13,'解释程序经常用于教育和软件的开发','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(14,'解释器的执行速度快吗?','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(15,'汇编程序是用于特定计算机上的汇编语言的翻译程序','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(16,'汇编语言是计算机的机器语言的符号形式，它极易翻译','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(17,'编译器会生成汇编语言以作为其目标语言','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(18,'汇编语言可以被翻译成目标代码吗','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(19,'编译器和汇编程序都经常依赖于连接程序','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(20,'目标代码和可执行的机器代码有什么区别','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(21,'分别在不同的目标文件中编译或汇编的代码收集到一个可直接执行的文件中','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(22,'连接过程对操作系统和处理器有依赖性吗？','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(23,'编译器、汇编程序或连接程序生成的代码经常还不完全适用或不能执行','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(24,'它们的主要存储器访问却可以在存储器的任何位置中且与一个不确定的起始位置相关','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(25,'装入程序可处理所有的与指定的基地址或起始地址有关的可重定位的地址','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(26,'什么是可重定位的代码？','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(27,'向量指具有大小和方向的量','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(28,'它可以形象化地表示为带箭头的线段','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(29,'箭头具体表示什么？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(30,'箭头所指代表向量的方向','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(31,'线段长度代表向量的大小','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(32,'许多物理量都是向量','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(33,'请举一些物理量的例子？','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(34,'在两个向量空间（包括由函数构成的抽象的向量空间）之间的一种保持向量加法和标量乘法的特殊映射','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(35,'线性映射从抽象代数角度看是向量空间的同态','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(36,'什么是自同态？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(37,'从向量空间A内的向量映射到同一空间叫做自同态','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(38,'恒等映射和零映射是线性的吗？','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(39,'函数中有三要素：定义域值域和对应法则','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(40,'变化过程中有些量可以不变吗？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(41,'有些数值是不随变量而改变的称它们为常量','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(42,'自变量是自身发生变化的变量','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(43,'什么是因变量？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(44,'因变量是随着自变量的变化而变化的量','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(45,'什么是函数值？','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(46,'矩阵是一个按照长方阵列排列的复数或实数集合','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(47,'矩阵在物理中有什么应用？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(48,'矩阵于电路学、力学、光学和量子物理中都有应用','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(49,'矩阵在计算机科学中有什么应用？','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(50,'web2.0可以被分为两个不同的部分','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(51,'其一是大量丰富的交互式体验','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(52,'其二则是它的社会化属性','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(53,'web2.0有什么特质','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(54,'web2.0的特质有：大规模互联、去中心化、以用户为中心、开放、轻量级等等','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(55,'请回答什么是六度关系理论','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(56,'什么是云计算？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(57,'云计算是一种商业计算模型','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(58,'它将计算任务分布在大量计算机构成的资源池上','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(59,'使用各种应用系统能够均具需要获取计算力、存储空间和信息服务','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(60,'请回答回答云计算的种类','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(61,'angular默认使用typescript','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(62,'angular支持ES5、ES6和Dart','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(63,'angualr的主要部分是什么','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(64,'angular的主要部分是模块和组件','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(65,'请回答什么是依赖注入','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(66,'spring是一个轻量级应用程序框架','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(67,'spring的核心是什么','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(68,'spring的核心是一个IOC容器和AOP实现','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(69,'springIOC的核心组件是什么','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(70,'这个你自己去学，作为课后作业','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(71,'条件概率是指事件A在另一个事件B已经发生条件下的发生概率','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(72,'条件概率可以用决策树进行计算','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(73,'条件概率的公式是什么','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(74,'P(A|B)=P(AB)/P(B)','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(75,'请课后学习联合概率和边缘概率','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(76,'随机变量分布分为离散型和连续型','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(77,'离散型随机变量分布有哪些','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(78,'0-1分布、二项分布、泊松分布、几何分布、超几何分布','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(79,'那连续型随机分布有哪些呢','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(80,'作为课后作业自学','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(81,'老师什么是期望和方差','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(82,'期望的数学定义是实验中可能的结果的概率乘以其结果的总合','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(83,'方差表示的是一组数据之间的分散程度','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(84,'离散型随机变量的方差计算公式是D(X)=E((X−E(X))^2)=E(X2)−(E(X))^2 ','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(85,'请学习方差的其他相关公式','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(86,'参数估计是根据从总体中抽取的随机样本来估计总体分布中未知参数的过程','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(87,'参数估计是解决什么问题的？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(88,'（1）求出未知参数的估计量；（2）在一定信度（可靠程度）下指出所求的估计量的精度','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(89,'请回答参数估计有哪些分类','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(90,'游泳可以改善心血管系统，改善呼吸系统','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(91,'游泳还有什么作用呢？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(92,'游泳可以改善肌肉系统的机能，塑造健美的体型','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(93,'游泳还有什么其他好处？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(94,'游泳可以磨练意志，培训品质，促进心理和智能发展','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(95,'请思考游泳还有什么好处呢？','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(96,'游爬泳时，人在水中成俯卧姿势，两腿交替上下打水，两臂轮流划水，动作很像爬行，所以人们称之为“爬泳”','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(97,'爬泳的身体姿势是什么？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(98,'头部应自然稍抬，两眼注视前下方，头的三分之一露出水面，水平面接近发际，双腿处于最低点','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(99,'简述爬泳的身体姿势要求？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(100,'身体伸展并保持流线型;身体在水中的位置高且平直;身体围绕纵轴有节奏地转动。','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(101,'爬泳的两臂的划水的配合有哪几种方式','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(102,'在教学过程中要消除一切不安全的隐患，始终要保证学员的安全。','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(103,'循序渐进原则是什么？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(104,'教学中根据学员认识活动的特点,人体机能和动作形成的规律,正确的安排教学内容','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(105,'游泳教学中的直观性原则是什么？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(106,'是指教学中充分利用学员的各种感官和已有经验,通过各种形式的感知,丰富学员的感性','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(107,'简述游泳教学中由陆地到水的原则','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(108,'两膝之间太宽,大腿收的多,小腿收的少,往往形成脚掌对水的动作(平收腿)','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(109,'简述蛙泳手部技术动作要点？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(110,'内划，外划，前伸','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(111,'对于游泳初学者来说,做蛙泳多腿少呼吸的配合练习有什么好处？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(112,'对于初学才开始时的呼吸动作还不熟练,在一个蛙泳腿的动作周期内还不能把气差不多','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(113,'简述蛙泳平收腿的特征','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(114,'管理目标：提高利用率，方便用户使用，提供足够的存储空间','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(115,'存储分配与回收目的？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(116,'为进程分配存储空间','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(117,'存储保护的目的？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(118,'防止进程间相互干扰，相互保密，如：访问合法性检查','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(119,'地址映射是什么？','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(120,'在多道程序环境下，处理器的分配和运行都是以进程为基本单位','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(121,'进程调度是什么？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(122,'为进程分配处理器，以充分利用处理器资源和提高系统性能','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(123,'进程控制是什么？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(124,'创建，撤销，挂起，封锁进程','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(125,'进程同步是什么','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(126,'任务是分配与回收设备，驱动设备，响应I/O请求','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(127,'缓冲管理是什么','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(128,'解决cpu与I/O速度不匹配，提高两者的利用率，缓冲机制：单缓冲，双缓存，缓冲池','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(129,'设备分配与回收？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(130,'根据用户的I/O请求和相应的分配策略，为该用户分配外设以及通道，控制器等','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(131,'设备独立性是什么？','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(132,'解决软件资源的存储，共享，保密和保护','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(133,'文件存储空间管理？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(134,'分配，回收文件空间，解决如何存放信息，以提高空间利用率和读写性能','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(135,'目录管理？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(136,'解决信息检索问题。实现文件按名字读取，共享与保护','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(137,'文件读写和存取控制？','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(138,'目标是提供一个友好的用户访问操作系统的接口。','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(139,'命令接口是？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(140,'键盘命令：供用户用于组织和控制自己的作业运行','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(141,'程序接口是？','http://localhost:5300/assets/images/user-avatar/0592cfaa-6af7-11e9-a923-1681be663d3e/spider-man.jpg','student'),(142,'系统调用：供用户程序和系统程序调用操作系统功能','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher'),(143,'图形接口是什么？','http://localhost:5300/assets/images/user-avatar/0592cae6-6af7-11e9-a923-1681be663d3e/iron-man.jpg','teacher');
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `student` (
  `student_id` varchar(11) NOT NULL,
  `student_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `sex` int(1) NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('16302010001','student1','student1@fudan.edu.cn','123456',0),('16302010002','student2','student2@fudan.edu.cn','123456',0),('16302010003','student3','student3@fudan.edu.cn','123456',1),('16302010004','student4','student4@fudan.edu.cn','123456',1);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_course`
--

DROP TABLE IF EXISTS `student_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `student_course` (
  `student_id` varchar(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `progress` double DEFAULT NULL,
  `do_homework` int(1) DEFAULT NULL,
  PRIMARY KEY (`student_id`,`course_id`,`id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `student_course_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`),
  CONSTRAINT `student_course_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_course`
--

LOCK TABLES `student_course` WRITE;
/*!40000 ALTER TABLE `student_course` DISABLE KEYS */;
INSERT INTO `student_course` VALUES ('16302010001',1,1,30,0),('16302010001',1,2,50,0),('16302010001',1,3,70,0),('16302010001',2,1,50,0),('16302010001',2,2,0,0),('16302010001',2,3,0,0),('16302010001',2,4,0,0),('16302010001',3,1,0,0),('16302010001',3,2,100,1),('16302010001',3,3,100,1),('16302010001',3,4,0,0),('16302010001',6,1,0,0),('16302010001',6,2,0,0),('16302010001',6,3,0,0),('16302010001',6,4,0,0),('16302010001',7,1,0,0),('16302010001',7,2,0,0),('16302010001',7,3,0,0),('16302010001',7,4,0,0),('16302010001',7,5,0,0),('16302010002',1,1,0,0),('16302010002',1,2,0,0),('16302010002',1,3,0,0);
/*!40000 ALTER TABLE `student_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `teacher` (
  `teacher_id` int(11) NOT NULL AUTO_INCREMENT,
  `teacher_name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES (1,'teacher1','123456'),(2,'teacher2','123456'),(3,'teacher3','123456');
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-29 23:21:57

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2023 at 07:43 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo_list`
--

-- --------------------------------------------------------

--
-- Table structure for table `todo_tbl`
--

CREATE TABLE `todo_tbl` (
  `item_id` int(11) NOT NULL,
  `todo` varchar(45) NOT NULL,
  `start_date` varchar(45) NOT NULL,
  `due_date` varchar(45) NOT NULL,
  `status` enum('ended','ongoing','expired') NOT NULL DEFAULT 'ongoing',
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `todo_tbl`
--

INSERT INTO `todo_tbl` (`item_id`, `todo`, `start_date`, `due_date`, `status`, `created_at`) VALUES
(1, 'Do something! Today', '2023-05-31', '2023-05-31', 'ongoing', '2023-05-31 05:42:58.814548');

-- --------------------------------------------------------

--
-- Stand-in structure for view `todo_view`
-- (See below for the actual view)
--
CREATE TABLE `todo_view` (
`item_id` int(11)
,`todo` varchar(45)
,`dateStarted` varchar(10)
,`dateDue` varchar(10)
,`status` enum('ended','ongoing','expired')
);

-- --------------------------------------------------------

--
-- Structure for view `todo_view`
--
DROP TABLE IF EXISTS `todo_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `todo_view`  AS SELECT `todo_tbl`.`item_id` AS `item_id`, `todo_tbl`.`todo` AS `todo`, date_format(`todo_tbl`.`start_date`,'%Y-%d-%m') AS `dateStarted`, date_format(`todo_tbl`.`due_date`,'%Y-%d-%m') AS `dateDue`, `todo_tbl`.`status` AS `status` FROM `todo_tbl``todo_tbl`  ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todo_tbl`
--
ALTER TABLE `todo_tbl`
  ADD PRIMARY KEY (`item_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todo_tbl`
--
ALTER TABLE `todo_tbl`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

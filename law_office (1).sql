-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Jun 2023 pada 11.26
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `law_office`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `form_permohonan`
--

CREATE TABLE `form_permohonan` (
  `id` int(11) NOT NULL,
  `alamat_email` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `form_permohonan`
--

INSERT INTO `form_permohonan` (`id`, `alamat_email`, `nama`, `file`) VALUES
(1, 'dimasisyasaputra@gmail.com', 'Dimas Isya', 'google.drive.com');

-- --------------------------------------------------------

--
-- Struktur dari tabel `log_client`
--

CREATE TABLE `log_client` (
  `id` int(11) NOT NULL,
  `status` enum('DITERIMA','DITOLAK','PROSES') NOT NULL,
  `namaKasus` varchar(255) DEFAULT NULL,
  `namaClient` varchar(255) DEFAULT NULL,
  `namaPegawai` varchar(255) DEFAULT NULL,
  `statusDeskripsi` varchar(255) DEFAULT NULL,
  `FormPermohonanId` int(11) DEFAULT NULL,
  `ProfilePegawaiId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `log_client`
--

INSERT INTO `log_client` (`id`, `status`, `namaKasus`, `namaClient`, `namaPegawai`, `statusDeskripsi`, `FormPermohonanId`, `ProfilePegawaiId`) VALUES
(1, 'DITERIMA', 'Pembunuhan', 'Dimas Isya', 'Sayang Sani', NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `meeting_client`
--

CREATE TABLE `meeting_client` (
  `id` int(11) NOT NULL,
  `tanggal` varchar(255) NOT NULL,
  `nama_client` varchar(255) NOT NULL,
  `FormPermohonanId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `meeting_kantor`
--

CREATE TABLE `meeting_kantor` (
  `id` int(11) NOT NULL,
  `tanggal` varchar(255) NOT NULL,
  `ProfilePegawaiId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `persidangan`
--

CREATE TABLE `persidangan` (
  `id` int(11) NOT NULL,
  `tanggal` varchar(255) NOT NULL,
  `nama_client` varchar(255) NOT NULL,
  `FormPermohonanId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `profile_pegawai`
--

CREATE TABLE `profile_pegawai` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `posisi` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `no_hp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `profile_pegawai`
--

INSERT INTO `profile_pegawai` (`id`, `nama`, `posisi`, `alamat`, `no_hp`) VALUES
(1, 'Sayang Sani', 'Wakil Kepala', 'Bangka', '08823457167');

-- --------------------------------------------------------

--
-- Struktur dari tabel `super_user`
--

CREATE TABLE `super_user` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `super_user`
--

INSERT INTO `super_user` (`username`, `password`) VALUES
('admin', 'admin');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'user', 'user');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `form_permohonan`
--
ALTER TABLE `form_permohonan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `log_client`
--
ALTER TABLE `log_client`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FormPermohonanId` (`FormPermohonanId`),
  ADD KEY `ProfilePegawaiId` (`ProfilePegawaiId`);

--
-- Indeks untuk tabel `meeting_client`
--
ALTER TABLE `meeting_client`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FormPermohonanId` (`FormPermohonanId`);

--
-- Indeks untuk tabel `meeting_kantor`
--
ALTER TABLE `meeting_kantor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ProfilePegawaiId` (`ProfilePegawaiId`);

--
-- Indeks untuk tabel `persidangan`
--
ALTER TABLE `persidangan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FormPermohonanId` (`FormPermohonanId`);

--
-- Indeks untuk tabel `profile_pegawai`
--
ALTER TABLE `profile_pegawai`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `super_user`
--
ALTER TABLE `super_user`
  ADD PRIMARY KEY (`username`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `form_permohonan`
--
ALTER TABLE `form_permohonan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `log_client`
--
ALTER TABLE `log_client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `meeting_client`
--
ALTER TABLE `meeting_client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `meeting_kantor`
--
ALTER TABLE `meeting_kantor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `persidangan`
--
ALTER TABLE `persidangan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `profile_pegawai`
--
ALTER TABLE `profile_pegawai`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `log_client`
--
ALTER TABLE `log_client`
  ADD CONSTRAINT `log_client_ibfk_1` FOREIGN KEY (`FormPermohonanId`) REFERENCES `form_permohonan` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `log_client_ibfk_2` FOREIGN KEY (`ProfilePegawaiId`) REFERENCES `profile_pegawai` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `meeting_client`
--
ALTER TABLE `meeting_client`
  ADD CONSTRAINT `meeting_client_ibfk_1` FOREIGN KEY (`FormPermohonanId`) REFERENCES `form_permohonan` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `meeting_kantor`
--
ALTER TABLE `meeting_kantor`
  ADD CONSTRAINT `meeting_kantor_ibfk_1` FOREIGN KEY (`ProfilePegawaiId`) REFERENCES `profile_pegawai` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `persidangan`
--
ALTER TABLE `persidangan`
  ADD CONSTRAINT `persidangan_ibfk_1` FOREIGN KEY (`FormPermohonanId`) REFERENCES `form_permohonan` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

# Panduan Fitur Monitoring Sistem Sekolah

## Overview
Fitur Monitoring mencatat semua aktivitas pengguna di sistem termasuk pembuatan, pembaruan, dan penghapusan data di semua modul.

## Fitur-Fitur

### 1. Activity Log dengan Filter
- **Filter by Type**: Pilih jenis log (Student, Teacher, Class, Subject, Score, Applicant, Attendance, User, Profile, Delete, System)
- **Search**: Cari pesan log dengan kata kunci
- **Total Log**: Menampilkan jumlah total log yang tersimpan (max 200 log terbaru)

### 2. Metrik Sistem
- **Total Log**: Jumlah log yang tersimpan
- **Aksi Terakhir**: Waktu aksi terakhir yang tercatat
- **Pendaftar**: Jumlah calon pendaftar
- **Siswa**: Jumlah siswa terdaftar

### 3. Detail Log Modal
Klik tombol "Detail" pada setiap entri log untuk membuka modal yang menampilkan:
- Tipe log
- Waktu log
- ID log
- Pesan lengkap
- Tombol **Salin Pesan**: Menyalin pesan ke clipboard
- Tombol **Download Log Ini**: Mengunduh log individual dalam format JSON

### 4. Download Logs
- **Download Logs**: Tombol untuk mengunduh semua log yang sudah difilter (atau semua jika tidak ada filter)
- Format: JSON
- Filename: `logs-[date].json`

## Modul yang Tercatat

### Akademik
- ✓ Tambah Siswa
- ✓ Hapus Siswa
- ✓ Tambah Guru
- ✓ Hapus Guru
- ✓ Tambah Kelas
- ✓ Hapus Kelas

### Penilaian
- ✓ Tambah Mata Pelajaran
- ✓ Hapus Mata Pelajaran
- ✓ Tambah Nilai
- ✓ Hapus Nilai

### PPDB
- ✓ Pendaftar Baru
- ✓ Terima Pendaftar
- ✓ Tolak Pendaftar
- ✓ Hapus Pendaftar

### Absensi
- ✓ Input Absensi

### Pengaturan
- ✓ Update Profil Sekolah
- ✓ Tambah User
- ✓ Hapus User
- ✓ Backup Data

### Sistem
- ✓ Download Logs

## Penyimpanan Data
- Logs disimpan di localStorage dengan key `schoolLogs`
- Maksimum 200 log terbaru disimpan
- Log otomatis ditambahhkan saat ada aksi

## Akses Monitoring
1. Buka aplikasi dashboard sekolah
2. Klik menu "Monitoring" di sidebar
3. Gunakan filter dan search untuk melihat log spesifik
4. Klik "Detail" untuk melihat informasi lengkap
5. Gunakan "Download Logs" untuk ekspor data

## Format Data Log
```json
{
  "id": "log-[timestamp]-[random]",
  "type": "student|teacher|class|subject|score|applicant|attendance|user|profile|delete|system",
  "message": "Deskripsi aksi",
  "at": "2026-06-13T10:30:45.123Z"
}
```

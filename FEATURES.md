# Dokumentasi Lengkap Fitur Aplikasi Sekolah

## Ringkasan Aplikasi
Aplikasi Sekolah adalah sistem manajemen sekolah berbasis web yang membantu mengelola data akademik, penilaian, pendaftaran siswa baru (PPDB), absensi, laporan, dan monitoring aktivitas sistem.

## Modul-Modul Aplikasi

### 1. 📊 Dashboard
Dashboard utama menampilkan ringkasan data sekolah:
- **Metrics**: Jumlah siswa, guru, kelas, mata pelajaran
- **Panel Cards**: Jumlah pendaftar PPDB, ranking siswa, rekap absensi
- **Info Sekolah**: Profil singkat dan fitur utama
- **Auto-update**: Metrics terupdate otomatis saat ada perubahan data

### 2. 📚 Akademik
Kelola data siswa, guru, dan kelas:

#### Siswa
- Form untuk tambah siswa baru (Nama, Kelas, Program Studi, Asal Sekolah)
- Tabel list siswa dengan fitur:
  - Search/filter siswa
  - Hapus siswa (catat log)
  - Pagination (auto)

#### Guru
- Form untuk tambah guru (Nama, Mata Pelajaran)
- Tabel list guru dengan opsi hapus

#### Kelas
- Form untuk tambah kelas (Nama Kelas)
- Tabel list kelas dengan opsi hapus

### 3. 📝 Penilaian
Kelola mata pelajaran, nilai, dan ranking:

#### Mata Pelajaran
- Form tambah mata pelajaran
- Tabel list mata pelajaran

#### Nilai
- Form input nilai (Pilih Siswa, Mata Pelajaran, Nilai)
- Tabel list nilai dengan opsi hapus
- Nilai otomatis tervalidasi (0-100)

#### Ranking Siswa
- Tabel ranking otomatis berdasarkan rata-rata nilai
- Update real-time saat ada input nilai baru

### 4. 👨‍🎓 PPDB (Penerimaan Peserta Didik Baru)
Kelola pendaftaran calon siswa:

#### Form Pendaftaran
Form lengkap dengan 11 field:
- NISN (Nomor Induk Siswa Nasional)
- Nama Calon Siswa
- Email
- Tempat Lahir
- Tanggal Lahir
- Jenis Kelamin
- Agama
- Asal Sekolah
- Nama Orang Tua/Wali
- Telepon
- Status (otomatis: Menunggu)

#### Manajemen Pendaftar
- Tabel list semua pendaftar dengan 13 kolom
- Filter/status: Semua, Diterima, Ditolak, Menunggu
- Tombol aksi:
  - **Terima**: Ubah status menjadi "Diterima"
  - **Tolak**: Ubah status menjadi "Ditolak"
  - **Hapus**: Hapus pendaftar

### 5. 📅 Absensi
Catat kehadiran siswa:

#### Form Absensi
- Pilih Siswa dari dropdown
- Tanggal (otomatis hari ini)
- Status: Hadir, Sakit, Izin, Alfa
- Simpan otomatis ke database

#### Rekap Absensi
- Tabel list seluruh absensi
- Grouped by tanggal dan siswa
- Status badge dengan warna berbeda

### 6. 📋 Laporan (BARU!)
Lihat ringkasan data dan ekspor ke CSV:

#### Laporan Siswa
- Tabel list semua siswa dengan kolom: No, Nama, Kelas, Program Studi
- Tombol **Export CSV** untuk download data

#### Laporan Nilai
- Tabel list semua nilai dengan kolom: No, Siswa, Mata Pelajaran, Nilai
- Tombol **Export CSV**

#### Laporan PPDB
- Tabel list pendaftar dengan kolom: No, Nama, Email, NISN, Status
- Status badge dengan warna: Hijau (Diterima), Merah (Ditolak), Kuning (Menunggu)
- Tombol **Export CSV**

#### Laporan Absensi
- Tabel list absensi dengan kolom: No, Siswa, Tanggal, Status
- Status badge dengan warna berbeda
- Tombol **Export CSV**

#### Export Functionality
- Format: CSV (Comma-Separated Values)
- Filename otomatis: `laporan-[tipe]-[tanggal].csv`
- Compatible dengan Excel/Google Sheets

### 7. 📊 Monitoring & Logging
Track semua aktivitas sistem:

#### Activity Log
- Catat otomatis setiap aksi: Create, Read, Update, Delete
- Simpan maksimal 200 log terbaru
- Setiap log berisi: Type, Message, Timestamp

#### Fitur Filtering & Search
- **Filter by Type**: 11 tipe log
  - student, teacher, class, subject
  - score, applicant, attendance
  - user, profile, delete, system
- **Search by Text**: Cari pesan log dengan kata kunci

#### Metrics Display
- Total Log: Jumlah log yang tersimpan
- Aksi Terakhir: Waktu log terakhir
- Pendaftar: Jumlah calon pendaftar
- Siswa: Jumlah siswa terdaftar

#### Log Detail Modal
Klik tombol **Detail** pada setiap log untuk:
- Lihat informasi lengkap: Type, Time, ID, Message
- **Salin Pesan**: Copy ke clipboard
- **Download Log Ini**: Download single log sebagai JSON

#### Download Functionality
- **Download Logs**: Download semua log (atau yang difilter) sebagai JSON
- Filename: `logs-[tanggal].json`
- Compatible dengan text editor & JSON viewer

### 8. ⚙️ Pengaturan
Konfigurasi sistem:

#### Profil Sekolah
- Edit nama sekolah
- Edit alamat
- Edit email
- Edit telepon
- Simpan otomatis ke database

#### User Management
- Tambah user baru (Username, Role)
- Role: Administrator, Operator, Guru
- Tabel list user dengan opsi hapus

#### Backup & Restore
- Tombol **Unduh Backup**: Download semua data sebagai JSON
- Backup berisi: Students, Teachers, Classes, Subjects, Scores, Applicants, Attendance, Users, Profile, Logs
- Filename: `backup-[tanggal].json`
- Manual restore dengan import file (jika butuh)

## Data Persistence

### localStorage
Aplikasi menggunakan browser's localStorage untuk menyimpan data:
- Automatic save setiap ada perubahan
- Data bertahan meski browser ditutup
- Cocok untuk demo/development

### Keys yang Digunakan
```
schoolStudents      - Data siswa
schoolTeachers      - Data guru
schoolClasses       - Data kelas
schoolSubjects      - Data mata pelajaran
schoolScores        - Data nilai
schoolApplicants    - Data pendaftar
schoolAttendance    - Data absensi
schoolUsers         - Data user
schoolProfile       - Data profil sekolah
schoolLogs          - Activity log (max 200 entries)
```

## Fitur Global

### Navigation
- Sidebar dengan 8 menu: Dashboard, Akademik, Penilaian, PPDB, Absensi, Laporan, Monitoring, Pengaturan
- Click untuk switch antar modul
- Active menu highlight

### Header
- Topbar dengan judul dan welcome message
- Tombol **Backup Data** untuk quick backup

### Default Data
Aplikasi dimulai dengan sample data:
- 3 Siswa contoh
- 4 Guru contoh
- 3 Kelas contoh
- 3 Mata Pelajaran contoh
- 2 Nilai contoh
- 2 Pendaftar contoh
- 2 Absensi contoh
- 2 User contoh (admin, operator)

## Logging System

### Otomatis Dicatat
- ✅ Tambah/Hapus: Siswa, Guru, Kelas, Mata Pelajaran, Nilai, Pendaftar, User
- ✅ Status Perubahan: Terima/Tolak Pendaftar
- ✅ Update Data: Profil Sekolah
- ✅ Input Absensi
- ✅ Download/Backup
- ✅ Laporan Export

### Info Setiap Log
- Tipe aksi (student, teacher, class, dll)
- Pesan deskriptif (apa yang dilakukan + detail)
- Timestamp akurat (ISO format)
- Unique ID untuk setiap log

## Export Formats

### CSV (Laporan)
- Format: Comma-Separated Values
- Header: Nama kolom otomatis
- Compatible dengan: Excel, Google Sheets, LibreOffice
- Filename: `laporan-[tipe]-[tanggal].csv`

### JSON (Logs & Backup)
- Format: JSON valid
- Human-readable dengan indentation
- Filename: `logs-[tanggal].json` atau `backup-[tanggal].json`
- Bisa import kembali untuk restore

## Tips Penggunaan

### 1. Setup Awal
1. Buka aplikasi di browser
2. Data sample otomatis dimuat
3. Edit profil sekolah di menu Pengaturan
4. Tambahkan user tambahan jika diperlukan

### 2. Input Data
- Semua form validation built-in
- Required fields harus diisi
- Email harus format email valid
- Tanggal format: YYYY-MM-DD

### 3. Monitoring Aktivitas
- Rutin cek menu Monitoring untuk aktivitas sistem
- Filter berdasarkan tipe aksi
- Download log untuk arsip/audit

### 4. Backup Data
- Lakukan backup rutin (manual download)
- Simpan di tempat aman
- Sebelum update/perubahan major

### 5. Export Laporan
- Gunakan untuk kebutuhan reporting
- Export ke CSV untuk presentasi/analisis
- Share file dengan stakeholder

## Troubleshooting

### Data Hilang?
- Cek localStorage (DevTools > Application > localStorage)
- Restore dari file backup

### Form Tidak Submit?
- Pastikan semua field required sudah diisi
- Validasi input (email, number, date format)

### Export Tidak Jalan?
- Cek browser permission untuk download
- Pastikan data sudah ada (not empty)

### Metrics Tidak Update?
- Refresh page (F5)
- Metrics update otomatis saat ada aksi

## Kompatibilitas

- **Browser**: Chrome, Firefox, Safari, Edge (semua modern browsers)
- **Devices**: Desktop, Tablet, Mobile (responsive design)
- **Storage**: Local storage (50MB limit per domain)
- **JS Version**: ES6+ compatible

## Roadmap Fitur

Fitur potensial di masa depan:
- User authentication & login
- Multi-school support
- Database backend (MongoDB/MySQL)
- Mobile app (React Native)
- Real-time sync
- API endpoints
- Advanced reporting dengan charts
- Attendance pattern analysis
- Academic performance tracking
- Parent/Student portal

---

**Versi**: 1.0  
**Updated**: 2026-06-13  
**Support**: Hubungi administrator sekolah

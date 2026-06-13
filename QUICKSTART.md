# Quick Start Guide - Aplikasi Sekolah

## 🚀 Mulai Cepat

### 1. Buka Aplikasi
Buka file `index.html` di browser favorit Anda.

### 2. Explore Dashboard
- Lihat metrics ringkasan di halaman utama
- Semua data sudah ada (sample data)
- Panel cards menampilkan PPDB, Ranking, Absensi

### 3. Navigasi Menu
Gunakan sidebar untuk berpindah antar modul:
- **Dashboard** - Ringkasan overview
- **Akademik** - Siswa, Guru, Kelas
- **Penilaian** - Nilai, Mata Pelajaran, Ranking
- **PPDB** - Manajemen pendaftar
- **Absensi** - Catat kehadiran
- **Laporan** - Export data ke CSV
- **Monitoring** - Track aktivitas & log
- **Pengaturan** - Config sekolah, user, backup

## 📌 Workflow Umum

### Menambah Siswa Baru
1. Klik menu **Akademik**
2. Scroll ke section "Tambah Siswa"
3. Isi form (Nama, Kelas, Program Studi, Asal Sekolah)
4. Klik **Tambah Siswa**
5. Siswa muncul di table dan metrics terupdate
6. Log otomatis tercatat di Monitoring

### Input Nilai
1. Klik menu **Penilaian**
2. Scroll ke section "Tambah Nilai"
3. Pilih Siswa dan Mata Pelajaran
4. Masukkan nilai (0-100)
5. Klik **Tambah Nilai**
6. Ranking otomatis terupdate

### Kelola Pendaftar PPDB
1. Klik menu **PPDB**
2. Scroll ke tabel "Daftar Pendaftar"
3. Untuk action:
   - **Terima** - Ubah status jadi Diterima
   - **Tolak** - Ubah status jadi Ditolak
   - **Hapus** - Hapus pendaftar dari list
4. Metrics dan log terupdate otomatis

### Export Laporan
1. Klik menu **Laporan**
2. Pilih jenis laporan (Siswa/Nilai/PPDB/Absensi)
3. Klik **Export CSV** pada laporan yang diinginkan
4. File otomatis download dengan nama `laporan-[tipe]-[tanggal].csv`
5. Buka di Excel/Google Sheets

### Monitor Aktivitas
1. Klik menu **Monitoring**
2. Lihat list activity log
3. Gunakan filter dropdown untuk filter by type
4. Gunakan search box untuk cari pesan
5. Klik **Detail** untuk lihat info lengkap
6. Klik **Salin Pesan** untuk copy ke clipboard
7. Klik **Download Log Ini** untuk export single log
8. Klik **Download Logs** untuk export semua log (yang difilter)

### Backup Data
1. Klik **Backup Data** di tombol topbar, ATAU
2. Klik menu **Pengaturan** > Scroll ke Backup Database
3. Klik **Unduh Backup**
4. File `backup-[tanggal].json` otomatis download
5. Simpan di tempat aman untuk recovery

## ⚙️ Pengaturan Sistem

### Ubah Profil Sekolah
1. Klik menu **Pengaturan**
2. Di section "Profil Sekolah", isi:
   - Nama Sekolah
   - Alamat
   - Email
   - Telepon
3. Klik **Simpan Profil**

### Tambah User Baru
1. Di menu **Pengaturan**
2. Scroll ke section "User Management"
3. Isi Username dan Pilih Role
4. Klik **Tambah User**
5. User baru muncul di tabel

## 🔍 Fitur Pencarian & Filter

### Search Siswa
- Di menu **Akademik**
- Gunakan search box untuk filter siswa by nama
- Update real-time

### Filter Logs
- Di menu **Monitoring**
- Dropdown "Filter by Type": Pilih jenis log
- Input "Search": Cari pesan
- Combine keduanya untuk hasil lebih spesifik

## 💾 Data Storage

**Semua data disimpan di browser localStorage**
- Otomatis save setiap aksi
- Data bertahan meski browser ditutup
- Clear browser cache = data hilang
- **Backup rutin untuk safety!**

## 🎯 Best Practices

1. **Backup Rutin**
   - Lakukan backup setiap hari/minggu
   - Simpan di cloud/external drive

2. **Monitoring Reguler**
   - Cek Monitoring section setiap hari
   - Monitor aktivitas user (log tracking)

3. **Data Validation**
   - Pastikan data input benar sebelum simpan
   - Hindari duplikasi data

4. **User Management**
   - Tambahkan user sesuai kebutuhan
   - Assign role yang tepat

5. **Report Generation**
   - Export laporan untuk dokumentasi
   - Gunakan untuk evaluasi periodik

## ❓ FAQ

**Q: Data saya hilang setelah buka browser baru?**
A: Data disimpan di localStorage browser spesifik. Gunakan backup untuk restore di browser/device lain.

**Q: Bisa input nilai > 100?**
A: Form validation mencegah nilai invalid. Gunakan 0-100.

**Q: Bagaimana restore dari backup?**
A: Saat ini backup untuk manual review. Untuk restore, bisa melalui developer console (advanced).

**Q: Berapa limit siswa yang bisa disimpan?**
A: localStorage limit ~50MB per domain, cukup untuk ribuan record.

**Q: Export CSV support format apa?**
A: CSV (Comma-Separated Values) - compatible dengan Excel, Google Sheets, LibreOffice.

**Q: Bisa delete/reset semua data?**
A: Buka DevTools > Application > localStorage > Clear site data.

## 🆘 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Form tidak submit | Pastikan semua field required terisi, validasi format (email, date) |
| Metrics tidak update | Refresh page (F5) atau perform action lagi |
| Search tidak jalan | Periksa typo, gunakan keyword spesifik |
| Export download tidak jalan | Check browser permission, pastikan data ada |
| Data tidak tersimpan | Check localStorage quota, clear cache lalu refresh |

## 📱 Responsive Design

Aplikasi support berbagai ukuran layar:
- **Desktop** (1920x1080) ✅
- **Tablet** (768x1024) ✅
- **Mobile** (375x667) ✅

Sidebar bisa di-hide/toggle untuk mobile.

## 🎨 Interface

- **Modern Design**: Clean UI dengan card-based layout
- **Dark Text, Light Background**: Easy on eyes
- **Color-Coded Status**: Red (Ditolak), Green (Diterima), Yellow (Menunggu)
- **Responsive Tables**: Scrollable pada small screens
- **Accessible Forms**: Clear labels, helpful placeholders

---

**Butuh bantuan lebih?** Buka file `FEATURES.md` untuk dokumentasi lengkap.

const sections = document.querySelectorAll('.page-section');
const navButtons = document.querySelectorAll('.nav-button');
const studentTableBody = document.getElementById('studentTableBody');
const teacherTableBody = document.getElementById('teacherTableBody');
const announcementList = document.getElementById('announcementList');
const studentForm = document.getElementById('studentForm');
const teacherForm = document.getElementById('teacherForm');
const announcementForm = document.getElementById('announcementForm');
const studentSearch = document.getElementById('studentSearch');
const studentName = document.getElementById('studentName');
const studentClass = document.getElementById('studentClass');
const studentMajor = document.getElementById('studentMajor');
const teacherName = document.getElementById('teacherName');
const teacherSubject = document.getElementById('teacherSubject');
const announcementTitle = document.getElementById('announcementTitle');
const announcementBody = document.getElementById('announcementBody');
const studentCount = document.getElementById('studentCount');
const teacherCount = document.getElementById('teacherCount');
const announcementCount = document.getElementById('announcementCount');

const defaultStudents = [
  { name: 'Siti Aisyah', class: 'X RPL 1', major: 'Rekayasa Perangkat Lunak' },
  { name: 'Ahmad Budi', class: 'XI TKJ 2', major: 'Teknik Komputer Jaringan' },
  { name: 'Lina Permata', class: 'XII Multimedia', major: 'Multimedia' },
];

const defaultTeachers = [
  { name: 'Ibu Anisa', subject: 'Matematika' },
  { name: 'Bapak Dedi', subject: 'Bahasa Indonesia' },
  { name: 'Ibu Rina', subject: 'Teknologi Informasi' },
  { name: 'Bapak Joko', subject: 'Multimedia' },
];

const defaultAnnouncements = [
  { title: 'Pendaftaran Baru Dibuka', body: 'Penerimaan peserta didik baru dibuka untuk semua program keahlian.' },
  { title: 'Lomba Kreativitas Digital', body: 'Ajak siswa mengikuti lomba desain grafis dan video animasi sekolah.', },
];

function loadData(key, fallback) {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : fallback;
}

function saveData(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

function loadStudents() {
  return loadData('schoolStudents', defaultStudents);
}

function saveStudents(students) {
  saveData('schoolStudents', students);
}

function loadTeachers() {
  return loadData('schoolTeachers', defaultTeachers);
}

function saveTeachers(teachers) {
  saveData('schoolTeachers', teachers);
}

function loadAnnouncements() {
  return loadData('schoolAnnouncements', defaultAnnouncements);
}

function saveAnnouncements(announcements) {
  saveData('schoolAnnouncements', announcements);
}

function getFilteredStudents() {
  const query = studentSearch?.value.trim().toLowerCase() || '';
  const students = loadStudents();
  if (!query) return students;
  return students.filter((student) =>
    student.name.toLowerCase().includes(query) ||
    student.class.toLowerCase().includes(query) ||
    student.major.toLowerCase().includes(query)
  );
}

function renderStudents() {
  const students = getFilteredStudents();
  studentTableBody.innerHTML = '';

  if (students.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = '<td colspan="5">Tidak ada siswa yang cocok.</td>';
    studentTableBody.appendChild(row);
    return;
  }

  students.forEach((student, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.class}</td>
      <td>${student.major}</td>
      <td><button class="remove-btn" data-type="student" data-index="${index}">Hapus</button></td>
    `;
    studentTableBody.appendChild(row);
  });
}

function renderTeachers() {
  const teachers = loadTeachers();
  teacherTableBody.innerHTML = '';

  if (teachers.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = '<td colspan="4">Belum ada data guru.</td>';
    teacherTableBody.appendChild(row);
    return;
  }

  teachers.forEach((teacher, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${teacher.name}</td>
      <td>${teacher.subject}</td>
      <td><button class="remove-btn" data-type="teacher" data-index="${index}">Hapus</button></td>
    `;
    teacherTableBody.appendChild(row);
  });
}

function renderAnnouncements() {
  const announcements = loadAnnouncements();
  announcementList.innerHTML = '';

  if (announcements.length === 0) {
    announcementList.innerHTML = '<li class="announcement-item">Belum ada pengumuman.</li>';
    return;
  }

  announcements.forEach((announcement, index) => {
    const item = document.createElement('li');
    item.className = 'announcement-item';
    item.innerHTML = `
      <h4>${announcement.title}</h4>
      <p>${announcement.body}</p>
      <div class="action-row">
        <button class="remove-btn" data-type="announcement" data-index="${index}">Hapus</button>
      </div>
    `;
    announcementList.appendChild(item);
  });
}

function renderStats() {
  studentCount.textContent = loadStudents().length;
  teacherCount.textContent = loadTeachers().length;
  announcementCount.textContent = loadAnnouncements().length;
}

function switchSection(targetId) {
  sections.forEach((section) => {
    section.classList.toggle('active', section.id === targetId);
  });
  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.target === targetId);
  });
}

function handleRemove(event) {
  const button = event.target.closest('.remove-btn');
  if (!button) return;

  const type = button.dataset.type;
  const index = Number(button.dataset.index);

  if (type === 'student') {
    const students = loadStudents();
    students.splice(index, 1);
    saveStudents(students);
    renderStudents();
    renderStats();
  }

  if (type === 'teacher') {
    const teachers = loadTeachers();
    teachers.splice(index, 1);
    saveTeachers(teachers);
    renderTeachers();
    renderStats();
  }

  if (type === 'announcement') {
    const announcements = loadAnnouncements();
    announcements.splice(index, 1);
    saveAnnouncements(announcements);
    renderAnnouncements();
    renderStats();
  }
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => switchSection(button.dataset.target));
});

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const students = loadStudents();
  students.push({
    name: studentName.value.trim(),
    class: studentClass.value.trim(),
    major: studentMajor.value.trim(),
  });
  saveStudents(students);
  renderStudents();
  renderStats();
  studentForm.reset();
  studentName.focus();
});

teacherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const teachers = loadTeachers();
  teachers.push({
    name: teacherName.value.trim(),
    subject: teacherSubject.value.trim(),
  });
  saveTeachers(teachers);
  renderTeachers();
  renderStats();
  teacherForm.reset();
  teacherName.focus();
});

announcementForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const announcements = loadAnnouncements();
  announcements.unshift({
    title: announcementTitle.value.trim(),
    body: announcementBody.value.trim(),
  });
  saveAnnouncements(announcements);
  renderAnnouncements();
  renderStats();
  announcementForm.reset();
  announcementTitle.focus();
});

studentSearch.addEventListener('input', () => renderStudents());

document.addEventListener('click', handleRemove);

renderStudents();
renderTeachers();
renderAnnouncements();
renderStats();

const sections = document.querySelectorAll('.page-section');
const navButtons = document.querySelectorAll('.nav-button');
const studentTableBody = document.getElementById('studentTableBody');
const teacherTableBody = document.getElementById('teacherTableBody');
const classTableBody = document.getElementById('classTableBody');
const subjectTableBody = document.getElementById('subjectTableBody');
const scoreTableBody = document.getElementById('scoreTableBody');
const rankingTableBody = document.getElementById('rankingTableBody');
const applicantTableBody = document.getElementById('applicantTableBody');
const attendanceSummaryBody = document.getElementById('attendanceSummaryBody');
const userTableBody = document.getElementById('userTableBody');
const scoreStudent = document.getElementById('scoreStudent');
const scoreSubject = document.getElementById('scoreSubject');
const attendanceStudent = document.getElementById('attendanceStudent');
const attendanceDate = document.getElementById('attendanceDate');
const backupButton = document.getElementById('backupButton');
const backupTopButton = document.getElementById('backupTopButton');
const schoolName = document.getElementById('schoolName');
const schoolAddress = document.getElementById('schoolAddress');
const schoolEmail = document.getElementById('schoolEmail');
const schoolPhone = document.getElementById('schoolPhone');
const userName = document.getElementById('userName');
const userRole = document.getElementById('userRole');
const studentSearch = document.getElementById('studentSearch');
const studentCount = document.getElementById('studentCount');
const teacherCount = document.getElementById('teacherCount');
const classCount = document.getElementById('classCount');
const subjectCount = document.getElementById('subjectCount');
const applicantCount = document.getElementById('applicantCount');
const rankingCount = document.getElementById('rankingCount');
const attendanceCount = document.getElementById('attendanceCount');
const applicantPending = document.getElementById('applicantPending');
const applicantAccepted = document.getElementById('applicantAccepted');
const applicantRejected = document.getElementById('applicantRejected');
const monitorTotalLogs = document.getElementById('monitorTotalLogs');
const monitorLastAction = document.getElementById('monitorLastAction');
const monitorLogList = document.getElementById('monitorLogList');
const monitorApplicants = document.getElementById('monitorApplicants');
const monitorStudents = document.getElementById('monitorStudents');

const studentForm = document.getElementById('studentForm');
const teacherForm = document.getElementById('teacherForm');
const classForm = document.getElementById('classForm');
const subjectForm = document.getElementById('subjectForm');
const scoreForm = document.getElementById('scoreForm');
const applicantForm = document.getElementById('applicantForm');
const attendanceForm = document.getElementById('attendanceForm');
const profileForm = document.getElementById('profileForm');
const userForm = document.getElementById('userForm');

const defaultStudents = [
  { id: 'student-1', name: 'Siti Aisyah', class: 'X RPL 1', major: 'Rekayasa Perangkat Lunak' },
  { id: 'student-2', name: 'Ahmad Budi', class: 'XI TKJ 2', major: 'Teknik Komputer Jaringan' },
  { id: 'student-3', name: 'Lina Permata', class: 'XII Multimedia', major: 'Multimedia' },
];

const defaultTeachers = [
  { id: 'teacher-1', name: 'Ibu Anisa', subject: 'Matematika' },
  { id: 'teacher-2', name: 'Bapak Dedi', subject: 'Bahasa Indonesia' },
  { id: 'teacher-3', name: 'Ibu Rina', subject: 'Teknologi Informasi' },
  { id: 'teacher-4', name: 'Bapak Joko', subject: 'Multimedia' },
];

const defaultClasses = [
  { id: 'class-1', name: 'X RPL 1' },
  { id: 'class-2', name: 'XI TKJ 2' },
  { id: 'class-3', name: 'XII Multimedia' },
];

const defaultSubjects = [
  { id: 'subject-1', name: 'Matematika' },
  { id: 'subject-2', name: 'Bahasa Indonesia' },
  { id: 'subject-3', name: 'Teknologi Informasi' },
];

const defaultScores = [
  { id: 'score-1', studentId: 'student-1', subjectId: 'subject-1', value: 88 },
  { id: 'score-2', studentId: 'student-2', subjectId: 'subject-2', value: 92 },
];

const defaultApplicants = [
  { id: 'applicant-1', name: 'Rina Marlina', email: 'rina@example.com', phone: '081234567890', status: 'Menunggu' },
  { id: 'applicant-2', name: 'Budi Santoso', email: 'budi@example.com', phone: '082345678901', status: 'Diterima' },
];

const defaultAttendance = [
  { id: 'attendance-1', studentId: 'student-1', date: '2026-06-10', status: 'Hadir' },
  { id: 'attendance-2', studentId: 'student-2', date: '2026-06-10', status: 'Izin' },
];

const defaultUsers = [
  { id: 'user-1', username: 'admin', role: 'Administrator' },
];

const defaultProfile = {
  name: 'SMK Digital',
  address: 'Jl. Pendidikan No. 10, Kota Contoh',
  email: 'info@smkdigital.sch.id',
  phone: '(021) 123-4567',
};

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
}

function loadData(key, fallback) {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : fallback;
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadStudents() { return loadData('schoolStudents', defaultStudents); }
function saveStudents(students) { saveData('schoolStudents', students); }
function loadTeachers() { return loadData('schoolTeachers', defaultTeachers); }
function saveTeachers(teachers) { saveData('schoolTeachers', teachers); }
function loadClasses() { return loadData('schoolClasses', defaultClasses); }
function saveClasses(classes) { saveData('schoolClasses', classes); }
function loadSubjects() { return loadData('schoolSubjects', defaultSubjects); }
function saveSubjects(subjects) { saveData('schoolSubjects', subjects); }
function loadScores() { return loadData('schoolScores', defaultScores); }
function saveScores(scores) { saveData('schoolScores', scores); }
function loadApplicants() { return loadData('schoolApplicants', defaultApplicants); }
function saveApplicants(applicants) { saveData('schoolApplicants', applicants); }
function loadAttendance() { return loadData('schoolAttendance', defaultAttendance); }
function saveAttendance(attendance) { saveData('schoolAttendance', attendance); }
function loadUsers() { return loadData('schoolUsers', defaultUsers); }
function saveUsers(users) { saveData('schoolUsers', users); }
function loadProfile() { return loadData('schoolProfile', defaultProfile); }
function saveProfile(profile) { saveData('schoolProfile', profile); }

function loadLogs() { return loadData('schoolLogs', []); }
function saveLogs(logs) { saveData('schoolLogs', logs); }

function logAction(type, message) {
  const logs = loadLogs();
  const entry = { id: createId('log'), type, message, at: new Date().toISOString() };
  logs.unshift(entry);
  if (logs.length > 200) logs.pop();
  saveLogs(logs);
  try { renderMonitoring(); } catch (e) { /* ignore if render not ready */ }
}

function renderMonitoring() {
  const logs = loadLogs();
  monitorTotalLogs && (monitorTotalLogs.textContent = logs.length);
  monitorLastAction && (monitorLastAction.textContent = logs[0] ? new Date(logs[0].at).toLocaleString() : '-');
  monitorLogList && (monitorLogList.innerHTML = logs.slice(0,50).map((l) => `<div style="padding:6px;border-bottom:1px solid #f1f1f1"><strong>${l.type}</strong> — ${l.message}<div style="font-size:12px;color:#666">${new Date(l.at).toLocaleString()}</div></div>`).join(''));
  monitorApplicants && (monitorApplicants.textContent = loadApplicants().length);
  monitorStudents && (monitorStudents.textContent = loadStudents().length);
}

function setProfileForm() {
  const profile = loadProfile();
  schoolName.value = profile.name;
  schoolAddress.value = profile.address;
  schoolEmail.value = profile.email;
  schoolPhone.value = profile.phone;
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

  if (!students.length) {
    const row = document.createElement('tr');
    row.innerHTML = '<td colspan="5">Belum ada siswa.</td>';
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
      <td><button class="remove-btn" data-action="delete" data-type="student" data-id="${student.id}">Hapus</button></td>
    `;
    studentTableBody.appendChild(row);
  });
}

function renderTeachers() {
  const teachers = loadTeachers();
  teacherTableBody.innerHTML = '';

  if (!teachers.length) {
    const row = document.createElement('tr');
    row.innerHTML = '<td colspan="4">Belum ada guru.</td>';
    teacherTableBody.appendChild(row);
    return;
  }

  teachers.forEach((teacher, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${teacher.name}</td>
      <td>${teacher.subject}</td>
      <td><button class="remove-btn" data-action="delete" data-type="teacher" data-id="${teacher.id}">Hapus</button></td>
    `;
    teacherTableBody.appendChild(row);
  });
}

function renderClasses() {
  const classes = loadClasses();
  classTableBody.innerHTML = '';

  if (!classes.length) {
    const row = document.createElement('tr');
    row.innerHTML = '<td colspan="3">Belum ada kelas.</td>';
    classTableBody.appendChild(row);
    return;
  }

  classes.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td><button class="remove-btn" data-action="delete" data-type="class" data-id="${item.id}">Hapus</button></td>
    `;
    classTableBody.appendChild(row);
  });
}

function renderSubjects() {
  const subjects = loadSubjects();
  subjectTableBody.innerHTML = '';

  if (!subjects.length) {
    const row = document.createElement('tr');
    row.innerHTML = '<td colspan="3">Belum ada mata pelajaran.</td>';
    subjectTableBody.appendChild(row);
    return;
  }

  subjects.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td><button class="remove-btn" data-action="delete" data-type="subject" data-id="${item.id}">Hapus</button></td>
    `;
    subjectTableBody.appendChild(row);
  });
}

function renderScoreOptions() {
  const students = loadStudents();
  const subjects = loadSubjects();
  scoreStudent.innerHTML = '<option value="">Pilih siswa</option>' + students.map((student) => `<option value="${student.id}">${student.name}</option>`).join('');
  scoreSubject.innerHTML = '<option value="">Pilih mata pelajaran</option>' + subjects.map((subject) => `<option value="${subject.id}">${subject.name}</option>`).join('');
  attendanceStudent.innerHTML = '<option value="">Pilih siswa</option>' + students.map((student) => `<option value="${student.id}">${student.name}</option>`).join('');
}

function renderScores() {
  const scores = loadScores();
  const students = loadStudents();
  const subjects = loadSubjects();
  scoreTableBody.innerHTML = '';

  if (!scores.length) {
    const row = document.createElement('tr');
    row.innerHTML = '<td colspan="5">Belum ada data nilai.</td>';
    scoreTableBody.appendChild(row);
    return;
  }

  scores.forEach((score, index) => {
    const student = students.find((item) => item.id === score.studentId) || { name: 'Unknown' };
    const subject = subjects.find((item) => item.id === score.subjectId) || { name: 'Unknown' };
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${subject.name}</td>
      <td>${score.value}</td>
      <td><button class="remove-btn" data-action="delete" data-type="score" data-id="${score.id}">Hapus</button></td>
    `;
    scoreTableBody.appendChild(row);
  });
}

function renderRanking() {
  const scores = loadScores();
  const students = loadStudents();
  const grouped = {};

  scores.forEach((score) => {
    if (!grouped[score.studentId]) {
      grouped[score.studentId] = { total: 0, count: 0 };
    }
    grouped[score.studentId].total += score.value;
    grouped[score.studentId].count += 1;
  });

  const ranking = Object.entries(grouped)
    .map(([studentId, meta]) => {
      const student = students.find((item) => item.id === studentId) || { name: 'Unknown' };
      return {
        studentId,
        name: student.name,
        average: meta.total / meta.count,
        count: meta.count,
      };
    })
    .sort((a, b) => b.average - a.average);

  rankingTableBody.innerHTML = '';

  if (!ranking.length) {
    const row = document.createElement('tr');
    row.innerHTML = '<td colspan="4">Belum ada ranking nilai.</td>';
    rankingTableBody.appendChild(row);
    return;
  }

  ranking.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.average.toFixed(2)}</td>
      <td>${item.count}</td>
    `;
    rankingTableBody.appendChild(row);
  });
}

function renderApplicants() {
  const applicants = loadApplicants();
  applicantTableBody.innerHTML = '';

  if (!applicants.length) {
    const row = document.createElement('tr');
    row.innerHTML = '<td colspan="13">Belum ada pendaftar.</td>';
    applicantTableBody.appendChild(row);
    return;
  }

  applicants.forEach((applicant, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${applicant.nisn || '-'}</td>
      <td>${applicant.name}</td>
      <td>${applicant.email || '-'}</td>
      <td>${applicant.birthplace || '-'}</td>
      <td>${applicant.birthdate || '-'}</td>
      <td>${applicant.gender || '-'}</td>
      <td>${applicant.religion || '-'}</td>
      <td>${applicant.originSchool || '-'}</td>
      <td>${applicant.parent || '-'}</td>
      <td>${applicant.phone}</td>
      <td>${applicant.status}</td>
      <td>
        ${applicant.status === 'Menunggu' ? `<button class="action-btn" data-action="accept" data-id="${applicant.id}">Terima</button><button class="action-btn" data-action="reject" data-id="${applicant.id}">Tolak</button>` : ''}
        <button class="remove-btn" data-action="delete" data-type="applicant" data-id="${applicant.id}">Hapus</button>
      </td>
    `;
    applicantTableBody.appendChild(row);
  });
}

function renderAttendanceSummary() {
  const attendance = loadAttendance();
  const students = loadStudents();
  const summary = {};

  attendance.forEach((record) => {
    if (!summary[record.studentId]) {
      summary[record.studentId] = { Hadir: 0, 'Tidak Hadir': 0, Izin: 0, Sakit: 0 };
    }
    summary[record.studentId][record.status] += 1;
  });

  attendanceSummaryBody.innerHTML = '';

  students.forEach((student, index) => {
    const counts = summary[student.id] || { Hadir: 0, 'Tidak Hadir': 0, Izin: 0, Sakit: 0 };
    const total = counts.Hadir + counts['Tidak Hadir'] + counts.Izin + counts.Sakit;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${counts.Hadir}</td>
      <td>${counts['Tidak Hadir']}</td>
      <td>${counts.Izin}</td>
      <td>${counts.Sakit}</td>
      <td>${total}</td>
    `;
    attendanceSummaryBody.appendChild(row);
  });
}

function renderUsers() {
  const users = loadUsers();
  userTableBody.innerHTML = '';

  if (!users.length) {
    const row = document.createElement('tr');
    row.innerHTML = '<td colspan="4">Belum ada user.</td>';
    userTableBody.appendChild(row);
    return;
  }

  users.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${user.username}</td>
      <td>${user.role}</td>
      <td><button class="remove-btn" data-action="delete" data-type="user" data-id="${user.id}">Hapus</button></td>
    `;
    userTableBody.appendChild(row);
  });
}

function updateSectionStats() {
  const students = loadStudents().length;
  const teachers = loadTeachers().length;
  const classes = loadClasses().length;
  const subjects = loadSubjects().length;
  const applicants = loadApplicants();
  const attendance = loadAttendance();

  studentCount.textContent = students;
  teacherCount.textContent = teachers;
  classCount.textContent = classes;
  subjectCount.textContent = subjects;
  applicantCount.textContent = applicants.length;
  rankingCount.textContent = loadScores().length ? Object.keys(loadScores().reduce((acc, score) => {
    acc[score.studentId] = true;
    return acc;
  }, {})).length : 0;
  attendanceCount.textContent = attendance.length;

  applicantPending.textContent = applicants.filter((applicant) => applicant.status === 'Menunggu').length;
  applicantAccepted.textContent = applicants.filter((applicant) => applicant.status === 'Diterima').length;
  applicantRejected.textContent = applicants.filter((applicant) => applicant.status === 'Ditolak').length;
}

function switchSection(targetId) {
  sections.forEach((section) => section.classList.toggle('active', section.id === targetId));
  navButtons.forEach((button) => button.classList.toggle('active', button.dataset.target === targetId));
}

function handleAction(event) {
  const button = event.target.closest('[data-action]');
  if (!button) return;

  const action = button.dataset.action;
  const type = button.dataset.type;
  const id = button.dataset.id;

  if (action === 'delete' && type && id) {
    if (type === 'student') {
      const students = loadStudents().filter((item) => item.id !== id);
      saveStudents(students);
      renderStudents();
      renderScoreOptions();
      logAction('delete', `Hapus siswa id:${id}`);
    }
    if (type === 'teacher') {
      saveTeachers(loadTeachers().filter((item) => item.id !== id));
      renderTeachers();
      logAction('delete', `Hapus guru id:${id}`);
    }
    if (type === 'class') {
      saveClasses(loadClasses().filter((item) => item.id !== id));
      renderClasses();
      logAction('delete', `Hapus kelas id:${id}`);
    }
    if (type === 'subject') {
      saveSubjects(loadSubjects().filter((item) => item.id !== id));
      renderSubjects();
      renderScoreOptions();
      logAction('delete', `Hapus mata pelajaran id:${id}`);
    }
    if (type === 'score') {
      saveScores(loadScores().filter((item) => item.id !== id));
      renderScores();
      renderRanking();
      logAction('delete', `Hapus nilai id:${id}`);
    }
    if (type === 'applicant') {
      saveApplicants(loadApplicants().filter((item) => item.id !== id));
      renderApplicants();
      updateSectionStats();
      logAction('delete', `Hapus pendaftar id:${id}`);
    }
    if (type === 'user') {
      saveUsers(loadUsers().filter((item) => item.id !== id));
      renderUsers();
      logAction('delete', `Hapus user id:${id}`);
    }
  }

  if ((action === 'accept' || action === 'reject') && id) {
    const applicants = loadApplicants().map((applicant) => {
      if (applicant.id === id) {
        return { ...applicant, status: action === 'accept' ? 'Diterima' : 'Ditolak' };
      }
      return applicant;
    });
    saveApplicants(applicants);
    renderApplicants();
    updateSectionStats();
    logAction('applicant', `Pendaftar id:${id} => ${action === 'accept' ? 'Diterima' : 'Ditolak'}`);
  }
}

function downloadBackup() {
  const backup = {
    students: loadStudents(),
    teachers: loadTeachers(),
    classes: loadClasses(),
    subjects: loadSubjects(),
    scores: loadScores(),
    applicants: loadApplicants(),
    attendance: loadAttendance(),
    users: loadUsers(),
    profile: loadProfile(),
    generatedAt: new Date().toISOString(),
  };

  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'school-backup-' + new Date().toISOString().slice(0, 10) + '.json';
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(url);
  logAction('system', 'Backup data diunduh');
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => switchSection(button.dataset.target));
});

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const students = loadStudents();
  students.push({
    id: createId('student'),
    name: document.getElementById('studentName').value.trim(),
    class: document.getElementById('studentClass').value.trim(),
    major: document.getElementById('studentMajor').value.trim(),
  });
  saveStudents(students);
  renderStudents();
  renderScoreOptions();
  updateSectionStats();
  studentForm.reset();
  logAction('student', `Tambah siswa: ${students[students.length-1].name}`);
});

teacherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const teachers = loadTeachers();
  teachers.push({
    id: createId('teacher'),
    name: document.getElementById('teacherName').value.trim(),
    subject: document.getElementById('teacherSubject').value.trim(),
  });
  saveTeachers(teachers);
  renderTeachers();
  updateSectionStats();
  teacherForm.reset();
  logAction('teacher', `Tambah guru: ${teachers[teachers.length-1].name}`);
});

classForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const classes = loadClasses();
  classes.push({ id: createId('class'), name: document.getElementById('className').value.trim() });
  saveClasses(classes);
  renderClasses();
  updateSectionStats();
  classForm.reset();
  logAction('class', `Tambah kelas: ${classes[classes.length-1].name}`);
});

subjectForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const subjects = loadSubjects();
  subjects.push({ id: createId('subject'), name: document.getElementById('subjectName').value.trim() });
  saveSubjects(subjects);
  renderSubjects();
  renderScoreOptions();
  updateSectionStats();
  subjectForm.reset();
  logAction('subject', `Tambah mata pelajaran: ${subjects[subjects.length-1].name}`);
});

scoreForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const scores = loadScores();
  scores.push({
    id: createId('score'),
    studentId: scoreStudent.value,
    subjectId: scoreSubject.value,
    value: Number(document.getElementById('scoreValue').value),
  });
  saveScores(scores);
  renderScores();
  renderRanking();
  updateSectionStats();
  scoreForm.reset();
  logAction('score', `Tambah nilai untuk siswaId:${scores[scores.length-1].studentId} -> ${scores[scores.length-1].value}`);
});

applicantForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const applicants = loadApplicants();
  applicants.push({
    id: createId('applicant'),
    name: document.getElementById('applicantName').value.trim(),
    email: document.getElementById('applicantEmail').value.trim(),
    nisn: document.getElementById('applicantNisn').value.trim(),
    birthplace: document.getElementById('applicantBirthplace').value.trim(),
    birthdate: document.getElementById('applicantBirthdate').value,
    gender: document.getElementById('applicantGender').value,
    religion: document.getElementById('applicantReligion').value.trim(),
    address: document.getElementById('applicantAddress').value.trim(),
    parent: document.getElementById('applicantParent').value.trim(),
    phone: document.getElementById('applicantPhone').value.trim(),
    originSchool: document.getElementById('applicantOriginSchool').value.trim(),
    file: document.getElementById('applicantFile').value.split('\\').pop(),
    status: 'Menunggu',
  });
  saveApplicants(applicants);
  renderApplicants();
  updateSectionStats();
  applicantForm.reset();
  logAction('applicant', `Pendaftar baru: ${applicants[applicants.length-1].name} (NISN:${applicants[applicants.length-1].nisn || '-'})`);
});

attendanceForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const attendance = loadAttendance();
  attendance.push({
    id: createId('attendance'),
    studentId: attendanceStudent.value,
    date: attendanceDate.value,
    status: document.getElementById('attendanceStatus').value,
  });
  saveAttendance(attendance);
  renderAttendanceSummary();
  updateSectionStats();
  attendanceForm.reset();
  logAction('attendance', `Input absensi untuk siswa:${attendance[attendance.length-1].studentId} status:${attendance[attendance.length-1].status}`);
});

profileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  saveProfile({
    name: schoolName.value.trim(),
    address: schoolAddress.value.trim(),
    email: schoolEmail.value.trim(),
    phone: schoolPhone.value.trim(),
  });
  alert('Profil sekolah berhasil disimpan.');
  logAction('profile', `Profil diperbarui oleh user`);
});

userForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const users = loadUsers();
  users.push({
    id: createId('user'),
    username: userName.value.trim(),
    role: userRole.value,
  });
  saveUsers(users);
  renderUsers();
  userForm.reset();
  logAction('user', `Tambah user: ${userName.value.trim()} role:${userRole.value}`);
});

studentSearch?.addEventListener('input', () => renderStudents());
backupButton?.addEventListener('click', downloadBackup);
backupTopButton?.addEventListener('click', downloadBackup);

document.addEventListener('click', handleAction);

function initialize() {
  renderStudents();
  renderTeachers();
  renderClasses();
  renderSubjects();
  renderScoreOptions();
  renderScores();
  renderRanking();
  renderApplicants();
  renderAttendanceSummary();
  renderUsers();
  setProfileForm();
  updateSectionStats();
  renderMonitoring();
  attendanceDate.value = new Date().toISOString().slice(0, 10);
}

initialize();

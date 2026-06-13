const sections = document.querySelectorAll('.page-section');
const navButtons = document.querySelectorAll('.nav-button');
const studentTableBody = document.getElementById('studentTableBody');
const teacherTableBody = document.getElementById('teacherTableBody');
const studentForm = document.getElementById('studentForm');
const studentName = document.getElementById('studentName');
const studentClass = document.getElementById('studentClass');
const studentMajor = document.getElementById('studentMajor');

const defaultStudents = [
  { name: 'Siti Aisyah', class: 'X RPL 1', major: 'Rekayasa Perangkat Lunak' },
  { name: 'Ahmad Budi', class: 'XI TKJ 2', major: 'Teknik Komputer Jaringan' },
  { name: 'Lina Permata', class: 'XII Multimedia', major: 'Multimedia' },
];

const teachers = [
  { name: 'Ibu Anisa', subject: 'Matematika' },
  { name: 'Bapak Dedi', subject: 'Bahasa Indonesia' },
  { name: 'Ibu Rina', subject: 'Teknologi Informasi' },
  { name: 'Bapak Joko', subject: 'Multimedia' },
];

function loadStudents() {
  const stored = localStorage.getItem('schoolStudents');
  return stored ? JSON.parse(stored) : defaultStudents;
}

function saveStudents(students) {
  localStorage.setItem('schoolStudents', JSON.stringify(students));
}

function renderStudents() {
  const students = loadStudents();
  studentTableBody.innerHTML = '';

  students.forEach((student, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.class}</td>
      <td>${student.major}</td>
    `;
    studentTableBody.appendChild(row);
  });
}

function renderTeachers() {
  teacherTableBody.innerHTML = '';
  teachers.forEach((teacher, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${teacher.name}</td>
      <td>${teacher.subject}</td>
    `;
    teacherTableBody.appendChild(row);
  });
}

function switchSection(targetId) {
  sections.forEach((section) => {
    section.classList.toggle('active', section.id === targetId);
  });
  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.target === targetId);
  });
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
  studentForm.reset();
  studentName.focus();
});

renderStudents();
renderTeachers();

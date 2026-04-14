document.addEventListener("DOMContentLoaded", () => {
  const idCardLink = document.querySelector(".id-section .id-title");
  if (idCardLink) {
    idCardLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "https://erp.geu.ac.in/Account/Login";
    });
  }

  if (typeof studentData !== "undefined") {
    const studentName = document.getElementById("student-name");
    const studentId = document.getElementById("student-id");
    const profileEmail = document.getElementById("profile-email");
    const profileMobile = document.getElementById("profile-mobile");
    const fatherName = document.getElementById("id-father-name");
    const idEmail = document.getElementById("id-email");
    const idCourse = document.getElementById("id-course");
    const idEnrollment = document.getElementById("id-enrollment");
    const idUniversityRoll = document.getElementById("id-university-roll");
    const studentPhoto = document.querySelector(".student-photo");

    if (studentName) studentName.textContent = studentData.name;
    if (studentId) studentId.textContent = studentData.studentId;
    if (profileEmail) profileEmail.textContent = studentData.email;
    if (profileMobile) profileMobile.textContent = studentData.mobile;
    if (fatherName) fatherName.textContent = studentData.fatherName;
    if (idEmail) idEmail.textContent = studentData.email;
    if (idCourse) idCourse.textContent = studentData.course;
    if (idEnrollment) idEnrollment.textContent = studentData.enrollment;
    if (idUniversityRoll) idUniversityRoll.textContent = studentData.universityRollNo;
    if (studentPhoto) studentPhoto.src = studentData.photo;
  }

  if (typeof brandData !== "undefined") {
    const root = document.documentElement;
    root.style.setProperty("--geu-green", brandData.headerGreen);
    root.style.setProperty("--geu-menu-green", brandData.menuGreen);

    const header = document.querySelector(".portal-header");
    if (header) header.style.borderBottomColor = brandData.borderGreen;

    const divider = document.querySelector(".brand-divider");
    if (divider) divider.style.background = brandData.borderGreen;

    const logo = document.querySelector(".portal-logo");
    const wordmark = document.querySelector(".brand-wordmark");
    if (logo) logo.src = brandData.logo;
    if (wordmark) wordmark.src = brandData.wordmark;
  }
});

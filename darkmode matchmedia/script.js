const toggleBtn = document.getElementById("btnToggle");
const currentTheme = document.querySelector(".theme");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
    currentTheme.classList.add("dark-mode"); // เพิ่ม style dark-mode ที่ class Theme
    toggleBtn.classList.remove("dark-mode-toggle"); // เพิ่ม style dark-mode-toggle จาก Id btnToggle
    localStorage.setItem("dark-mode", "enabled"); // จำค่าปัจจุบันของ dark-mode เป็น enabled
}

const disableDarkMode = () => {
    currentTheme.classList.remove("dark-mode"); // ลบ style dark-mode จาก class Theme
    toggleBtn.classList.add("dark-mode-toggle"); // เพิ่ม style dark-mode-toggle ที่ Id btnToggle
    localStorage.setItem("dark-mode", "disabled"); // จำค่าปัจจุบันของ dark-mode เป็น disabled
}

if(darkMode === "enabled"){ // ตรวจสอบสถานะปัจจุบัน
    enableDarkMode(); // หากเป็นจริง เรียกใช้งานฟังก์ชัน enableDarkMode
}

toggleBtn.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode"); // อัปเดตสถานะปัจจุบันเมื่อคลิก
    if(darkMode === "disabled"){ // ตรวจสอบเงื่อนไขถ้าค่า darkMode มีค่าเท่ากับ disabled
        enableDarkMode(); // หากเป็นจริง เรียกใช้งานฟังก์ชัน enableDarkMode
    } else {
        disableDarkMode(); // หากเป็นเท็จ เรียกใช้งานฟังก์ชัน disableDarkMode
    }
});

// **Dark Mode and Matchmedia ใช้ตรวจสถานะของระบบ**
const runColorMode = (fn) => {
    if (!window.matchMedia) {
      return;
    }
    
    const query = window.matchMedia('(prefers-color-scheme: dark)');
  
    fn(query.matches);
  
    query.addEventListener('change', (event) => fn(event.matches));
  }
  
  runColorMode((isDarkMode) => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  })
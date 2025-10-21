const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

function toggleMobileMenu() {
  // Nếu menu đang mở -> đóng
  if (mobileMenu.classList.contains("active-nemu-mobile")) {
    closeMobileMenu();
  }
  // Nếu menu đang đóng -> mở
  else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  mobileMenu.style.display = "block";
  setTimeout(() => mobileMenu.classList.add("active-nemu-mobile"), 10); // delay nhẹ để CSS transition hoạt động
  menuIcon.style.display = "none";
  closeIcon.style.display = "inline-block";
  document.body.style.overflow = "hidden"; // tránh scroll nền
}

function closeMobileMenu() {
  mobileMenu.classList.remove("active-nemu-mobile");
  setTimeout(() => {
    mobileMenu.style.display = "none";
  }, 300); // khớp với thời gian transition
  menuIcon.style.display = "inline-block";
  closeIcon.style.display = "none";
  document.body.style.overflow = "";
}

// Ẩn icon close khi load trang
document.addEventListener("DOMContentLoaded", () => {
  closeIcon.style.display = "none";
});

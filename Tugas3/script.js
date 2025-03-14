document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      // ✅ Perbaiki typo di sini
      // Hapus class "active" dari semua link
      navLinks.forEach((nav) => nav.classList.remove('active'));

      // Tambahkan class "active" ke link yang diklik
      this.classList.add('active');
    });
  });
});

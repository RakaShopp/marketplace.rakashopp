
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
  document.querySelector('.overlay').style.display = sidebar.classList.contains('active') ? 'block' : 'none';
}

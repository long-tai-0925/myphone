// script.js

// 打開資料夾
function openFolder(folderId) {
    const folder = document.getElementById(folderId);
    folder.classList.add('open');
    folder.style.visibility = 'visible';
  }
  
  // 關閉資料夾
  function closeFolder() {
    document.querySelectorAll('.folder-view.open').forEach(folder => {
      folder.classList.remove('open');
      setTimeout(() => (folder.style.visibility = 'hidden'), 300);
    });
  }
  
  // 切換深色模式
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.desktop, .icon, .toggle-dark-mode, .folder-view').forEach(el => {
      el.classList.toggle('dark-mode');
    });
  }
  
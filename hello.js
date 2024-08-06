// script.js

document.addEventListener('DOMContentLoaded', function () {

    // Modal functionality
    const modal = document.querySelector('[data-modal]');
    const modalOverlay = document.querySelector('[data-modal-overlay]');
    const modalCloseBtn = document.querySelector('[data-modal-close]');
    const overlay = document.querySelector('.overlay');
  
    document.querySelector('[data-modal]').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
  
    modalCloseBtn.addEventListener('click', function () {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    });
  
    // Notification Toast functionality
    const toast = document.querySelector('[data-toast]');
    const toastCloseBtn = document.querySelector('[data-toast-close]');
  
    toastCloseBtn.addEventListener('click', function () {
      toast.style.display = 'none';
    });
  
    // Show the toast for a few seconds and then hide it
    setTimeout(function () {
      toast.style.display = 'none';
    }, 5000);
  
  });
  
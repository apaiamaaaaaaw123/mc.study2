// Fungsi popup
function openPopup(id) {
  document.getElementById(id).style.display = 'flex';
}

function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}

// Tutup popup saat klik diluar popup-content
function outsideClickPopup(event) {
  if (event.target.classList.contains('popup')) {
    event.target.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Popup anggota grup
  const openMembersBtn = document.getElementById('open-popup-members');
  const popupMembers = document.getElementById('popup-members');
  const closeMembersBtn = document.getElementById('close-popup-members');

  if(openMembersBtn && popupMembers && closeMembersBtn){
    openMembersBtn.addEventListener('click', e => {
      e.preventDefault();
      openPopup('popup-members');
    });
    closeMembersBtn.addEventListener('click', () => closePopup('popup-members'));
    popupMembers.addEventListener('click', outsideClickPopup);
  }

  // Popup materi pembelajaran — bisa ada tombol yang sama di halaman lain
  const openLearningBtn = document.getElementById('open-popup-learning');
  const popupLearning = document.getElementById('popup-learning');
  const closeLearningBtn = document.getElementById('close-popup-learning');

  if(openLearningBtn && popupLearning && closeLearningBtn){
    openLearningBtn.addEventListener('click', () => openPopup('popup-learning'));
    closeLearningBtn.addEventListener('click', () => closePopup('popup-learning'));
    popupLearning.addEventListener('click', outsideClickPopup);
  }

  // Popup quiz
  const openQuizBtn = document.getElementById('open-popup-quiz');
  const popupQuiz = document.getElementById('popup-quiz');
  const closeQuizBtn = document.getElementById('close-popup-quiz');

  if(openQuizBtn && popupQuiz && closeQuizBtn){
    openQuizBtn.addEventListener('click', () => openPopup('popup-quiz'));
    closeQuizBtn.addEventListener('click', () => closePopup('popup-quiz'));
    popupQuiz.addEventListener('click', outsideClickPopup);
  }

  // Quiz handler with improved scoring
  const quizForms = document.querySelectorAll('.quiz-form');
  quizForms.forEach(form => {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      let correct = 0;
      const questions = form.querySelectorAll('.question');
      questions.forEach(q => {
        const chosen = q.querySelector('input[type="radio"]:checked');
        if(chosen && chosen.dataset.correct === "true"){
          correct++;
        }
      });
      const score = Math.round((correct / questions.length) * 100);
      alert(`Skor Anda: ${correct} dari ${questions.length} (${score}%)\n${score >= 70 ? 'Selamat! Anda lulus!' : 'Coba lagi untuk memperbaiki skor Anda.'}`);
    });
  });

  // Member buttons functionality
  const memberButtons = document.querySelectorAll('.member-btn');
  memberButtons.forEach(button => {
    button.addEventListener('click', () => {
      const memberName = button.getAttribute('data-member');
      alert(`Anggota Grup: ${memberName}`);
    });
  });

  // Navigation buttons functionality
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const page = button.getAttribute('data-page');
      if (page) {
        window.location.href = page;
      }
    });
  });
});

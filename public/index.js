const btn = document.getElementById('btn');
if (btn) {
    btn.addEventListener('click', () => {
        location.href = './review.html';
    });
}

const reverseBtn = document.getElementById('reverseBtn');
if (reverseBtn) {
    reverseBtn.addEventListener('click', () => {
        location.href = './index.html';
    });
}
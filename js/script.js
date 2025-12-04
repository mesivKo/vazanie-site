document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('webinarForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            
            if (!name || !email || !phone) {
                alert('Пожалуйста, заполните все поля формы');
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                alert('Пожалуйста, введите корректный email адрес');
                return;
            }
            
            const digitsOnly = phone.replace(/\D/g, '');

            if (digitsOnly.length === 0) {
                alert('Телефон должен содержать цифры');
                return;
            }
            
            if (/[A-Za-zА-Яа-яЁё]/.test(phone)) {
                alert('Телефон не должен содержать буквы');
                return;
            }
            
            if (digitsOnly.length < 10) {
                alert('Номер телефона должен содержать минимум 10 цифр');
                return;
            }
            
            alert(`Спасибо, ${name}! Вы записаны на вебинар.`);
            form.reset();
        });
    }
});
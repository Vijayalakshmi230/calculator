document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('numbox');
    const buttons = document.querySelectorAll('.b1, .b2, .b3');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'AC') {
                display.value = '';
            } else if (value === 'x') {
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
            } else {
                display.value += value;
            }
        });
    });
});

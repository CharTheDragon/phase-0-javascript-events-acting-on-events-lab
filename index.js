function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px','');
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 3}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const right = parseInt(leftNumbers, 10);

    if (right < 360) {
        dodger.style.left = `${right +3}px`;
    }
}
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
    if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
});
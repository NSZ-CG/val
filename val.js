document.querySelector('.valentines').addEventListener('mouseover', () => {
    document.querySelector('.card').style.transform = 'translateY(-100px)';
});
document.querySelector('.valentines').addEventListener('mouseout', () => {
    document.querySelector('.card').style.transform = 'translateY(0)';
});
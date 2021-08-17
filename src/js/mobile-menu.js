export default function mobileMenu() {
    const openMenuButton = document.querySelector('.openMenuButton');
    const mobileMenu = document.querySelector('.mobMenu');
    const closeMenuButton = document.querySelector('.closeMenuBtn');
    
    openMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('firstSection__aside_active')
    });
    
    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('firstSection__aside_active');
    })
}
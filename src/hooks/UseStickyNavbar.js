import { useEffect } from 'react';

export default function useStickyNavbar() {
    useEffect(() => {
        const navbar = document.querySelector('.menu');
        const sticky = navbar.offsetTop;

        const handleScroll = () => {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
}

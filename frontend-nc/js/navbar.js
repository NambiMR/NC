
    function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    }

    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelectorAll('nav ul li a').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    });

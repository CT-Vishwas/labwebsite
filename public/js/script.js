document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.list-group-item');
    const mainContent = document.getElementById('main-content');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', async () => {
            const contentURL = link.getAttribute('data-content');
            const response = await fetch(contentURL);
            const content = await response.text();
            const renderedContent = ejs.render(content);
            mainContent.innerHTML = renderedContent;
        });
    });
     const sidebarUl = document.querySelector('.sidebar ul');

    if (sidebarUl) {
        sidebarUl.addEventListener('click', function(event) {
            // Check if the clicked element is an <li>
            if (event.target.tagName === 'LI') {
                // Remove 'active' class from all <li> children of the <ul>
                Array.from(this.children).forEach(li => {
                    li.classList.remove('active');
                });
                // Add 'active' class to the clicked <li>
                event.target.classList.add('active');
            }
        });
    }
});

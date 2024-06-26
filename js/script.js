const navLinks = document.querySelectorAll("nav ul li a");

const blogsSection = document.querySelector("#blogs");
const myGoalsSection = document.querySelector("#goals");
const reflectionsSection = document.querySelector("#reflections");

const sections = [blogsSection, myGoalsSection, reflectionsSection];

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        navLinks.forEach(item => {
            item.style.color = 'black'
            item.style.borderBottom = 'none'
            })
        e.target.style.color = '#27bb6c';
        e.target.style.borderBottom = 'solid #27bb6c';
        sections.forEach(section => {
            section.style.display = 'none';
        })

        let nameLink = e.target.textContent;
        switch (nameLink) {
            case "My goals":
                console.log("its my goals");
                myGoalsSection.style.display = 'block';
                break;

            case "Blogs":
                console.log("its blogs");
                blogsSection.style.display = "block";
                break;

            case "Reflections":
                console.log("its reflections");
                reflectionsSection.style.display = "block";
                break;

            default:
                break;
        }
    });
});

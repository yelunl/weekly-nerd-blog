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









let x, y;

const cards = document.querySelectorAll('.blogCards li');
const section = document.querySelector('.blogCards');

document.addEventListener('mousemove', (e) => {
    console.log(e.clientX)
    console.log(e.clientY)
    console.log(e.target)
    
    cards.forEach(card => {
    const rect = card.getBoundingClientRect();

    console.log(rect)

    x = e.clientX - rect.left;
    y = e.clientY - rect.top;

        card.style.setProperty('--mouseX', `${x}px`);
        card.style.setProperty('--mouseY', `${y}px`);
    
    })
})
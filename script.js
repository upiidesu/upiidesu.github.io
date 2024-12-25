/* ==================== EMAIL JS ==================== */
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault();

    //serviceID - templateID - #form - publicKey
    emailjs
        .sendForm(
            "service_fb1spgf",
            "template_ajzqxw7",
            "#contact-form",
            "EJTa5kpXMO05E89Vd"
        )

        .then(
            () => {
                // Show sent message
                contactMessage.textContent = "Message sent succesfully !!";

                // Remove message after 5s
                setTimeout(() => {
                    contactMessage.textContent = "";
                }, 5000);

                // Clear input fields
                contactForm.reset();
            },
            () => {
                // Error message
                contactMessage.textContent =
                    "Message not sent (service error) !!";
            }
        );
};

contactForm.addEventListener("submit", sendEmail);

/* ==================== SHOW SCROLL UP ==================== */
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/* ==================== SCROLL SECTION ACTIVE LINK ==================== */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(
                ".nav-list a[href*=" + sectionId + "]"
            );

        if (
            scrollDown > sectionTop &&
            scrollDown <= sectionTop + sectionHeight
        ) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", scrollActive);

/* ==================== SCROLL REVEAL ANIMATION ==================== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true, // Animation repeat
})

sr.reveal(`.profile`)
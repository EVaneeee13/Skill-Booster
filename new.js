// Welcome message based on the time of day
document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    const message = document.createElement("p");
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        message.textContent = "Good morning! Start your day with something new.";
    } else if (currentHour < 18) {
        message.textContent = "Good afternoon! Keep exploring!";
    } else {
        message.textContent = "Good evening! Relax and enjoy browsing.";
    }

    message.style.fontSize = "1.4rem";
    message.style.marginTop = "1rem";
    message.style.color = "#2d3748";
    main.appendChild(message);
});

// Smooth scroll to top button
const createScrollToTopButton = () => {
    const button = document.createElement("button");
    button.textContent = "Back to Top";
    button.style.position = "fixed";
    button.style.bottom = "2rem";
    button.style.right = "2rem";
    button.style.display = "none";
    button.style.zIndex = "1000";

    document.body.appendChild(button);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });

    button.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
};

createScrollToTopButton();

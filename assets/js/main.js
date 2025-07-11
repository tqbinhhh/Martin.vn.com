document.addEventListener("DOMContentLoaded", function() {
    
    // --- Code cho Particle JS (Hiệu ứng nền) ---
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 0.3 // Đường kẻ đã được làm mỏng
            },
            "move": { "enable": true, "speed": 2, "direction": "none", "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });

    // --- Code xử lý Menu Mobile ---
    const menuToggle = document.querySelector(".menu-toggle");
    const menuClose = document.querySelector(".menu-close");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav && menuClose) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.add("active");
        });

        menuClose.addEventListener("click", () => {
            mainNav.classList.remove("active");
        });
    }

    // --- Code xử lý nút Điện thoại ở Sidebar ---
    const phoneButton = document.getElementById("phone-button");
    const phonePopup = document.getElementById("phone-popup");

    if (phoneButton && phonePopup) {
        phoneButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
            phonePopup.classList.toggle("active");
        });

        // Ẩn pop-up khi bấm ra ngoài
        document.addEventListener("click", () => {
            if (phonePopup.classList.contains("active")) {
                phonePopup.classList.remove("active");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {

    // --- Code cho Particle JS (ĐÃ CHỈNH SỬA CHO MỎNG HƠN) ---
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 48, // Giảm số lượng hạt
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.3, // Giảm độ mờ
                    "random": false
                },
                "size": {
                    "value": 2, // Giảm kích thước hạt
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 180, // Tăng khoảng cách kết nối
                    "color": "#ffffff",
                    "opacity": 0.2, // Giảm độ mờ đường kết nối
                    "width": 0.5 // Giảm độ dày đường kết nối
                },
                "move": {
                    "enable": true,
                    "speed": 1, // Giảm tốc độ di chuyển
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 80, // Giảm khoảng cách đẩy
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 2 // Giảm số lượng hạt đẩy
                    },
                    "remove": {
                        "particles_nb": 1 // Giảm số lượng hạt loại bỏ
                    }
                }
            },
            "retina_detect": true
        });
    }

    // --- Code xử lý Sidebar Trái (Giữ nguyên) ---
    const phoneButton = document.getElementById("phone-button");
    const phonePopup = document.getElementById("phone-popup");

    if (phoneButton && phonePopup) {
        phoneButton.addEventListener("click", (event) => {
            event.stopPropagation();
            phonePopup.classList.toggle("active");
        });
        document.addEventListener("click", () => {
            if (phonePopup.classList.contains("active")) {
                phonePopup.classList.remove("active");
            }
        });
    }

    // --- Code xử lý Menu Mobile (Giữ nguyên) ---
    const menuToggle = document.querySelector(".menu-toggle");
    const menuClose = document.querySelector(".menu-close");
    const mainNav = document.querySelector(".main-navigation-bar .main-nav");

    if (menuToggle && mainNav && menuClose) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.add("active");
        });
        menuClose.addEventListener("click", () => {
            mainNav.classList.remove("active");
        });
    }

    // --- Code xử lý Sticky Header (Giữ nguyên) ---
    const header = document.querySelector(".new-header-container");
    const mainContent = document.querySelector(".main-content");

    const stickyOffset = header.offsetTop;
    const headerHeight = header.offsetHeight;

    function handleScroll() {
        if (window.pageYOffset > stickyOffset) {
            header.classList.add("sticky");
            mainContent.style.paddingTop = headerHeight + 'px';
        } else {
            header.classList.remove("sticky");
            mainContent.style.paddingTop = '120px';
        }
    }

    window.onscroll = function() {
        handleScroll();
    };

});

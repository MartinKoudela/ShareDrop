document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("year").innerHTML += new Date().getFullYear();

    // Dark mode
    const toggle = document.getElementById("dark-toggle");
    const icon = toggle.querySelector("i");

    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
        icon.classList.replace("fa-moon", "fa-sun");
    }

    toggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        const isDark = document.documentElement.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        icon.classList.replace(isDark ? "fa-moon" : "fa-sun", isDark ? "fa-sun" : "fa-moon");
    });

    // Hash checkbox (upload page only)
    const pass_box = document.getElementById("hash-input");
    const pass = document.getElementById("hash");

    if (pass_box && pass) {
        pass_box.checked = undefined;
        pass_box.addEventListener("change", () => {
            if (pass_box.checked) {
                pass.value = Math.random().toString(36).substring(2, 15);
                pass.className = "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent";
            } else {
                pass.className = "hidden";
            }
        });
    }

});

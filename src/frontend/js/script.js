document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("year").innerHTML += new Date().getFullYear();

    const pass_box = document.getElementById("hash-input");
    pass_box.checked = undefined;
    const pass = document.getElementById("hash");

    pass_box.addEventListener("change", () => {
        if (pass_box.checked) {
            pass.value = Math.random().toString(36).substring(2, 15)
            pass.className = "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2" +
                "focus:ring-gray-400 focus:border-transparent"
        } else {
            pass.className = "hidden"
        }
    });
});
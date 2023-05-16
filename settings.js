const animationCheckbox = document.getElementById("animation");

// Check if a switch state cookie exists
const switchStateCookie = getCookie("animationState");
if (switchStateCookie === "true") {
    animationCheckbox.checked = true;
} else {
    animationCheckbox.checked = false;
}

// Save the switch state to a cookie when it is toggled
animationCheckbox.addEventListener("change", function () {
    setCookie("animationState", this.checked.toString(), 365);
});

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}
if (!switchStateCookie) {
    console.log("Cookie off");
};
if (switchStateCookie) {
    console.log("Cookie on");
};

function sendData() {
    var data = {
        message: "doo"
    };
    localStorage.setItem("myData", JSON.stringify(data));
}
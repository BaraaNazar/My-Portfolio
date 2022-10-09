
// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// thems vars
const userThem = localStorage.getItem("them");
const systemThem = window.matchMedia("(prefer-color-scheme: dark)").matches;

// Icon toggling
const iconToggle = () =>{
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");
};

// intial theme check
const themeCheck = () => {
    if (userTheme === "dark" || (!userThem && systemThem)){
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("hidden");
        return;
    }
    sunIcon.classList.add("hidden");
}

// manual theme switch
const themeSwitch = () =>{
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
}

// call theme switch on clicking buttons
sunIcon.addEventListener("click", ()=>{
    themeSwitch();
});

moonIcon.addEventListener("click",()=>{
    themeSwitch();
});

// invoke theme check on intial load
themeCheck();
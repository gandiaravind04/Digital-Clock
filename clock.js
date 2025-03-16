function updateclock(){
    let now = new Date();
    let hours = now.getHours().toString().padStart(2,'0');
    let minutes = now.getMinutes().toString().padStart(2,'0');
    let seconds = now.getSeconds().toString().padStart(2,'0');
    let a = document.getElementById("clock");
    a.textContent=`${hours}:${minutes}:${seconds}`;
    
} 
setInterval(updateclock, 1000);
updateclock();

function theme(){
    let icon = document.getElementById("icon"); // Ensure icon is defined
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        icon.classList.remove("bi-brightness-high-fill");
        icon.classList.add("bi-moon-stars-fill");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        icon.classList.add("bi-brightness-high-fill");
        icon.classList.remove("bi-moon-stars-fill");
    }
}

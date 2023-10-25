let count = 0;


function increment() {
    count++;
    let dispCount = document.getElementById("counter")
    dispCount.textContent = count ;
}


function decrement() {
    count--;
    let dispCount = document.getElementById("counter")
    dispCount.textContent = count ;
}
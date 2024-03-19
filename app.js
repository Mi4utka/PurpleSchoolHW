function countdownTimer() {
    const newYear = new Date(new Date().getFullYear() + 1, 0, 1);

    function calculateTimeLeft() {
        const currentTime = new Date();
        const timeLeft = newYear - currentTime;

        const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerText =  `${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left until the New Year!`;
       
    }
    setInterval(() => {
        console.log(calculateTimeLeft());
    }, 1000);
}
countdownTimer()

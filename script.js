// script.js

document.addEventListener("DOMContentLoaded", function() {
    // تاريخ انطلاق الموقع
    const launchDate = new Date("2024-06-24T00:00:00").getTime();

    // تحديث العد التنازلي كل ثانية
    const interval = setInterval(function() {
        // الوقت الحالي
        const now = new Date().getTime();

        // الفرق بين الآن وتاريخ الانطلاق
        const distance = launchDate - now;

        // حساب الوقت المتبقي
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // عرض الوقت في العناصر
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        // إذا انتهى العد التنازلي
        if (distance < 0) {
            clearInterval(interval);
            document.querySelector(".countdown-container").innerHTML = "<h1>الموقع قد انطلق!</h1>";
        }
    }, 1000);
});

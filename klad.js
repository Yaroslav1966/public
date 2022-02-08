const getRandomeNumber = function (size) {
    return Math.floor(Math.random() * size);
};

const getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

const getDistanceHint = function (distance) {

    if (distance < 15) {
        return "Обожжешься! Осталось " + (20 - clicks);
    } else if (distance < 25) {
        return "Очень горячо. Осталось " + (20 - clicks);
    } else if (distance < 40) {
        return "Горячо. Осталось " + (20 - clicks);
    } else if (distance < 80) {
        return "Тепло. Осталось " + (20 - clicks);
    } else if (distance < 160) {
        return "Холодно. Осталось " + (20 - clicks);
    } else if (distance < 320) {
        return "Очень холодно. Осталось " + (20 - clicks);
    } else {
        return "Замерзнешь! Осталось " + (20 - clicks);
    }
};

let width = 500;
let heigth = 500;
let clicks = 0;

let target = {
    x: getRandomeNumber(width),
    y: getRandomeNumber(heigth),
};

$("#map").click(function (event) {
    if (clicks === 20) {
        alert("Конец игры! Вы сделали " + clicks + " кликов!");
    } else {
        clicks++;
    }


    let distance = getDistance(event, target);

    let distanceHint = getDistanceHint(distance);

    $("#distance").text(distanceHint);

    if (distance < 10) {
        alert("Клад найден! Сделано: " + clicks + " кликов.");
    }

});


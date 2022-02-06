var getRandomeNumber = function (size) {
    return Math.floor(Math.random() * size);
};

var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

var getDistanceHint = function (distance) {

    if (distance < 10) {
        return "Обожжешься! Осталось " + (20 - clicks);
    } else if (distance < 20) {
        return "Очень горячо Осталось " + (20 - clicks);
    } else if (distance < 40) {
        return "Горячо Осталось " + (20 - clicks);
    } else if (distance < 80) {
        return "Тепло Осталось " + (20 - clicks);
    } else if (distance < 160) {
        return "Холодно Осталось " + (20 - clicks);
    } else if (distance < 320) {
        return "Очень холодно Осталось " + (20 - clicks);
    } else {
        return "Замерзнешь! Осталось " + (20 - clicks);
    }
};

var width = 500;
var heigth = 500;
var clicks = 0;

var target = {
    x: getRandomeNumber(width),
    y: getRandomeNumber(heigth),
};

$("#map").click(function (event) {
    if (clicks === 20) {
        alert("Конец игры! Вы сделали " + clicks + " кликов!");
    } else {
        clicks++;
    }


    var distance = getDistance(event, target);

    var distanceHint = getDistanceHint(distance);

    $("#distance").text(distanceHint);

    if (distance < 8) {
        alert("Клад найден! Сделано: " + clicks + " кликов.");
    }

});


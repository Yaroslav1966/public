var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

var getDistanceHint = function (distance) {
    if (distance < 15) {
        return "Обожжешься!";
    } else if (distance < 25) {
        return "Очень горячо";
    } else if (distance < 50) {
        return "Горячо";
    } else if (distance < 100) {
        return "Тепло";
    } else if (distance < 260) {
        return "Холодно";
    } else if (distance < 420) {
        return "Очень холодно";
    } else {
        return "Замерзнешь!";
    }
};

var width = 500;
var heigth = 500;
var clicks = 0;

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(heigth),
};



$("#map").click(function (event) {
    clicks++;


    var distance = getDistance(event, target);

    var distanceHint = getDistanceHint(distance);

    $("#distance").text(distanceHint);


    if (distance < 10) {
        alert("Клад найден! Сделано кликов : " + clicks);

    }

});





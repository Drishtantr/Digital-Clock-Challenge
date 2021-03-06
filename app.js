function setRotation(el, ang) {
    var transform = document.getElementById(el).style.transform;
    var current_angle = parseInt(transform.match(/\d+/));
    transform ? current_angle = parseInt(transform.match(/\d+/)) : current_angle = 0;
    var rotations = Math.floor(current_angle/360);
    if ((current_angle-360*rotations) != ang) {
        var new_angle;
        ang == 0 ? new_angle = 360*(rotations+1) : new_angle = 360*rotations + ang;
        document.getElementById(el).style.transform = "rotateX(-"+ new_angle +"deg)";		
    }
}
function tickTock() {
    var today = new Date();
    var seconds1 = Math.floor(today.getSeconds() / 10);
    var seconds2 = today.getSeconds() % 10;
    var minutes1 = Math.floor(today.getMinutes() / 10);
    var minutes2 = today.getMinutes() % 10;
    var hours1 = Math.floor(today.getHours() / 10);
    var hours2 = today.getHours() % 10;

    setRotation("hours1", (hours1 * 36));
    setRotation("hours2", (hours2 * 36));
    setRotation("minutes1", (minutes1 * 36));
    setRotation("minutes2", (minutes2 * 36));
    setRotation("seconds1", (seconds1 * 36));
    setRotation("seconds2", (seconds2 * 36));
    setTimeout("tickTock()", 1000);
}
tickTock();
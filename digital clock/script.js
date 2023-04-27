function showTime(){
    var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();

        var s = date.getSeconds();

        var session = "AM";

        if(h>12){
            h=h-12;
            session="PM";
        }

        
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }

        var time=h+":"+m+":"+s+" "+session;

        document.getElementById("MyClockDisplay").innerText=time;

        document.getElementById("MyClockDisplay").innerContent=time;

        setTimeout(showTime, 1000);
}

showTime();
// ==UserScript==
// @name         Pilottest_measurment
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost:3000/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {

    var cnt = (localStorage.getItem("Counter"));

    window.onload = function(){
        if(cnt < 101) {
            startmeasurement();

            var starttime = localStorage.getItem("starttime");

            var stopptime = new Date().getTime();
            localStorage.setItem("stopptime", stopptime);

            var ms = stopptime - starttime;

            if(cnt == null){cnt = 0;}

            var str = localStorage.getItem("result");

            if(cnt == 0){str="data:text/csv;charset=utf-8";}

            if(str == null){str = "";}

            str+= cnt + ", D3, " + ms + "\n";

            localStorage.setItem("result", str);

            Math.randSeed = cnt;
            cnt++;
            localStorage.setItem("Counter",cnt);

            setTimeout(redirect, 1000);
        } else {
            var resultstr = localStorage.getItem("result");

            var download = document.createElement("a");
            download.setAttribute("href", encodeURI(resultstr));
            download.setAttribute("download", "d3.csv");
            download.innerHTML= "Download";
            document.body.appendChild(download);
            download.click();
        }
    }

    function startmeasurement(){
        var start = new Date().getTime();
        localStorage.setItem("starttime", start);
        document.getElementsByClassName("D3")[0].click();
    }

    function redirect(){
        window.location.href = "http://localhost:3000/";
    }
})();
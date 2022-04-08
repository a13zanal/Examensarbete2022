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
        if(cnt < 6){ /* When number of measurements + 1 iteration have gone through, send string to getData function and alert "Finish!" */
            startmeasurement();

            /* Get starttime from localstorage for comparison between start and end time */
            var starttime = localStorage.getItem("starttime");

            /* Stop time */
            var stopptime = new Date().getTime();
            localStorage.setItem("stopptime", stopptime);

            /* The difference between Stoptime and starttime in Milliseconds, Date.parse() = parses a string representation of a date, and returns the number of milliseconds */
            var ms = stopptime - starttime;

            /* If Counter(cnt) is null then set Counter to zero */
            if(cnt == null){cnt = 0;}

            /* Set string(str) to the result tab in localstorage */
            var str = localStorage.getItem("result");

            /* If Counter is zero then set data string */
            if(cnt == 0){str="data:text/csv;charset=utf-8";}

            /* If string is null set string to empty "" */
            if(str == null){str = "";}

            /* Define string measurement */
            str+= cnt + ", D3, " + ms + "\n";

            /* Copie the string to localstorage */
            localStorage.setItem("result", str);

            /* Increse the Counter every measurement and set Counter in localstorage */
            Math.randSeed = cnt;
            cnt++;
            localStorage.setItem("Counter",cnt);

            /* Set a delay before reload the page */
            setTimeout(redirect, 1000);
        } else {
            /* Get data and download a datafile when measurement is finish */
            var resultstr = localStorage.getItem("result");
            // Make anchor and click on download!;
            var anchor = document.createElement("a");
            anchor.setAttribute("href", encodeURI(resultstr));
            anchor.setAttribute("download", "d3.csv");
            anchor.innerHTML= "Download";
            document.body.appendChild(anchor);
            anchor.click();
        }
   }

    /* Set starttime, save in localstorage och press the chart button */
    function startmeasurement(){
        var start = new Date().getTime();
        localStorage.setItem("starttime", start);
        document.getElementsByClassName("D3")[0].click();
    }

    /* Reload the page */
    function redirect(){
        window.location.href = "http://localhost:3000/";
    }
})();
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

    var cnt=(localStorage.getItem("Counter"));

    window.onload = function(){
        console.log(cnt);
        startmeasurement();
    }

        var starttime = localStorage.getItem("starttime");

        var stopptime = new Date();
        console.log(stopptime);

        var milliseconds = stopptime - Date.parse(starttime);

            /*if cnt is null then set cnt to 0*/
            if(cnt == null){cnt = 0;}

            /*set str to the result tab in localstorage*/
            var str = localStorage.getItem("result");

            /*if cnt is 0 then set data string*/
            if(cnt == 0){str="data:text/csv;charset=utf-8";}

            /*if str is null set str to empty*/
            if(str == null){str = "";}

            /*when 10 + 1 iteration have gone through send str to get data to getData function*/
            if (cnt == 6){getData(str); alert(localStorage.getItem("result"));}

            /*write out the result*/
            str+= cnt + ", D3, " + milliseconds + "\n";

            localStorage.setItem("result", str);
            console.log(str);

            Math.randSeed = cnt;
            cnt++;
            localStorage.setItem("Counter",cnt);
            setTimeout(redirect, 1000);

        function startmeasurement(){
            var start = new Date();
            localStorage.setItem("starttime", start);
            console.log(start);
            document.getElementsByClassName("D3")[0].click();
        }

        function redirect(){
            window.location.href = "http://localhost:3000/";
        }

        function getData() {
            localStorage.getItem("result");

            // Make anchor and click it!
            var anchor = document.createElement("a");
            anchor.setAttribute("href", encodeURI(str));
            anchor.setAttribute("download", "my_data.csv");
            anchor.innerHTML= "Click Here to download";
            document.body.appendChild(anchor);
            anchor.click();
        }

})();
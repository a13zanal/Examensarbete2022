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

(function () {
    var cnt = localStorage.getItem("Counter");

    window.onload = function () {
        if (cnt < 1001) {
            startmeasurement();

            /* var ms = parseFloat(localStorage.getItem("msRV")); */
            /* var ms = parseFloat(localStorage.getItem("msRC")); */
            var ms = parseFloat(localStorage.getItem("msd3"));

            if (cnt == null) {
                cnt = 0;
            }

            var str = localStorage.getItem("result");

            if (cnt == 0) {
                str = "data:text/csv;charset=utf-8";
            }

            if (str == null) {
                str = "";
            }

            str += cnt + ", D3 10000, " + ms + "\n";

            localStorage.setItem("result", str);

            Math.randSeed = cnt;
            cnt++;
            localStorage.setItem("Counter", cnt);

            setTimeout(redirect, 3500);
        } else {
            var resultstr = localStorage.getItem("result");
            var anchor = document.createElement("a");
            anchor.setAttribute("href", encodeURI(resultstr));
            anchor.setAttribute("download", "M2_D3_10000.csv");
            anchor.innerHTML = "Download";
            document.body.appendChild(anchor);
            anchor.click();
        }
    };

    function startmeasurement() {
        console.log("Click");
        document.getElementsByClassName("D3")[0].click();
    }

    function redirect() {
        window.location.href = "http://localhost:3000/";
    }
})();

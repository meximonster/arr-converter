function Evaluate() {

    var aldo = document.getElementById("aldosterone").value;
    var aldoMU = document.getElementById("aldoMU").value;
    let renin = document.getElementById("renin").value;
    var reninMU = document.getElementById("reninMU").value;

    const result = () => {

        /* Input validation */

        if ((aldo == "") && (renin == "")) {
            return "please enter at least one value"
        }

        if ((aldoMU == "") && (reninMU == "")) {
            return "at least one measurement option must be selected"
        }

        if (((aldo != "") && (aldoMU == "")) || ((renin != "") && (reninMU == ""))) {
            return "measurement unit not selected"
        }

        if ((isNaN(aldo)) || (isNaN(renin))) {
            return "values must be numbers"
        }

        if ((aldo < 0) || (renin < 0)) {
            return "negative values not allowed"
        }

        /* Logic */

        let aldo1,aldo2,aldo3;
        let ratio1,ratio2,ratio3;
        let res;

        if (aldoMU == "1") {
            aldo1 = Number(aldo).toFixed(4)
            aldo2 = Number(aldo1 * (10000/360.44)).toFixed(4)
            aldo3 = aldo1 * 10
        }

        if (aldoMU == "2") {
            aldo2 = Number(aldo).toFixed(4)
            aldo1 = Number(aldo2 * (360.44/10000)).toFixed(4)
            aldo3 = aldo1 * 10
        }

        if (aldoMU == "3") {
            aldo3 = Number(aldo).toFixed(4)
            aldo1 = Number(aldo3 / 0.1).toFixed(4)
            aldo2 = aldo1 * (10000/360.44)
        }

        if (renin != "") {
            ratio1 = Number(aldo1 / renin).toFixed(4)
            ratio2 = Number(aldo2 / renin).toFixed(4)
            ratio3 = Number(aldo3 / renin).toFixed(4)
        } else {
            renin = ratio1 = ratio2 = ratio3 = "-"
        }

        res = 
       `<table>
       <tr>
         <th>Aldosterone</th>
         <th>Renin</th>
         <th>Ratio</th>
       </tr>
       <tr>
         <td>${aldo1} ng/dL</td>
         <td>${renin} ${reninMU}</td>
         <td>${ratio1}</td>
       </tr>
       <tr>
         <td>${aldo2} pmol/L</td>
         <td>${renin} ${reninMU}</td>
         <td>${ratio2}</td>
       </tr>
       <tr>
         <td>${aldo3} pg/mL</td>
         <td>${renin} ${reninMU}</td>
         <td>${ratio3}</td>
       </tr>
     </table>`

        return res;
    }

    document.getElementById("result").innerHTML = result();
    document.getElementById("button").style.visibility = "hidden";
    var b = document.getElementById("button");
    b.parentNode.removeChild(b);
    document.getElementById("url").style.visibility = "visible";
}
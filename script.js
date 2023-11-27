let backend_value = 20.50;

let frontend_value = 15.30;

let analysis_value = 33.60;


discount_code_list = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]





function calculateOffer() {
    event.preventDefault();

    let type_of_work = document.getElementById("type-of-work").value;
    let hours = parseFloat(document.getElementById("hours").value);
    let discount_code_html = document.getElementById("discount-code").value;


    for (let i = 0; i < discount_code_list.length; i++) {
        discount_code = discount_code_list[i];
        console.log(discount_code);

        if (discount_code_html == discount_code) {

            console.log("Codice inserito valido = " + discount_code)

            backend_total_value = (backend_value * hours) - ((backend_value * hours) * 0.25);
            frontend_total_value = (frontend_value * hours) - ((frontend_value * hours) * 0.25);
            analysis_total_value = (analysis_value * hours) - ((analysis_value * hours) * 0.25);
        
            if (type_of_work == 1) {
                console.log("Valore scelto = 1 (Backend Development)")
                console.log("Prezzo Beckend = " + backend_total_value.toFixed(2))
            } else if (type_of_work == 2) {
                console.log("Valore scelto = 2 (Frontend Development)")
                console.log("Prezzo Frontend = " + frontend_total_value.toFixed(2))
            } else if (type_of_work == 3) {
                console.log("Valore scelto = 3 (Project Analysis)")
                console.log("Prezzo Analysis = " + analysis_total_value.toFixed(2))
            } else {
                console.log("Codice sconto non valido")
            }

        } else {

            console.log("sei nel super else")
            backend_total_value = backend_value * hours
            frontend_total_value = frontend_value * hours
            analysis_total_value = analysis_value * hours
        
            if (type_of_work == 1) {
                console.log("Valore scelto = 1 (Backend Development)")
                console.log("Prezzo Beckend = " + backend_total_value.toFixed(2))
            } else if (type_of_work == 2) {
                console.log("Valore scelto = 2 (Frontend Development)")
                console.log("Prezzo Frontend = " + frontend_total_value.toFixed(2))
            } else if (type_of_work == 3) {
                console.log("Valore scelto = 3 (Project Analysis)")
                console.log("Prezzo Analysis = " + analysis_total_value.toFixed(2))
            } else {
                console.log("Inserisci un valore valido")
            }
        }

    }



}
let backend_value = 20.50;

let frontend_value = 15.30;

let analysis_value = 33.60;


discount_code_list = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]


function calculateOffer() {
    event.preventDefault();

    let type_of_work = document.getElementById("type-of-work").value;
    let hours = parseFloat(document.getElementById("hours").value);
    let discount_code_html = document.getElementById("discount-code").value;
    let discountApplied = false;

    // Cerca il codice sconto
    for (let i = 0; i < discount_code_list.length; i++) {
        if (discount_code_html === discount_code_list[i]) {
            console.log("Codice inserito valido = " + discount_code_list[i]);
            document.getElementById("voucher_app").innerHTML = `Codice sconto del 25% inserito`
            discountApplied = true;
            break; // Interrompe il ciclo quando trova un codice valido
        } else if (discount_code_html !== discount_code_list[i]) {
            console.log("Codice inserito non valido = " + discount_code_list[i]);
            document.getElementById("voucher_app").innerHTML = `Codice sconto non inserito o non funzionante`
        }
    }

    // Calcola il prezzo totale
    let backend_total_value = backend_value * hours;
    let frontend_total_value = frontend_value * hours;
    let analysis_total_value = analysis_value * hours;

    // Applica lo sconto se il codice è valido
    if (discountApplied) {
        backend_total_value *= 0.75; // Applica uno sconto del 25%
        frontend_total_value *= 0.75;
        analysis_total_value *= 0.75;
    }

    // Stampa il risultato
    if (!isNaN(hours) && hours >=1) {
        if (type_of_work == "1") {
            console.log("Valore scelto = 1 (Backend Development)");
            console.log("Prezzo Backend = " + backend_total_value.toFixed(2));
            document.getElementById("price").innerHTML = `Il prezzo finale è di ${backend_total_value.toFixed(2)} €`
        } else if (type_of_work == "2") {
            console.log("Valore scelto = 2 (Frontend Development)");
            console.log("Prezzo Frontend = " + frontend_total_value.toFixed(2));
            document.getElementById("price").innerHTML = `Il prezzo finale è di ${frontend_total_value.toFixed(2)} €`
    
        } else if (type_of_work == "3") {
            console.log("Valore scelto = 3 (Project Analysis)");
            console.log("Prezzo Analysis = " + analysis_total_value.toFixed(2));
            document.getElementById("price").innerHTML = `Il prezzo finale è di ${analysis_total_value.toFixed(2)} €`
        } else {
            console.log("Inserisci un valore valido per il tipo di lavoro");
            document.getElementById("price").innerHTML = `Inserisci un valore valido per il tipo di lavoro`
        }
    } else 
        document.getElementById("price").innerHTML = `Inserisci un valore valido per le ore`

    
}




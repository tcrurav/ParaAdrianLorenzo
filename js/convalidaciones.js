window.onload = initialize;

var refConvalidations;

function initialize(){
    var formConvalidations = document.getElementById("form-convalidations");
    
    formConvalidations.addEventListener("submit", sendConvalidationstoFirebase);
    
    
}

function sendConvalidationstoFirebase(event){
    event.preventDefault();
    var formConvalidations = event.target;
    datos(formConvalidations);  // TIBU: He añadido esta línea necesaria para llamar a la función dónde guardas los datos.
}

function datos(formConvalidations){
    refConvalidations = firebase.database().ref().child("formulario");
    refConvalidations.push({
        Usuario: formConvalidations.Usuario.value,   // TIBU: He comentado las siguientes líneas que debes corregir tú
        // VR: formConvalidations.VR.value,
        // Interes: formConvalidations.Interes.value,
        // Edad: formConvalidations.Edad.value,
        // Comentario: formConvalidations.Comentario.value
    });
}
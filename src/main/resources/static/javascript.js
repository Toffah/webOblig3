
function kjopBiletter() {
    let check = 0;
    if($("#antallPersoner").val() <= 0){

    $("#errorAntall").html("Må skrive noe inn i antall").css("color","red");
    check++;
    }

    if($("#fornavn").val() == ""){
        $("#errorFornavn").html("Må skrive noe i fornavnet").css("color","red");
        check++;
    }

    if($("#etternavn").val() == ""){
        $("#errorEtternavn").html("Må skrive noe i etternavn").css("color","red");
        check++;
    }

    if($("#telefonnr").val() == ""){
        $("#errorTelefonnr").html("Må skrive noe i telefonnr").css("color","red");
        check++;
    }

    if($("#epost").val() == ""){
        $("#errorEpost").html("Må skrive noe i epost").css("color","red");
        check++;
    }

    if($("#film").val() == null){
        $("#errorVelgFilm").html("Må velge en film").css("color","red");
        check++;
    }

    if(check > 0){
        return
    }


    const kinobilett = {
        film: $("#film").val(),
        antall: $("#antallPersoner").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val()
    };

    $.post("/regKinobilett", kinobilett , function (data){

        let ut = "<table class='table table-striped'><tr>" + "<th>Fornavn</th><th>Etternavn</th><th>TelefonNr</th><th>Epost</th><th>Film</th><th>Antall</th>" + "</tr>";
        for (let i = 0; i < data.length; i++) {
            ut += "<tr>";
            ut += "<td>" + data[i].fornavn +
                "</td>" + "<td>" + data[i].etternavn +
                "</td>" + "<td>" + data[i].telefonnr +
                "</td>" + "<td>" + data[i].epost +
                "</td>" + "<td>" + data[i].film +
                "</td>" + "<td>" + data[i].antall + "</td>";
            ut += "</tr>";
        }
        $("#alleBiletter").html(ut);
    });

    $("#film").val("Velg film her:");
    $("#antallPersoner").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");

    $("#errorAntall").html("");
    $("#errorFornavn").html("");
    $("#errorEtternavn").html("");
    $("#errorTelefonnr").html("");
    $("#errorEpost").html("");
    $("#errorVelgFilm").html("");

}

function slettAlleBiletter() {
   $.get("/slett")

    $("#film").val("Velg film her:");
    $("#antallPersoner").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");

    $("#alleBiletter").html("");
}
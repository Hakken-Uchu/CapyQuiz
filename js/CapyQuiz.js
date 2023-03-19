var questionpass = 0;

$(document).on("click","#start", function () {
vivre();
})

function vivre(){
    $("#debutmenu").addClass("d-none");
    $("#questionnaire1").removeClass("d-none").addClass();
};



$(document).on("click","#restart", function () {
    restart();
    })
    
    function restart(){
        $(".question").addClass("d-none");
        $("#alerte").addClass("d-none");
        $("#restart").addClass("d-none");
        $("#questionnaire1").removeClass("d-none");

    };



$(document).on("click", "#Q3", function () {
    reussir1();
})
function reussir1(){
    $("#questionnaire2").removeClass("d-none");
    $("#questionnaire1").addClass("d-none");
    $("#alerte").html("1/8 bonne reponse").removeClass("d-none alert-danger").addClass("alert-success").prepend('<img height="100px" width="100px" src="mezille.jpg" />');
    questionpass += 1;
};

$(document).on("click", "#Q2", function () {
    echoue1();
})
$(document).on("click", "#Q1", function () {
    echoue1();
})
function echoue1(){
    $("#questionnaire1").addClass("d-none");
    $("#restart").removeClass("d-none");
    $("#alerte").html("Tu as échoué Mezille pleure à cause de toi !").addClass("alert-danger").removeClass("d-none").prepend('<img height="100px" width="100px" src="mezille pleure.jpg" />');
};





$(document).on("click", "#Q5", function () {
    reussir2();
})
function reussir2(){
    $("#questionnaire3").removeClass("d-none");
    $("#questionnaire2").addClass("d-none");
    $("#alerte").html("2/8 bonnes reponses").removeClass("d-none alert-danger").addClass("alert-success").prepend('<img height="100px" width="100px" src="mezille.jpg" />');
    questionpass += 1;
};

$(document).on("click", "#Q4", function () {
    echoue2();
})
$(document).on("click", "#Q6", function () {
    echoue2();
})
function echoue2(){
    $("#questionnaire2").addClass("d-none");
    $("#restart").removeClass("d-none");
    $("#alerte").html("Tu as échoué Mezille pleure à cause de toi !").addClass("alert-danger").removeClass("d-none").prepend('<img height="100px" width="100px" src="mezille pleure.jpg" />');
};



$(document).on("click", "#Q7", function () {
    reussir3();
})
function reussir3(){
    $("#questionnaire4").removeClass("d-none");
    $("#questionnaire3").addClass("d-none");
    $("#alerte").html("3/8 bonnes reponses").removeClass("d-none alert-danger").addClass("alert-success").prepend('<img height="100px" width="100px" src="mezille.jpg" />');
    questionpass += 1;
};

$(document).on("click", "#Q8", function () {
    echoue3();
})
$(document).on("click", "#Q9", function () {
    echoue3();
})
function echoue3(){
    $("#questionnaire3").addClass("d-none");
    $("#restart").removeClass("d-none");
    $("#alerte").html("Tu as échoué Mezille pleure à cause de toi !").addClass("alert-danger").removeClass("d-none").prepend('<img height="100px" width="100px" src="mezille pleure.jpg" />');
};




$(document).on("click", "#Q12", function () {
    reussir4();
})
function reussir4(){
    $("#questionnaire5").removeClass("d-none");
    $("#questionnaire4").addClass("d-none");
    $("#alerte").html("4/8 bonnes reponses").removeClass("d-none alert-danger").addClass("alert-success").prepend('<img height="100px" width="100px" src="mezille.jpg" />');
    questionpass += 1;
    console.log(questionpass)
};

$(document).on("click", "#Q10", function () {
    echoue4();
})
$(document).on("click", "#Q11", function () {
    echoue4();
})
function echoue4(){
    $("#questionnaire4").addClass("d-none");
    $("#restart").removeClass("d-none");
    $("#alerte").html("Tu as échoué Mezille pleure à cause de toi !").addClass("alert-danger").removeClass("d-none").prepend('<img height="100px" width="100px" src="mezille pleure.jpg" />');
};



$(document).on("click", "#Q14", function () {
    reussir5();
})
function reussir5(){
    $("#questionnaire6").removeClass("d-none");
    $("#questionnaire5").addClass("d-none");
    $("#alerte").html("5/8 bonnes reponses").removeClass("d-none alert-danger").addClass("alert-success").prepend('<img height="100px" width="100px" src="mezille.jpg" />');
    questionpass += 1;
};

$(document).on("click", "#Q13", function () {
    echoue5();
})
$(document).on("click", "#Q15", function () {
    echoue5();
})
function echoue5(){
    $("#questionnaire5").addClass("d-none");
    $("#restart").removeClass("d-none");
    $("#alerte").html("Tu as échoué Mezille pleure à cause de toi !").addClass("alert-danger").removeClass("d-none").prepend('<img height="100px" width="100px" src="mezille pleure.jpg" />');
};



$(document).on("click", "#Q17", function () {
    reussir6();
})
function reussir6(){
    $("#questionnaire7").removeClass("d-none");
    $("#questionnaire6").addClass("d-none");
    $("#alerte").html("6/8 bonnes reponses").removeClass("d-none alert-danger").addClass("alert-success").prepend('<img height="100px" width="100px" src="mezille.jpg" />');
    questionpass += 1;
};

$(document).on("click", "#Q16", function () {
    echoue6();
})
function echoue6(){
    $("#questionnaire6").addClass("d-none");
    $("#restart").removeClass("d-none");
    $("#alerte").html("Tu as échoué Mezille pleure à cause de toi !").addClass("alert-danger").removeClass("d-none").prepend('<img height="100px" width="100px" src="mezille pleure.jpg" />');
};



$(document).on("click", "#Q18", function () {
    $("#presentateur").addClass("d-none");
    $("#petit").removeClass("d-none");
    $("#presentateur").addClass("d-none")
    reussir7();
})
function reussir7(){
    $("#questionnaire7").addClass("d-none");

    $("#questionnaire8").removeClass("d-none");
    $("#alerte").html("7/8 bonnes reponses").removeClass("d-none alert-danger").addClass("alert-success").prepend('<img height="100px" width="100px" src="mezille.jpg" />');
    questionpass += 1;
};

$(document).on("click", "#Q19", function () {
    echoue7();
})
$(document).on("click", "#Q20", function () {
    echoue7();
})
function echoue7(){
    $("#questionnaire7").addClass("d-none");
    $("#restart").removeClass("d-none");
    $("#alerte").html("Tu as échoué Mezille pleure à cause de toi !").addClass("alert-danger").removeClass("d-none").prepend('<img height="100px" width="100px" src="mezille pleure.jpg" />');
};




$(document).on("click", "#Q21", function () {
    reussir8();
})
function reussir8(){
    /*$("#questionnaire9").removeClass("d-none");*/
    $("#questionnaire8").addClass("d-none");
    $("#alerte").html("Tu as reussi ta formation bravo").removeClass("d-none alert-denger").addClass("alert-success").prepend('<img height="350px" width="350px" src="mezilerecompense.jpg" />');

};

$(document).on("click", "#Q22", function () {
    echoue8();
})
$(document).on("click", "#Q23", function () {
    echoue8();
})
function echoue8(){
    $("#questionnaire8").addClass("d-none");
    $("#restart").removeClass("d-none");
    $("#alerte").html("Tu as échoué Mezille pleure à cause de toi !").addClass("alert-danger").removeClass("d-none").prepend('<img height="100px" width="100px" src="mezille pleure.jpg" />');
};




    /*$("#alerte").html("8/8 bonnes reponses").removeClass("d-none alert-danger").addClass("alert-success").prepend('<img height="100px" width="100px" src="mezille.jpg" />');*/
/*
$("#alerte").html("Tu as reussi ta formation bravo").removeClass("d-none alert-denger").addClass("alert-success").prepend('<img height="350px" width="350px" src="ciscocertif.png" />');
*/ 
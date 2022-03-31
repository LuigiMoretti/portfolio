

cambiaPagina(0);
let classList = $('main.progetti').attr("class").split(/\s+/);
if (!classList.includes("cliccato")) {
    $('main.progetti').click(function () {
        $(this).addClass("cliccato");
        $('body').css("overflow", "hidden");
        $('main.progetti').css("overflow", "scroll");
        console.log("non contiene");
        $("#chiudi").css("display", "block");
    });
}

$("#chiudi").on("click", function () {
    setTimeout(() => {
        $('main.progetti').removeClass('cliccato');
        $('main').addClass("riposiziona");
        console.log("contiene");
        $("#chiudi").css("display", "none");
        $('body').css("overflow", "scroll");
    }, 20);
});

$("main").on("mouseenter", function () {
    $("main").removeClass("riposiziona");
});
function cambiaPagina(p) {
    if ($(window).width() < 768) {

        switch (p) {
            case 0:
                $("#home").slideDown();
                document.getElementById("btnHome").classList.add("active");

                $("#competenze").slideUp();
                document.getElementById("btnComp").classList.remove("active");

                $("#curriculum").slideUp();
                document.getElementById("btnCurr").classList.remove("active");

                $("#progetti").slideUp();;
                document.getElementById("btnProg").classList.remove("active");

                $("#contatti").slideUp();
                document.getElementById("btnCont").classList.remove("active");
                break;


            case 1:
                $("#home").slideUp();
                document.getElementById("btnHome").classList.remove("active");

                $("#competenze").slideDown();
                document.getElementById("btnComp").classList.add("active");

                $("#curriculum").slideUp();
                document.getElementById("btnCurr").classList.remove("active");

                $("#progetti").slideUp();
                document.getElementById("btnProg").classList.remove("active");

                $("#contatti").slideUp();
                document.getElementById("btnCont").classList.remove("active");
                break;

            case 2:
                $("#home").slideUp();
                document.getElementById("btnHome").classList.remove("active");

                $("#competenze").slideUp();
                document.getElementById("btnComp").classList.remove("active");

                $("#progetti").slideDown();
                document.getElementById("btnProg").classList.add("active");

                $("#curriculum").slideUp();
                document.getElementById("btnCurr").classList.remove("active");

                $("#contatti").slideUp();
                document.getElementById("btnCont").classList.remove("active");
                break;


            case 3:
                $("#home").slideUp();
                document.getElementById("btnHome").classList.remove("active");

                $("#competenze").slideUp();
                document.getElementById("btnComp").classList.remove("active");

                $("#progetti").slideUp();
                document.getElementById("btnProg").classList.remove("active");

                $("#curriculum").slideDown();
                document.getElementById("btnCurr").classList.add("active");

                $("#contatti").slideUp();
                document.getElementById("btnCont").classList.remove("active");
                break;

            case 4:
                $("#home").slideUp();
                document.getElementById("btnHome").classList.remove("active");

                $("#competenze").slideUp();
                document.getElementById("btnComp").classList.remove("active");

                $("#progetti").slideUp();
                document.getElementById("btnProg").classList.remove("active");

                $("#curriculum").slideUp();
                document.getElementById("btnCurr").classList.remove("active");

                $("#contatti").slideDown();
                document.getElementById("btnCont").classList.add("active");
                break;

            default:
                break;
        }
    }
}




















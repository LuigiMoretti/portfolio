

cambiaPagina(0);

$('main.progetti').click(function () {
    console.log()
    $(this).addClass("cliccato");
    $(this).parent().css("position", "sticky");
    $('body').css("overflow", "hidden");
    $(this).children("button").on("click", () => {
        $('main.progetti').removeClass('cliccato');
    })
})


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




















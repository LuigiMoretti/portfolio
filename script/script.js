cambiaPagina(0);



$(window).on("resize", function () {
    if ($("body").width() >= 768) {
        $("li").children().hide();
        $("li .active").show();
        $("header").addClass("compresso");

        $("header").on("mouseover", () => {
            $("header").removeClass("compresso");
            setTimeout(() => {
                $("li").children().show();
            }, 200);

        });
        $("header").on("mouseleave", () => {
            $("li").children().hide();
            $("li .active").show();
            $("header").addClass("compresso");

        });
    } else {
        $("li").children().show();
        $("header").removeClass("compresso");
    }
    console.log($("body").width());
});




















function cambiaPagina(p) {
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
        default:
            break;
    }
}
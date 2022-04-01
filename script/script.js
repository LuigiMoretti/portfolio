cambiaPagina("home");





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
        $("main").slideUp();
        $(".nav-link").removeClass("active");
        $("#" + p).slideDown();
        document.getElementById("btn" + p).classList.add("active");
    }
}









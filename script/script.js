cambiaPagina(0);


























function cambiaPagina(p) {
    switch (p) {
        case 0:
            document.getElementById("home").hidden = false;
            document.getElementById("btnHome").classList.add("active");

            document.getElementById("competenze").hidden = true;
            document.getElementById("btnComp").classList.remove("active");

            document.getElementById("curriculum").hidden = true;
            document.getElementById("btnCurr").classList.remove("active");

            document.getElementById("progetti").hidden = true;
            document.getElementById("btnProg").classList.remove("active");

            document.getElementById("contatti").hidden = true;
            document.getElementById("btnCont").classList.remove("active");
            break;


        case 1:
            document.getElementById("home").hidden = true;
            document.getElementById("btnHome").classList.remove("active");

            document.getElementById("competenze").hidden = false;
            document.getElementById("btnComp").classList.add("active");

            document.getElementById("curriculum").hidden = true;
            document.getElementById("btnCurr").classList.remove("active");

            document.getElementById("progetti").hidden = true;
            document.getElementById("btnProg").classList.remove("active");

            document.getElementById("contatti").hidden = true;
            document.getElementById("btnCont").classList.remove("active");
            break;

        case 2:
            document.getElementById("home").hidden = true;
            document.getElementById("btnHome").classList.remove("active");

            document.getElementById("competenze").hidden = true;
            document.getElementById("btnComp").classList.remove("active");

            document.getElementById("progetti").hidden = false;
            document.getElementById("btnProg").classList.add("active");

            document.getElementById("curriculum").hidden = true;
            document.getElementById("btnCurr").classList.remove("active");

            document.getElementById("contatti").hidden = true;
            document.getElementById("btnCont").classList.remove("active");
            break;


        case 3:
            document.getElementById("home").hidden = true;
            document.getElementById("btnHome").classList.remove("active");

            document.getElementById("competenze").hidden = true;
            document.getElementById("btnComp").classList.remove("active");


            document.getElementById("progetti").hidden = true;
            document.getElementById("btnProg").classList.remove("active");

            document.getElementById("curriculum").hidden = false;
            document.getElementById("btnCurr").classList.add("active");

            document.getElementById("contatti").hidden = true;
            document.getElementById("btnCont").classList.remove("active");
            break;

        case 4:
            document.getElementById("home").hidden = true;
            document.getElementById("btnHome").classList.remove("active");

            document.getElementById("competenze").hidden = true;
            document.getElementById("btnComp").classList.remove("active");

            document.getElementById("curriculum").hidden = true;
            document.getElementById("btnCurr").classList.remove("active");

            document.getElementById("progetti").hidden = true;
            document.getElementById("btnProg").classList.remove("active");

            document.getElementById("contatti").hidden = false;
            document.getElementById("btnCont").classList.add("active");
            break;
        default:
            break;
    }
}
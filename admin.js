$(function () {
    var id=7;
    const ajaxHivas = new Ajaxhívás();
    let apivegpont = "http://localhost:3000/termekek";
    ajaxHivas.getAjax(apivegpont, termekLista);

    function termekLista(termekek) {
        const szuloElem = $("table");
        const sablonElem = $(".termek");
        szuloElem.empty();
        sablonElem.show();
        termekek.forEach(function (elem) {
            let node = sablonElem.clone().appendTo(szuloElem);
            const obj = new TermekAdmin(node, elem);

        });
        sablonElem.hide(); //sablonelem eltávolítása
    }
    $(window).on("torles", () => {
        console.log(event.detail.id)
        ajaxHivas.deleteAjax(apivegpont, event.detail.id)
        console.log("Töröltem magam!")

    });
    $(window).on("modositas", () => {
        console.log("Módosítottam magam!")
        var adat={
            id: event.detail.id,
            nev: $('form').serializeArray()[0].value,
            leiras:$('form').serializeArray()[1].value,
            ar:$('form').serializeArray()[2].value,
            kep: "kepek/kep_1.jpeg"
        };
        ajaxHivas.putAjax(apivegpont,adat,event.detail.id)


    });

    $("#Katt").click(function () {
        console.log($('form').serializeArray()[0].value)
        id++;
        var adat={
            id: id,
            nev: $('form').serializeArray()[0].value,
            leiras:$('form').serializeArray()[1].value,
            ar:$('form').serializeArray()[2].value,
            kep: "kepek/kep_1.jpeg"
        };
        ajaxHivas.postAjax(apivegpont,adat,event.detail.id)

    });

});
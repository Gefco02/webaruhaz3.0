class Ajaxhívás {
    constructor() { }

    getAjax(fajlnev, myCallback) {
        const termekek = [];
        $.ajax({
            url: fajlnev,
            type: "GET",
        success: function (result) {
                result.forEach((element) => {
                    termekek.push(element);
                });

                myCallback(termekek);
            },
        });
    }

    postAjax(fajlnev, adat) {
        const termekek = [];
        $.ajax({
            url: fajlnev,
            type: "POST",
            data:adat,
        success: function (result) {
                
            },
        });
    }

    putAjax(fajlnev, adat,id) {
        const termekek = [];
        $.ajax({
            url: fajlnev+"/"+id,
            type: "PUT",
            data:adat,
        success: function (result) {
                
            },
        });
    }
    patchAjax(fajlnev, adat,id) {
        const termekek = [];
        $.ajax({
            url: fajlnev+"/"+id,
            type: "PATCH",
            data:adat,
        success: function (result) {
                
            },
        });
    }

    deleteAjax(fajlnev,id) {
        const termekek = [];
        $.ajax({
            url: fajlnev+"/"+id,
            type: "DELETE",
        success: function (result) {
                
            },
        });
    }

}
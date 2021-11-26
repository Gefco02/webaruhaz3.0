$(function () {
  var szamlalo
  const kosar = new Kosar()
  const ajaxHivas = new Ajaxhívás();
  let apivegpont = "http://localhost:3000/termekek";
  ajaxHivas.getAjax(apivegpont, termekLista);

  function termekLista(termekek) {
    const szuloElem = $('.termekek')
    const sablonElem = $('#sablon .termek')
    szuloElem.empty();
    sablonElem.show();
    termekek.forEach(function (elem) {
      let node = sablonElem.clone().appendTo(szuloElem)
      const obj = new TermekAruhaz(node, elem)
    })
    sablonElem.hide() //sablonelem eltávolítása

    
  }
  $(window).on('termekKosarba', (event) => {
    //itt hívjuk meg a kosarat és belepakoljuk a kosár tömbbe az
    //aktuális termék adatait
    
    
    
    kosar.setKosar(event.detail)
    console.log(kosar.kosarTomb)
    console.log(event.detail)
    
  })



  $("#Katt").click(function () {
    let apivegpontuj = "http://localhost:3000/termekek/?q=" + $('form').serializeArray()[0].value;
    $('.termek').html = "";
    if (apivegpontuj == "http://localhost:3000/termekek/?q=") {
      ajaxHivas.getAjax(apivegpont, termekLista);
      console.log('asd');
    } else {
      ajaxHivas.getAjax(apivegpontuj, termekLista);
    }
    console.log($('form').serializeArray()[0].value);
  });
  $("#menu").change(function () {
    $('#elso').remove();
    let alfa = $('form').serializeArray()[1].value;
    //console.log(apivegpontuj);
    if (alfa == "arcsok") {
      let apivegpontuj = "http://localhost:3000/termekek?_sort=ar&_order=desc"
      ajaxHivas.getAjax(apivegpontuj, termekLista);
    } else {
      let apivegpontuj = "http://localhost:3000/termekek?_sort=ar&_order=asc"
      ajaxHivas.getAjax(apivegpontuj, termekLista);

    }

  });

})

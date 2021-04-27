$.getJSON("../lang.json", function(json){

    if (!localStorage.getItem("lang")){
        localStorage.setItem("lang", "en");
    }
    let def = localStorage.getItem("lang");
    $(".lang").each(function(index,value){
        $(this).text(json[def][$(this).attr("key")]);
    });//Cierra each

    /*CLICK FUNCTIONS*/
    $(".translate").click(function(){
        let lang = $(this).attr("id");
        localStorage.setItem("lang",lang);
        $(".lang").each(function(index,value){
            $(this).text(json[lang][$(this).attr("key")]);
        });//Cierra each
    });//Cierra click
});//Cierra JSON



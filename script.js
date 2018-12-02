$(document).ready(function(){
    var x = document.getElementById("miForma");
    $("#Aceptar").click(function(){
        var s1 = $("#s1").val();
        var text = $('#DynamicValueAssignedHere').find('input[name="FirstName"]').val();
        if (s1 == "V"){
            $("#respuesta-container").show();
           // alert("Respuesta correcta");
            $("h1").text("Correcto");
        }else{
            $("h1").text("Incorrecto");
        }
        
    });

    $("select").change(function(){
        var s1 = $("#s1").val();
        var s2 = $("#s2").val();
        var s3 = $("#s3").val();
        var s4 = $("#s4").val();

        var respuesta = (s1=="-b" && s2=="b" && s3==4 && s4==2);
        if (respuesta == true){
            $("#respuesta-container").show();
           // alert("Respuesta correcta");
            $("#respuesta").show();
        }else{
            $("h1").hide();
            $("#respuesta-container").hide();
        }
    });
});

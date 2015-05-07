function check_list(name){
  if($("#listado_cesta li").length>0){
    $("#listado_cesta li").each(function(index) {
      console.log($(this).html())
      if($(this).text()!=name){
        return "if";
      }else{
        return "else";
      }
    });
  } 
}

//(function() {
$(document).ready(function(){
  if(Modernizr.draganddrop){
    var x = 0;
    $.event.props.push("dataTransfer");

    $('#frutas img').on({
      dragstart: function(e) {
        //$('#listado_cesta').html("texto" + e.target.id);
        e.dataTransfer.setData("text/html", this.id);
      }
    });

    $('#cesta').on({
      dragover: function(e) {
        e.stopPropagation();
        e.preventDefault();
        //$('#listado_cesta').html("dragover" + e.target.id);
      },
      drop: function(e) {
        e.stopPropagation();
        e.preventDefault();
        var img_fruta = e.dataTransfer.getData("text/html");
        //console.log(check_list(img_fruta));
        $('#listado_cesta').append('<li title="' + img_fruta + '">' + img_fruta + "</li>");
        b = e.target.id
        //$('#' + b).append(document.getElementById(img_fruta));
        $('#cesta').append(document.getElementById(img_fruta));
        //e.target.appendChild(document.getElementById(img_fruta));
      },
      change: function () {
        console.log("entro" + this.value)
      }
    });

    $('#frutas').on({
      dragover: function(e) {
        e.stopPropagation();
        e.preventDefault();
        //$('#listado_cesta').html("dragover" + e.target.id);
      },
      drop: function(e) {
        e.stopPropagation();
        e.preventDefault();
        var img_fruta = e.dataTransfer.getData("text/html");
        $("#listado_cesta [title='" + img_fruta + "']" ).remove();
        b = e.target.id
        //$('#' + b).append(document.getElementById(img_fruta));
        $('#frutas').append(document.getElementById(img_fruta));
        //e.target.appendChild(document.getElementById(img_fruta));
      }
    });
    
  }
})
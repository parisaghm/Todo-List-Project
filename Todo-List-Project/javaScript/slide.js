var array = [];
$(".ul_current").on('click','li',function(){
 $(this).toggleClass("completed");
});

$(".ul_current").on('click','.icon-delete',function(){
$(this).parent().fadeOut(500,function(){
    $(this).remove();
});
});




    

$("input[type='text']").keypress(function(event){
if(event.which === 13){
   var text= $('#input_listName').val();
   $(this).val("");
   $('.ul_current').append('<li><span class = "icon-delete"><i class="fa fa-trash"></i></span>'+ text);
   var number = $('.ul_current li').length;
     if(number%5 === 0){
        getUsers(function(currentVideo) {
            $('.js-modal').find('#player').attr('src',currentVideo.attributes.preview_src); 
            $('.modal-delete').show();
        });
    }
}
});




$(".fa-plus").click(function(){
 $("input").fadeToggle();
});

function getUsers(callback){
    $.ajax({
        url: 'https://alinaseriapi.herokuapp.com/mostview',
        method: 'GET', 
        success: function(response){
            var randomIndex = Math.floor(Math.random() * response.data.length);
            callback(response.data[randomIndex]);
        },
        error: function(error) {
            console.log(error);
        }
    })
}





var viewer_modal;
 arr=[
    {url:"./images/1.png",page:1},
    {url:"./images/2.png",page:2},
    {url:"./images/3.jpg",page:3},
    {url:"./images/4.png",page:4},
    {url:"./images/5.png",page:5},
    
]


$(function() {
    var  index=0;
    
    $("#btn").click(function(){
        $('#imageViewerModal').modal('show')
    })
   
   $('#img-viewer').attr('src',`${arr[index].url}`)

    $('.control-next').click(function() {
         index = index + 1;
         index = index > (arr.length - 1) ? 0 : index;
        $('#img-viewer').attr('src',`${arr[index].url}`)
    })
    $('.control-prev').click(function() {
     
        index = index - 1;
        index = index < 0 ? (arr.length - 1) : index;
        $('#img-viewer').attr('src',`${arr[index].url}`)
    })
})
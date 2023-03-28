var viewer_modal;
 arr=[
    {url:"./images/1.png",page:1},
    {url:"./images/2.png",page:2},
    {url:"./images/3.jpg",page:3},
    {url:"./images/4.png",page:4},
    {url:"./images/5.png",page:5},
    
]





$(function() {
    var pageString = '[Page(pageNo=1, attachmentBase64="./images/1.png",attachmentType=image/jpeg),Page(pageNo=2, attachmentBase64="./images/2.png",attachmentType=image/jpeg)]';

// Parse the string into a JavaScript array of objects
var pageArray = $.map(pageString.slice(1, -1).split(','), function(page) {
    var pageNo = page.match(/pageNo=(\d+)/)[1];
    var attachmentBase64 = page.match(/attachmentBase64="([^"]*)"/)[1];
    var attachmentType = page.match(/attachmentType=([\w/-]+)/)[1];
    return { pageNo: pageNo, attachmentBase64: attachmentBase64, attachmentType: attachmentType };
  });
  
  // Convert the array to a JSON string
  var jsonPages = JSON.stringify(pageArray);
  console.log(jsonPages);


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
var obj;

function upDate(previewPic){
    document.getElementById('image').style.background="url('"+previewPic.src+"')";
}
   
function unDo(){
    document.getElementById('image').style.background='#8e68ff';
    document.getElementById('image').style.backgroundImage="url('')";
}
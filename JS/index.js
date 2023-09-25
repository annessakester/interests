 <script>
    var i = 0;
    var images = [];
    var time = 3000;
     
    images[0] = 'images/volunteer.png';
    images[1] = 'images/coffee.png';
    images[2] = 'images/join.png';
     
function changeImg() {
    document.slide.src = images[i];
    
    if(i < images.length - 1) {
       i++
       } else {
           i = 0;
       }
    
    setTimeout("changeImg()", time);
}

window.onload = changeImg;
</script>  
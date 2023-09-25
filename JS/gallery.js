<script>
 document.getElementById("firefighter").addEventListener("mouseover", bigImg);
 document.getElementById("firefighter").addEventListener("mouseout", normalImg);
 document.getElementById("work").addEventListener("mouseover", bigImg);
 document.getElementById("work").addEventListener("mouseout", normalImg);
 document.getElementById("silhouette").addEventListener("mouseover", bigImg);
 document.getElementById("silhouette").addEventListener("mouseout", normalImg);
 document.getElementById("dance").addEventListener("mouseover", bigImg);
 document.getElementById("dance").addEventListener("mouseout", normalImg);
    
    function bigImg() {
        firefighter.style.height="200px";
        firefighter.style.width="200px";
        work.style.height="200px";
        work.style.width="200px";
        silhouette.style.height="200x";
        silhouette.style.width="200px";
        dance.style.height="200px";
        dance.style.width="200px";
    }
    function normalImg() {
       firefighter.style.height= "100px";
       firefighter.style.width= "100px";
       work.style.height= "100px";
       work.style.width= "100px";
       silhouette.style.height= "100px";
       silhouette.style.width= "100px";
       dance.style.height= "100px";
       dance.style.width= "100px";
       
    }
window.onload = normalImg;
</script>
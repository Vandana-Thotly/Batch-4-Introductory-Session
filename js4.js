<!DOCTYPE html>
<html>
    
    <body>
        <img id="myimage" onclick="changeimage()" src="bulboff.jpeg" width="250" height="350">
        <script>
            function changeimage()
            {
                var image=document.getElementById('myimage');
                if(image.src.match("bulboff.jpeg"))
                {
                    image.src="bulbon.jpeg";
                }
                else{
                    image.src="bulboff.jpeg";
                }
                       
            }
        </script>
    </body>

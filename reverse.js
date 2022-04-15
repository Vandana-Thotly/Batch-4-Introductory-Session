<!DOCTYPE html>
<html> 
    <body>
        <h2><number</h2>
        <p id="demo"></p>
        <p id="demo1"></p>
        <p id="demo2"></p>
        <script>
            var num=1234;
            var rev = 0,rem;
            while (num>0)
            {
                rem = num % 10;
                rev = rev * 10 + rem ;
                num= Math.floor(num/10);
            }
            document.getElementById("demo").innerHTML=rev;
            
        </script>
    </body>
</html>


<!DOCTYPE html>
<html> 
    <body>
        <p id="demo"></p>
        <p id="demo1"></p>
        <p id="demo2"></p>
        <p id="demo3"></p>
        <script>
            const v1=new Date().getMinutes();
            let a;
            if(v1<10)
            {
                a="Helooo";
            }
            else
            {
                a="Hiiii";
            }
            document.getElementById("demo").innerHTML=a;
        </script>
    </body>
</html>

//else if
<!DOCTYPE html>
<html> 
    <body>
        <p id="demo"></p>
        <p id="demo1"></p>
        <p id="demo2"></p>
        <p id="demo3"></p>
        <script>
            const v1=new Date().getMinutes();
            let a;
            if(v1<10)
            {
                a="Helooo Vandana";
            }
            else if(v1<30)
            {
                a="Hiiii Saraswathi";
            }
            else
            {
                a="Good Morning Vandana";
            }
            document.getElementById("demo").innerHTML=a;
        </script>
    </body>
</html>

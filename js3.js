<!DOCTYPE html>
<html>
    
    <body>

        <h1>Welcome to first java script</h1>
        <p id="demo"></p>
        <p id="demo1"></p>
        <p id="demo2"></p>
        <p id="demo3"></p>
        <script>
            function v1(a,b)
            {
                return a+b;
            }
          
            document.getElementById("demo").innerHTML=v1(4,3);  
            function v2(c,d)
            {
                return c*d;
            }
          
            document.getElementById("demo1").innerHTML=v2(4,3);  
            function v3(e,f)
            {
                return e-f;
            }
            document.getElementById("demo2").innerHTML=v3(4,3); 
            function v4(g,h)
            {
                return g/h;
            }
            document.getElementById("demo3").innerHTML=v4(12,3);
        </script>
    </body>

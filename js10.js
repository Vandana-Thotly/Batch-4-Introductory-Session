<!DOCTYPE html>
<html> 
    <body>
        <p id="demo"></p>
        <p id="demo1"></p>
        <p id="demo2"></p>
        <p id="demo3"></p>
        <p id="demo4"></p>
        <p id="demo5"></p>
        <p id="demo6"></p>
        <p id="demo7"></p>
        <p id="demo8"></p>
        <script>
            const a = new Date();
            document.getElementById("demo").innerHTML = a.getTime();
            document.getElementById("demo1").innerHTML = a.getFullYear();
            document.getElementById("demo2").innerHTML = a.getMonth() + 1;
            document.getElementById("demo3").innerHTML = a.getDate();
            document.getElementById("demo4").innerHTML = a.getHours();
            document.getElementById("demo5").innerHTML = a.getMinutes();
            document.getElementById("demo6").innerHTML = a.getSeconds();
            document.getElementById("demo7").innerHTML = a.getDay();

        </script>
    </body>
</html>

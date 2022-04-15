class rectangle{
    int area(int a,int b){
        return a*b;
    }
}
class square extends rectangle{
    int area(int a)
    {
        return a*a;
    }
}
class circle extends square{
    int area(int a)
    {
        return 3.14*a*a;
    }
}
public class Main
{
    public static void main(string[] args){
        circle c=new circle();
        System.out.println(c.area(11,12));
        System.out.println(c.area(11));
        System.out.println(c.area(11));
    }
}


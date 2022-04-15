class Employee{  
 int a=40;  
}  
class lawyer extends Employee{  
 int b=10;  
 public static void main(String args[]){  
   lawyer p=new lawyer();  
   System.out.println(p.a);  
   System.out.println(p.b);  
}  
}
//Multilevel Inheritance
  class A{  
    void A1(){
        System.out.println("CLASS A");
    }  
}  
class B extends A{  
    void B1(){
        System.out.println("CLASS B");
    }  
}  
class C extends B{  
    void C1(){
        System.out.println("CLASS C");
    }  
}  
class D{  
    public static void main(String args[]){  
        C d=new C();  
        d.C1();  
        d.B1();  
        d.A1();  
    }
}  

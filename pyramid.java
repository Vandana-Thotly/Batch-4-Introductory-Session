public class Main
{
	public static void main(String[] args) {
	    int num=5;
	    int i=1;
	    int j=1;
	    while(i<=num){
	        while(j<=i)
	        {
	            System.out.print("*");
	            j++;
	        }
	        System.out.print("\n");
	        i++;
	        j=1;
	    }
	    
	}
}

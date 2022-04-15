import java.util.Scanner;
class Sum1
{
	public static void main(String args[])
	{
		Scanner sc=new Scanner(System.in);
		int i;
		System.out.println("Enter 10 integers:");
		double sum=0;
		for(i=1;i<=10;i++)
		{
			int n=sc.nextInt();
			sum+=n;
		}
		System.out.println(Math.sqrt(sum));
	}
}

import java.util.Scanner
public class sum2Digits
{
	public static void main(String args[])
	{
		// Scanner object to get user input
		Scanner in=new Scanner(System.in);
		
		// getting valuesd in variables
		int a=in.nextInt();
		int b=in.nextInt();
		
		//printing sum
		System.out.println("Sum is :" + (a+b));
	}
}

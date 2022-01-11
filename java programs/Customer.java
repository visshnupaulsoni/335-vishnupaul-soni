

public class Customer
{
	String name=null;
	int password;
	Customer(String p,int q)
{
	name=p;
	password=q;
}
	boolean login(String n,int p)
	{
	if((name==n) && (password==p))
	{
	System.out.println("login success");	
	return true;
	}
	else
	{
	System.out.println("login fail");	
	return false;
	}

}
}



class Shopping
{
	public static void main(String args[])
    {
	int amt=1500; 

		try {
			if (amt>1000)
            {
				System.out.println("payment done");
				}
				else{
					System.out.println("payment denied");
				}
		} catch (Exception e) {
	
			System.out.println("exception is:"+e.getMessage());
		}
		
	
	}
    }	

	
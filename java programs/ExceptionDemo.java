public class ExceptionDemo{
public static void main(String args[]){
    int a=10;
    int b=0;
    try {
        int c=a/b;
        System.out.println("c is "+c); 
    } catch (Exception e) {
        System.out.println("exception is:"+e.getMessage());
    }

}
}
 

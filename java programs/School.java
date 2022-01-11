
interface Student
{
void  getread();
}
interface Teacher
{
void getTeach();
}
class School implements Student{
public void getread()
{
System.out.println("getting knowledge");
}
void getTeach()
{
  System.out.println("share knowledge");
}
public static void main(String args[])
{
School h=new School();
h.getread();
h.getTeach();
}
}
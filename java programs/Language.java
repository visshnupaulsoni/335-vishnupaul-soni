
class Language
{
public void getLearn()
{
System.out.println("common language");
}
}
class Java extends Language
{
public void getLearn()
{
System.out.println("java language");
}
}
class Python extends Language 
{
public void getLearn()
{
System.out.println("python language");
}
}

class Main{
public static void main(String args[]){
Language l1=new Java();
Language l2=new Python();
l1.getLearn();
l2.getLearn();
}
}



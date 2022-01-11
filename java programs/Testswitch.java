class Testswitch
{
public static void main(String args[])
{
int day=5;
String week=null;

switch(day){
	case 1:week="monday";break;
	case 2:week="tuesday";break;
	case 3:week="wednesday";break;
	case 4:week="thursday";break;
	case 5:week="friday";break;
	case 6:week="saturday";break;
	default:week="sunday";break;
}System.out.println("day is"+week);
}
}



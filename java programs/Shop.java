class Shop
{
 int price;
String product;
public Shop(String product,int price){
    this .product=product;
    this.price=price;

}

public static void main(String args[]){
Shop[] p1=new Shop[6];
p1[0]=new Shop("pen",20);
p1[1]=new Shop("book",100);
p1[2]=new Shop("cup",90);
p1[3]=new Shop("lamp",1500);
p1[4]=new Shop("table",2200);
for(int i=0;i<p1.length;i++){
    System.out.println("cart products"+p1[i]);
}

    
}
}




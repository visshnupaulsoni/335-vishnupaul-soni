document.write("<hr>creating class and object of the class<hr>");
class Bus{
    constructor(pr,clr){
        this.price=pr;
        this.color=clr;
    } 
    display(){
        document.write('<br> objet  price is ' +this.price);
    document.write(' object color is ' +this.color);
    }
    setprice=function(x){
        this.price=x
    }
    applyDiscount=function(percentage){
        this.price=this.price-(this.price*percentage/100);
    }

};



class LuxaryBus extends Bus{
       constructor(pr,clr,withAc){
           super(pr,clr);
           this.withAc=withAc;
       }
    display(){
        super.display();
        //using string literals  in es6
    var displaystring=`<br> object"s has AC is *****  ${this.withAc}`;
  document.write(displaystring);  

}

   };
   var lbus1=new LuxaryBus(1000,"blue",true)


public class HR extends EmployeeDetail {
    private int salary;
    private String performance;
    public void confidentialDetails(int s,String p) {
    this.salary=s;
    this.performance=p;
    System.out.println("salary=="+salary);
    System.out.println("performance=="+performance);
    }
    public static void main(String[] args) {
    HR hr =new HR();
    hr.confidentialDetails(5000,"good");
    }
    }
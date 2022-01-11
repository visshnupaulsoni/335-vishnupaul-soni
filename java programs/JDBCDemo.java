import java.sql.*;

public class JDBCDemo {
   static final String DB_URL = "jdbc:mysql://localhost/hotels";
   static final String USER = "root";
   static final String PASS = "rootroot";
   static final String QUERY = "SELECT * FROM Customer";

   public static void main(String[] args) {
      // Open a connection
      try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
         Statement stmt = conn.createStatement();
         ResultSet rs = stmt.executeQuery(QUERY);) {
         // Extract data from result set
         while (rs.next()) {
            // Retrieve by column name
            System.out.print("ID: " + rs.getInt("id"));
            System.out.print(", Age: " + rs.getInt("age"));
            System.out.print(", First: " + rs.getString("name"));
            System.out.println(", Last: " + rs.getString("custID"));
         }
      } catch (SQLException e) {
         e.printStackTrace();
      } 
//String updatesql = "insert into customer values (\monu\",88888,01);";
//try {statement stmt = 
    
//} catch (Exception e) {
    //TODO: handle exception
} 
//}
   }
   

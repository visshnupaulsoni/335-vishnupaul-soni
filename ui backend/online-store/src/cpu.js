
const os = require('os');
  
var cpu_s=os.cpus();
var no_of_logical_core=0;


var total_memory = os.totalmem();
var total_mem_in_kb = total_memory/1024;
var total_mem_in_mb = total_mem_in_kb/1024;
var total_mem_in_gb = total_mem_in_mb/1024;
   
total_mem_in_kb = Math.floor(total_mem_in_kb);
total_mem_in_mb = Math.floor(total_mem_in_mb);
total_mem_in_gb = Math.floor(total_mem_in_gb);
   
total_mem_in_mb = total_mem_in_mb%1024;
total_mem_in_kb = total_mem_in_kb%1024;
total_memory = total_memory%1024;


cpu_s.forEach(element => { 
    no_of_logical_core++;
    console.log("Logical core "
            + no_of_logical_core + " :");
    console.log(element); 
}); 
  
console.log("total number of logical core is "
        + no_of_logical_core);

// Display memory size
console.log("Total memory: " + total_mem_in_gb + "GB "
          + total_mem_in_mb + "MB " + total_mem_in_kb
          + "KB and " + total_memory + "Bytes");
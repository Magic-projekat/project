/**funkcija za pretraživanje tabele**/

function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("unos");
  filter = input.value.toUpperCase();
  table = document.getElementById("Tabela");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}



function edit_row(n)
{
 document.getElementById("edit_button"+n).style.display="none";
 document.getElementById("save_button"+n).style.display="block";
	
 var usluga=document.getElementById("usluga_row"+n);
 var cijena=document.getElementById("cijena_row"+n);

	
 var usluga_data=usluga.innerHTML;
 var cijena_data=cijena.innerHTML;

 usluga.innerHTML="<input type='text' id='usluga_text"+n+"' value='"+usluga_data+"'>";
 cijena.innerHTML="<input type='text' id='cijena_text"+n+"' value='"+cijena_data+"'>";

}

function save_row(n)
{
 var usluga_val=document.getElementById("usluga_text"+n).value;
 var cijena_val=document.getElementById("cijena_text"+n).value;


 document.getElementById("usluga_row"+n).innerHTML=usluga_val;
 document.getElementById("cijena_row"+n).innerHTML=cijena_val;
 

 document.getElementById("edit_button"+n).style.display="block";
 document.getElementById("save_button"+n).style.display="none";
}

function delete_row(n)
{
 document.getElementById("row"+n+"").outerHTML="";
}

function add_row()
{
 var nova_usluga=document.getElementById("nova_usluga").value;
 var nova_cijena=document.getElementById("nova_cijena").value;
 
	
 var table=document.getElementById("Tabela");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='usluga_row"+table_len+"'>"+nova_usluga+"</td><td id='cijena_row"+table_len+"'>"+nova_cijena+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("nova_usluga").value="";
 document.getElementById("nova_cijena").value="";

}
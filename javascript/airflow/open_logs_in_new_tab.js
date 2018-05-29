/*
HOW TO USE

Install a chrome extension: https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija?hl=en

This extension run your custom script once a page loads.

- Open Airflow homepage. 
- Click on the cjs extension button. 
- In the dropdown at the top left, use the host and port for Airflow.
- Copy paste the script below, and reload the page.

Once you've done this successfully, whenever you click on a task, you will see a hyperlink to open the logs in a new tab.
*/

var add_logs_link = function(server, dag_id, task_id, execution_date){
	var modal = document.getElementById("btn_success_downstream").parentNode.parentNode

	var link_id = "my_hyper_link"
	var elem = document.getElementById(link_id)
	if (elem !== undefined && elem !== null){
		elem.parentNode. removeChild(elem);	
	} else {
		var node = document.createElement("HR");                 // Create a <li> node
		modal.appendChild(node);  	
	}

	var search_param = "task_id=" + task_id + "&dag_id=" + dag_id + "&execution_date=" + execution_date
	var link = server + "/admin/airflow/log?" + search_param
	console.log(link)

	var a = document.createElement('a');
	var linkText = document.createTextNode("View log in new Tab");
	a.appendChild(linkText);
	a.id = link_id
	a.title = "View Logs";
	a.href = link
	a.target = "_blank"
	modal.appendChild(a);

}



var tspans = document.getElementsByTagName("tspan")

var callback = function(evt){
	console.log(evt.target.innerHTML)

	var task_id = evt.target.innerHTML
	var execution_date = document.getElementsByTagName("select")[0].value
	var server = window.location.origin
	var searchParams = new URLSearchParams(window.location.search);
	var dag_id = searchParams.get("dag_id")

	console.log(document.getElementById("execution_date"))
	console.log(document.getElementById("execution_date").innerHTML)

	add_logs_link(server, dag_id, task_id, execution_date)
}
for (var i=0;i<tspans.length;i++){
	name = tspans[i].innerHTML

	if (tspans[i].innerHTML.length > 0) {
		
		tspans[i].addEventListener("click", callback, false);
	}
}


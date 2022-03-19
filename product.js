let url = new URL(location.href);
let id = url.searchParams.get("id");
//console.log(id);

fetch("http://localhost:3000/api/products/"+id)
.then((res) => res.json())
.then((data) => {
    //console.log(data.name)
    document.getElementById("title").innerText = data.name
})
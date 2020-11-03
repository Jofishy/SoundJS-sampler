// automatically populate navigation
document.querySelectorAll("article .section").forEach(element=>{
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${element.id}`;
    a.innerText = element.id;
    li.appendChild(a);
    document.querySelector("nav.page-nav ul").appendChild(li);
});
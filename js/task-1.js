const liItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItem.length}`);
liItem.forEach(element => {
    console.log("Category:", element.querySelector('h2').textContent);
    const liElements = element.querySelectorAll('li');
    console.log("Elements:", liElements.length);
});

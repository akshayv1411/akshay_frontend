const button = document.querySelector(".btn-primary");
button.addEventListener("click", handleClick);
const div = document.querySelector('#container')

function handleClick() {
    console.log("Wait Loading.....!");
    fetch("https://p-9x7e.onrender.com/products/products")
        .then(response => response.json())
        .then((res) => {
            console.log(res.data);
            for(let i = 0 ; i < res.data.length; i++){
                const para = document.createElement('p');
                para.innerText = res.data[i]._id + "=====>>" + res.data[i].pName;
                div.append(para);
            }
        }
        )
}
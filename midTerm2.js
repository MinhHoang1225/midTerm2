function sell() {
    var imgNumber = document.getElementById("inputImg").value;
    var productName = document.getElementById("inputName").value;
    var productID = document.getElementById("inputID").value;
    var newPrice = document.getElementById("inputNPrice").value;
    var oldPrice = document.getElementById("inputOPrice").value;

    if (imgNumber >= 1 && imgNumber <= 3) {
        document.getElementById("name" + imgNumber).textContent = productName;
        document.getElementById("idpro" + imgNumber).textContent = "- " + productID;
        document.getElementById("newPrice" + imgNumber).textContent = newPrice + " vnd";
        document.getElementById("oldPrice" + imgNumber).textContent = oldPrice + " vnd";

    }
}
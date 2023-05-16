var buy = document.getElementById('buy');
console.log(buy);
buy.addEventListener('click', function () {
    window.location.href = 'purchase.html';
});

var don = document.getElementById('don');
don.addEventListener('click', function () {
    window.location.href = 'donate.html';
});

var dev = document.getElementById('dev');
dev.addEventListener('click', function () {
    window.location.href = 'development.html';
});

//cookies
function receiveData() {
    var data = localStorage.getItem("myData");
    if (data) {
        data = JSON.parse(data);
        alert("Received message: " + data.message);
    } else {
        alert("No data available.");
    }
}

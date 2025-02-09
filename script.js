let friendsList = [];

document.getElementById('addButton').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value.trim();
    if (name === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    friendsList.push(name);
    var li = document.createElement("li");
    li.textContent = name;
    document.getElementById('nameList').appendChild(li);
    document.getElementById('nameInput').value = '';
});

document.getElementById('drawButton').addEventListener('click', function() {
    if (friendsList.length === 0) {
        alert("Nenhum nome para sortear.");
        return;
    }
    var randomIndex = Math.floor(Math.random() * friendsList.length);
    var selectedName = friendsList[randomIndex];
    document.getElementById('result').textContent = "Amigo secreto é: " + selectedName;
});

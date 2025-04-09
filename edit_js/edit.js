
document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        request: "edit",
        name: document.getElementById('name').value,
        logo: document.getElementById('logo').value,
        prime: document.getElementById('prime').value,
        leader: document.getElementById('leader').value,
        manager: document.getElementById('manager').value, 
        trainer: document.getElementById('trainer').value, 
        kick: document.getElementById('kick').value
    };

    tg.sendData(JSON.stringify(formData)); 
    tg.close();
});
document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const prime = document.getElementById('prime').value;
    const leader = document.getElementById('leader').value;
    const manager = document.getElementById('manager').value;
    const trainer = document.getElementById('trainer').value;
    const kick = document.getElementById('kick').value;
    const fileInput = document.getElementById('logo');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const base64Data = e.target.result.split(',')[1];

            const formData = {
                name: name,
                logo: {
                    fileType: file.type,
                    fileData: base64Data
                },
                prime: prime,
                leader: leader,
                manager: manager,
                trainer: trainer,
                kick: kick,
                chat_id: tg.initDataUnsafe.user.id
            };

            const response = fetch(import.meta.env.VITE_API_URL + '/edit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            tg.close();
        };

        reader.readAsDataURL(file);
    } else {
        const formData = {
            name: name,
            logo: null,
            prime: prime,
            leader: leader,
            manager: manager,
            trainer: trainer,
            kick: kick,
            chat_id: tg.initDataUnsafe.user.id
        };

        const response = fetch(import.meta.env.VITE_API_URL + '/edit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        tg.close();
    }
});

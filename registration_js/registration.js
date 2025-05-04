document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const prime = document.getElementById('prime').value;
    const fileInput = document.getElementById('logo');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const arrayBuffer = e.target.result;
            const byteArray = Array.from(new Uint8Array(arrayBuffer));

            const formData = {
                name: name,
                prime: prime,
                logo: {
                    fileType: file.type,
                    fileBytes: byteArray  
                }, 
                chat_id: tg.initDataUnsafe.user.id
            };

            const response = fetch(import.meta.env.VITE_API_URL + '/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            tg.close();
        };

        reader.readAsArrayBuffer(file);
    } else {
        const formData = {
            name: name,
            prime: prime,
            logo: null,
            chat_id: tg.initDataUnsafe.user.id
        };

        const response = fetch(import.meta.env.VITE_API_URL + '/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        tg.close();
    }
});

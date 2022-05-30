document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let uploadFile = new XMLHttpRequest();
    const progress = document.getElementById('progress');

    uploadFile.onload = () => {
        if (uploadFile.status != 200) { // HTTP ошибка?
          // обработаем ошибку
          alert('Ошибка: ' + uploadFile.status);
          return;
        }
    }

    uploadFile.upload.onprogress = (e) => {
        if (e.lengthComputable) {
            let percentComplete = e.loaded / e.total;
            progress.value = percentComplete;
        }
    }

    uploadFile.upload.onload = () => {
        progress.value = 1.0;
    }

    uploadFile.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    const formData = new FormData(document.getElementById('form'));
    uploadFile.send(formData);
});

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let downloadFile = new XMLHttpRequest();
    const progress = document.getElementById('progress');

    downloadFile.onload = () => {
        if (downloadFile.status != 200) { // HTTP ошибка?
          // обработаем ошибку
          alert('Ошибка: ' + downloadFile.status);
          return;
        }
    }    

    downloadFile.onprogress = (e) => {
        if (e.lengthComputable) {
            let percentComplete = e.loaded / e.total;
            progress.value = percentComplete;
        }
    }

    // так как "e.total" на 17 строке равно нулю, а "e.lengthComputable = false"
    // заполняем прогрессбар на 100% по факту завершения загрузки
    downloadFile.onload = () => {
        if (downloadFile.readyState === downloadFile.DONE) {
            progress.value = 1.0;
        }
    }

    downloadFile.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    var formData = new FormData(document.getElementById('form'));
    downloadFile.send(formData);
});

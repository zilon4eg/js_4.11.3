document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const downloadFile = new XMLHttpRequest();

    downloadFile.addEventListener('progress', (e) => {
        console.log(downloadFile.onprogress);
        const progress = document.getElementById('progress');
        if (e.lengthComputable) {
            let percentComplete = (e.loaded / e.total);
            progress.value = percentComplete;
        }
    });

    downloadFile.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
    downloadFile.send();
});

// по заданию не очень понятно что нужно сделать
// e.lengthComputable почему-то всегда false
// e.total почему-то всегда 0
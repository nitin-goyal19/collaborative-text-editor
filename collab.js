let socket = io.connect('http://localhost:8080');

textEdit.addEventListener('input', () => {
    let content = textEdit.value;
    let data = {
        text: content
    };

    socket.emit('text', data);
});

socket.on('text', (data) => {
    let start = textEdit.selectionStart;
    textEdit.value = data.text;
    textEdit.selectionStart = start;
    textEdit.selectionEnd = start;
});
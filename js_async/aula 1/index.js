function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log(msg);
        resolve();
    }, tempo);
    });
}

esperaAi('esperando', 2000);
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log(msg);
        resolve();
    }, tempo);
    });
}

async function executa(){
    const fase = await esperaAi('esperando', 2000);
}


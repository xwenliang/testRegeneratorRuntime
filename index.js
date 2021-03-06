import regeneratorRuntime from 'regenerator-runtime';
//test regenerator
function sleep(time){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        }, time);
    });
};

async function test(){
    const time = 1000;
    await sleep(time);
    document.getElementById('errMsg').innerHTML = `I have waited for ${time} ms.`;
};

test();
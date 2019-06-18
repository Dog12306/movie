import alls from '@/mock/all.js'

function getall() {
    var alltu = alls.all();
    var promise = new Promise((resolve, reject) => {
        resolve(alltu);
    })
    return promise;
}

export default {
    getall
}
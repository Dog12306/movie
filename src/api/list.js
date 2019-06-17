import mock from 'mockjs'
const Random = mock.Random;

function getList() {
    var list = {
        
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 200)
    })
}

export default {
    getList
}
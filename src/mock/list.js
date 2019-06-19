import Mock from 'mockjs'
const Random = Mock.Random

function lylist() {
    var list = [{
        id: Random.id(),
        time: Random.time('HH:mm'),
        time1: Random.time('HH:mm'),
        title: '原版3D',
        hall: '1号厅（冠名招商中）',
        moth: Random.integer(20, 50),
    },
    {
        id: Random.id(),
        time: Random.time('HH:mm'),
        time1: Random.time('HH:mm'),
        title: '原版3D',
        hall: '2号厅（冠名招商中）',
        moth: Random.integer(20, 50),
    },
    {
        id: Random.id(),
        time: Random.time('HH:mm'),
        time1: Random.time('HH:mm'),
        title: '原版3D',
        hall: '3号厅（冠名招商中）',
        moth: Random.integer(20, 50),
    },
    {
        id: Random.id(),
        time: Random.time('HH:mm'),
        time1: Random.time('HH:mm'),
        title: '原版3D',
        hall: '4号厅（冠名招商中）',
        moth: Random.integer(20, 50),
    },
    {
        id: Random.id(),
        time: Random.time('HH:mm'),
        time1: Random.time('HH:mm'),
        title: '原版3D',
        hall: '5号厅（冠名招商中）',
        moth: Random.integer(20, 50),
    },
    {
        id: Random.id(),
        time: Random.time('HH:mm'),
        time1: Random.time('HH:mm'),
        title: '原版3D',
        hall: '6号厅（冠名招商中）',
        moth: Random.integer(20, 50),
    },
    ]
    return list;
}
export default {
    lylist
}



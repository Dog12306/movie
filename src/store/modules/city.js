import cityList from "@/api/cityData";
var state = {
    cityList,
    currentCity: '郑州',
    history:["北京", "上海", "广州"],
}
var getters = {

}
var mutations = {
    changeCity(state, city) {
        if (!city) {
            city = state.currentCity
        }
        state.history.push(city)
        state.history.shift()
        state.currentCity = city
    }

}
var actions = {

}
export default {
    namespaced: true,
    state, getters, mutations, actions
}


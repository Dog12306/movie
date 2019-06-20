import cityList from "@/api/cityData";
var state = {
    cityList,
    currentCity: '郑州'
}
var getters = {

}
var mutations = {
    changeCity(state, city) {
        if (!city) {
            city = state.currentCity
        }
        state.currentCity = city
    }

}
var actions = {

}
export default {
    namespaced: true,
    state, getters, mutations, actions
}


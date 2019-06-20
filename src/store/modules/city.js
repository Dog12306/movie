import cityList from "@/api/cityData";
var state = {
    cityList,
    currentCity: ''
}
var getters = {

}
var mutations = {
    changeCity(state, city) {
        state.currentCity = city
    }

}
var actions = {

}
export default {
    namespaced: true,
    state, getters, mutations, actions
}


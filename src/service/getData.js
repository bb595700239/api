import fetch from '../config/fetch'

var mainshops = (keyWord = '') => fetch('GET', '/api/index/commodity/commodityList', {keyWord: keyWord})

export {mainshops}

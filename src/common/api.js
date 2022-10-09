const baseUrl = 'https://express-shina.ru/'

const fetchData = async (endpoint, method = 'GET', data = {}) => { 
    let url = baseUrl + endpoint
    let options = {}
    if(['POST', 'UPDATE'].includes(method)) {
        options.headers = { 'Content-Type': 'application/json' }
        options.body = JSON.stringify(data)
    }
    try {
        const response = await fetch(url, options);
        return await response.json();
      } 
    catch (error) {
        console.error('Ошибка:', error);
        return false;
    }
}

export const api = {
    getPickPoints: async () => await fetchData('vacancy/geo-state', 'GET')
}
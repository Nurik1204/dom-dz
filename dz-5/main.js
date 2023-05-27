const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')


const convert = (elem, target, target2) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "convert.json")
        request.setRequestHeader("Contend-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (elem===som) {
                target.value = (elem.value / response.usd).toFixed(2)
                target2.value = (elem.value / response.euro).toFixed(2)
            }else if (elem===usd) {
                target.value = (elem.value *response.usd).toFixed(2)
                target2.value = (elem.value*response.euro / response.usd).toFixed(2)
            }
            else if(elem===euro){
                target.value = (elem.value * response.euro).toFixed(2)
                target2.value =(elem.value* response.usd/response.euro).toFixed(2)
            }
            elem.value === '' && (target.value = '')
            elem.value === '' && (target2.value='')
        }
    }
}

convert(som, usd, euro )
convert(usd, som, euro )
convert(euro, som, usd )
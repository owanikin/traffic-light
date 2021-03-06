let active = 0
let lights = document.querySelectorAll('.circle')

const switchLight = (currentLight) => {
    currentLight.classList.add(currentLight.getAttribute('color'))
}

const turnOffLight = (currentLight) => {
    currentLight.className = 'circle'
}

const changeLight = () => {
    return new Promise((res, rej) => {
        let currentLight = lights[active]
        if (active === 0){
            switchLight(currentLight)
            setTimeout(() => {
                turnOffLight(currentLight)
                active = 1
                res(active)
            }, 1000)
        }
        if (active === 1){
            switchLight(currentLight)
                setTimeout(() => {
                turnOffLight(currentLight)
                active = 2
                res(active)
            }, 3000)
        }
        if (active === 2) {
            switchLight(currentLight)
            setTimeout(() => {
                turnOffLight(currentLight)
                active = 0
                res(active)
            }, 4000)
        }
    })
}

(async function() {
    try {
        await changeLight()
        await changeLight()
        await changeLight()
    } catch (err){
        console.log(err)
    }
})();
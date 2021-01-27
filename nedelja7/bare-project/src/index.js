import axios from 'axios'

const divSelect = document.querySelector('#select')
const app = document.querySelector('#app')
const select = document.createElement('select')
const option1 = document.createElement('option')
option1.textContent = 'Brodovi'
option1.value = 'Brodovi'
const option2 = document.createElement('option')
option2.textContent = 'Lansiranja'
option2.value = 'Lansiranja'
select.append(option1, option2)
const buttonCheck = document.createElement('button')
buttonCheck.textContent = 'Check'

divSelect.append(select,buttonCheck)

buttonCheck.addEventListener('click', ()=>{
    app.innerHTML = ''

    if (select.value == 'Brodovi') {
        const addShipInfo = ship => {
            const shipImg = document.createElement('img')
            shipImg.src = ship.image ? ship.image : 'https://via.placeholder.com/100'
            shipImg.style.width = "200px"
            const shipName = document.createElement('p')
            // console.log(ship.ship_name);
            shipName.textContent = ship.ship_name
    
            app.append(shipImg, shipName)
        }
    
        // https://api.spacexdata.com/v3/ships
        axios.get('https://api.spacexdata.com/v3/ships')
            .then(res => {
                console.log(res);
                res.data.forEach(ship => addShipInfo(ship))
    
            })
    }
    else{
        const addLaunch = (launch) => {
            // if(launch.links.mission_patch_small) return // Не приказујемо ништа о лансирању које нема слику
            const img = document.createElement('img')
            img.src = launch.links.mission_patch_small ? launch.links.mission_patch_small : 'https://via.placeholder.com/100' // Не приказујемо слику, али не дирамо остатак информација о лансирању
            app.appendChild(img)
        }
        // https://api.spacexdata.com/v3/launches
        axios.get('https://api.spacexdata.com/v3/launches')
            .then(res => {
                // console.log(res.data[0].links.mission_patch_small)
                res.data.forEach(launch => addLaunch(launch))
            })
    }
})










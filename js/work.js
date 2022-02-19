
////////////////////////WORK////////////////////


let current_Work = document.querySelector("#current_Work")
let previus_work = document.querySelector("#previus_work")

let current_play = document.querySelector("#current_play")
let previus_play = document.querySelector("#previus_play")

let current_study = document.querySelector("#current_study")
let previus_study = document.querySelector("#previus_study")

let current_exercice = document.querySelector("#current_exercice")
let previus_exercice = document.querySelector("#previus_exercice")

let current_social = document.querySelector("#current_social")
let previus_social = document.querySelector("#previus_social")

let current_selfcare = document.querySelector("#current_selfcare")
let previus_selfcare = document.querySelector("#previus_selfcare")



document.addEventListener("DOMContentLoaded", () =>{
    dataFech_work()
})


const dataFech_work = async () =>{
    try{
        const res_work = await fetch("data.json")
        const data_work = await res_work.json()
        //console.log(data_work)
        

        //DELEGANDO EVENTOS
        document.addEventListener("click", (e) =>{
            //console.log(e.target.id)
            if(e.target.id === "Daily"){
                pintarDatosDaily(data_work)
            }else if (e.target.id === "Weekly"){
                pintarDatosWeekly(data_work)
            }else if(e.target.id === "Monthly"){
                pintarDatosMonthly(data_work)            }
        })

    }catch(error){
        console.log("error en data Work")
    }
}

const pintarDatosDaily = (data_work) =>{
    current_Work.textContent = data_work[0].timeframes.daily.current
    previus_work.textContent = data_work[0].timeframes.daily.previous

    current_play.textContent = data_work[1].timeframes.daily.current
    previus_play.textContent = data_work[1].timeframes.daily.previous

    current_study.textContent = data_work[2].timeframes.daily.current
    previus_study.textContent = data_work[2].timeframes.daily.previous

    current_exercice.textContent = data_work[3].timeframes.daily.current
    previus_exercice.textContent = data_work[3].timeframes.daily.previous

    current_social.textContent = data_work[4].timeframes.daily.current
    previus_social.textContent = data_work[4].timeframes.daily.previous

    current_selfcare.textContent = data_work[5].timeframes.daily.current
    previus_selfcare.textContent = data_work[5].timeframes.daily.previous
    
}

const pintarDatosWeekly = (data_work) =>{
    current_Work.textContent = data_work[0].timeframes.weekly.current
    previus_work.textContent = data_work[0].timeframes.weekly.previous

    current_play.textContent = data_work[1].timeframes.weekly.current
    previus_play.textContent = data_work[1].timeframes.weekly.previous

    current_study.textContent = data_work[2].timeframes.weekly.current
    previus_study.textContent = data_work[2].timeframes.weekly.previous

    current_exercice.textContent = data_work[3].timeframes.weekly.current
    previus_exercice.textContent = data_work[3].timeframes.weekly.previous

    current_social.textContent = data_work[4].timeframes.weekly.current
    previus_social.textContent = data_work[4].timeframes.weekly.previous

    current_selfcare.textContent = data_work[5].timeframes.weekly.current
    previus_selfcare.textContent = data_work[5].timeframes.weekly.previous
}

const pintarDatosMonthly = (data_work) =>{
    current_Work.textContent = data_work[0].timeframes.monthly.current
    previus_work.textContent = data_work[0].timeframes.monthly.previous

    current_play.textContent = data_work[1].timeframes.monthly.current
    previus_play.textContent = data_work[1].timeframes.monthly.previous

    current_study.textContent = data_work[2].timeframes.monthly.current
    previus_study.textContent = data_work[2].timeframes.monthly.previous

    current_exercice.textContent = data_work[3].timeframes.monthly.current
    previus_exercice.textContent = data_work[3].timeframes.monthly.previous

    current_social.textContent = data_work[4].timeframes.monthly.current
    previus_social.textContent = data_work[4].timeframes.monthly.previous

    current_selfcare.textContent = data_work[5].timeframes.monthly.current
    previus_selfcare.textContent = data_work[5].timeframes.monthly.previous
}



/////////////////////PLAY////////////////////////





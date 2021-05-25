let historico=[
    {
        id:"001",
        cdgatividade: "0",
        atividade: "Corrida",
        tempo:"00:35:06",
        distancia:"5,56",
        ritmo:"5,36",
        data:"18/05/2021",
        velocidadeMax:"8.2",
        velocidadeMed:"10,5",
        ganhoElev:"20",
        perdaElev:"26",
        hora:"17:29"
        
    },

    {
        id:"002",
        cdgatividade: "0",
        atividade: "Corrida",
        tempo:"00:45:16",
        distancia:"4,56",
        ritmo:"5,36",
        data:"19/05/2021",
        velocidadeMax:"8.2",
        velocidadeMed:"10,5",
        ganhoElev:"20",
        perdaElev:"26",
        hora:"16:41"
    },

    {
        id:"003",
        cdgatividade: "1",
        atividade: "Pedalada",
        tempo:"00:52:29",
        distancia:"7,41",
        ritmo:"5,36",
        data:"20/05/2021",
        velocidadeMax:"8.2",
        velocidadeMed:"10,5",
        ganhoElev:"20",
        perdaElev:"26",
        hora:"17:15"
    },

    {
        id:"004",
        cdgatividade: "0",
        atividade: "Corrida",
        tempo:"00:35:06",
        distancia:"5,56",
        ritmo:"5,36",
        data:"21/05/2021",
        velocidadeMax:"8.2",
        velocidadeMed:"10,5",
        ganhoElev:"20",
        perdaElev:"26",
        hora:"17:09"
    },

    {
        id:"005",
        cdgatividade: "0",
        atividade: "Corrida",
        tempo:"00:42:06",
        distancia:"5,56",
        ritmo:"5,36",
        data:"22/05/2021",
        velocidadeMax:"8.2",
        velocidadeMed:"10,5",
        ganhoElev:"20",
        perdaElev:"26",
        hora:"17:13"
    },

    {
        id:"006",
        cdgatividade: "0",
        atividade: "Pedalada",
        tempo:"00:30:06",
        distancia:"6,01",
        ritmo:"5,36",
        data:"23/05/2021",
        velocidadeMax:"8.2",
        velocidadeMed:"10,5",
        ganhoElev:"20",
        perdaElev:"26",
        hora:"17:06"
    }
]

export default class Historico{
    static getHistorico = () => {      
        return historico;
    }
}
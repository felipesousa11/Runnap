let historico=[
    {
        id:"001",
        cdgatividade: "0",
        atividade: "Corrida",
        tempo:"00:35:06",
        distancia:"5,56",
        ritmo:"5,36",
        data:"18/05/2021",
        
    },

    {
        id:"002",
        cdgatividade: "0",
        atividade: "Corrida",
        tempo:"00:45:16",
        distancia:"4,56",
        ritmo:"5,36",
        data:"19/05/2021",
    },

    {
        id:"003",
        cdgatividade: "1",
        atividade: "Pedalada",
        tempo:"00:52:29",
        distancia:"7,41",
        ritmo:"5,36",
        data:"20/05/2021",
    },

    {
        id:"004",
        cdgatividade: "0",
        atividade: "Corrida",
        tempo:"00:35:06",
        distancia:"5,56",
        ritmo:"5,36",
        data:"21/05/2021",
    },

    {
        id:"005",
        cdgatividade: "0",
        atividade: "Corrida",
        tempo:"00:42:06",
        distancia:"5,56",
        ritmo:"5,36",
        data:"22/05/2021",
    },

    {
        id:"006",
        cdgatividade: "0",
        atividade: "Pedalada",
        tempo:"00:30:06",
        distancia:"6,01",
        ritmo:"5,36",
        data:"23/05/2021",
    }
]

export default class Historico{
    static getHistorico = () => {      
        return historico;
    }
}
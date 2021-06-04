let  historico =[
    {
        isExpanded:false,
        category_name:"Corrida ao entardecer",
        image:require('../img/printmapa.png'),
        tempo:"00:35:06",
        distancia:"5,56",
        data:"21/05/2021",
        subcategory:[
            {id:1, 
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
        ]
    },

    {
        isExpanded:false,
        category_name:'De volta as corridas',
        image:require('../img/printmapa3.jpeg'),
        tempo:"00:35:06",
        distancia:"5,56",
        data:"21/05/2021",
        subcategory:[
            {id:2, 
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
        ]
    },

    {
        isExpanded:true,
        category_name:'Corrida leve',
        image:require('../img/printmapa2.jpeg'),
        tempo:"00:35:06",
        distancia:"5,56",
        data:"21/05/2021",
        subcategory:[
            {id:3, 
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
        ]
    },

    {
        isExpanded:false,
        category_name:'Corrida da tarde',
        image:require('../img/printmapa3.jpeg'),
        tempo:"00:35:06",
        distancia:"5,56",
        data:"21/05/2021",
        subcategory:[
            {id:4,
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
        ]
    },

    {
        isExpanded:false,
        category_name:'Corrida boa',
        image:require('../img/printmapa4.jpeg'),
        tempo:"00:35:06",
        distancia:"5,56",
        data:"21/05/2021",
        subcategory:[
            {id:5,
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
        ]
    },

    {
        isExpanded:false,
        category_name:'Corrida Teste',
        image:require('../img/printmapa3.jpeg'),
        tempo:"00:35:06",
        distancia:"5,56",
        data:"21/05/2021",
        subcategory:[
            {id:6,
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
        ]
    },
];

export default class BDhistorico { 
    static getHistorico = () => {      
      return historico;
    }
}
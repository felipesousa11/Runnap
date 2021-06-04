let  desafios =[
    {
        isExpanded:false,
        category_name:'Start 20k',
        image:require('../img/banner2.png'),
        subcategory:[
            {id:1, 
            objetivo: '20',
            inicio: "10/05/2021",
            fim:"30/05/2021",
            participantes:"556",
            finalistas:"306",
            realizado:"8",
            restante:"12",
            inscrito: false,
            },
        ]
    },

    {
        isExpanded:false,
        category_name:'Start 25k',
        image:require('../img/banner.png'),
        subcategory:[
            {id:2, 
            objetivo: "25",
            inicio: "12/05/2021",
            fim:"30/05/2021",
            participantes:"56",
            finalistas:"30",
            realizado:"25",
            restante:"0",
            inscrito: true,
            },
        ]
    },

    {
        isExpanded:true,
        category_name:'# Rodagem de maio',
        image:require('../img/banner3.png'),
        subcategory:[
            {id:3, 
            objetivo: "50",
            inicio: "12/05/2021",
            fim:"30/05/2021",
            participantes:"497",
            finalistas:"301",
            realizado:"29",
            restante:"21",
            inscrito: true,
            },
        ]
    },

    {
        isExpanded:false,
        category_name:'Desafio IFNMG',
        image:require('../img/banner4.png'),
        subcategory:[
            {id:4,
            objetivo: "18",
            inicio: "15/05/2021",
            fim:"20/05/2021",
            participantes:"656",
            finalistas:"330",
            realizado:"15",
            restante:"3",
            inscrito: false,},
        ]
    },

    {
        isExpanded:false,
        category_name:'Corra mais',
        image:require('../img/banner5.png'),
        subcategory:[
            {id:5,
            objetivo: "05",
            inicio: "30/05/2021",
            fim:"10/06/2021",
            participantes:"119",
            finalistas:"330",
            realizado:"0",
            restante:"0",
            inscrito: true,},
        ]
    },
];

export default class BDdesafios { 
    static getDesafios = () => {      
      return desafios;
    }
}
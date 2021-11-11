let carros = [{
        img: "corola.jpg",
        nome: "Corola",
        motor: "155",
        garantia: "3",
        consumo: "não foi informado."
    },
    {
        img: "civic.jpg",
        nome: "Civic",
        motor: "140",
        garantia: "3",
        consumo: "9,2 km/l"
    },
    {
        img: "focus.jpg",
        nome: "Focus",
        motor: "172",
        garantia: "5",
        consumo: "8,5 km/l"
    }
];
let cont = 1;

let trocarInforma = () => {
    document.getElementById("imagemcarro").src = "img/" + carros[cont].img;
    document.getElementById("nome").innerHTML = carros[cont].nome;
    document.getElementById("potencia").innerHTML = carros[cont].motor;
    document.getElementById("garantia").innerHTML = carros[cont].garantia;
    document.getElementById("consumo").innerHTML = carros[cont].consumo;
    cont++;
    if (cont === 3) cont = 0;
}

let iniciar;

let start = () => iniciar = setInterval(trocarInforma, 1000);
let stop = () => clearInterval(iniciar);

start();

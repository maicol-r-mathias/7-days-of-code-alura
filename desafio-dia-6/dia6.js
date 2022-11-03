// Desafio do dia 6 é uma melhoria do dia 5

// Categorias predefinidas
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

// Verifica se o usuário quer adicionar um item à lista
let adicionarItem = prompt("Gostaria de adicionar item à lista? (sim/não)");
while (adicionarItem !== "não") {
    if (adicionarItem === "sim") {
        const item = prompt("Qual item você gostaria de adicionar?");
        const categoria = prompt("Em qual categoria? (frutas/laticinios/congelados/doces)");

        if (categoria === "frutas") {
            frutas.push(item);
        } else if (categoria === "laticinios") {
            laticinios.push(item);
        } else if (categoria === "congelados") {
            congelados.push(item);
        } else if (categoria === "doces") {
            doces.push(item);
        }
    } else if (adicionarItem === "remover") {
        const item = prompt("Qual item você gostaria de remover?");
        const itemExistenteFrutas = frutas.includes(item);
        const itemExistenteLaticinios = laticinios.includes(item);
        const itemExistenteCongelados = congelados.includes(item);
        const itemExistenteDoces = doces.includes(item);

        const itemExistente = itemExistenteFrutas || itemExistenteLaticinios || itemExistenteCongelados || itemExistenteDoces
        if (itemExistente) {
            if (itemExistenteFrutas) {frutas.pop(item);}
            if (itemExistenteLaticinios) {laticinios.pop(item);}
            if (itemExistenteCongelados) {congelados.pop(item);}
            if (itemExistenteDoces) {doces.pop(item);}

            console.log(`Removido o item ${item} da lista`);
        } else {
            console.log("Não existe este item na lista!");
        }
    }
    
    adicionarItem = prompt("Gostaria de adicionar item à lista? (sim/não/remover)");
}

// Imprimindo lista
if (frutas != []) {
    let msg = "Frutas: ";
    msg = msg.concat(`${frutas[0]}`);
    

    for (var i = 1; i < frutas.length; i++) {
        msg = msg.concat(`, ${frutas[i]}`);
    }
    console.log(msg);
}

if (laticinios != []) {
    let msg = "Laticínios: ";
    msg = msg.concat(`${laticinios[0]}`);
    

    for (var i = 1; i < laticinios.length; i++) {
        msg = msg.concat(`, ${laticinios[i]}`);
    }
    console.log(msg);
}

if (congelados != []) {
    let msg = "Congelados: ";
    msg = msg.concat(`${congelados[0]}`);
    

    for (var i = 1; i < congelados.length; i++) {
        msg = msg.concat(`, ${congelados[i]}`);
    }
    console.log(msg);
}

if (doces != []) {
    let msg = "Doces: ";
    msg = msg.concat(`${doces[0]}`);
    

    for (var i = 1; i < doces.length; i++) {
        msg = msg.concat(`, ${doces[i]}`);
    }
    console.log(msg);
}

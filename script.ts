let lista: Array<{ id: number, name: string, bio: string }> = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }];

let findObject = function (id: number): { id: number, name: string, bio: string } | undefined {
    return lista.find((o) => o.id === id);
}

let findBio = function (id: number): string | undefined {
    const obj = findObject(id);
    if (!obj) {
        return ("Objeto não encontrado");
    }
    return obj.bio;
}

let findName = function (id: number): string | undefined {
    const obj = findObject(id);
    if (!obj) {
        return ("Objeto não encontrado");
    }
    return obj.name;
}

let delet = function (id: number): string {
    const obj = findObject(id);
    if (!obj) {
        return ("Objeto não encontrado");
    }
    let index = lista.indexOf(obj);
    lista.splice(index, 1);
    return ("Objeto removido com sucesso");
}

let update = function (id: number, name: string, bio: string) {
    let obj = findObject(id);
    if (!obj) {
        return ("Objeto não encontrado");
    }
    obj.name = name;
    obj.bio = bio;
    return ("Objeto atualizado com sucesso");
}
console.log(findBio(3)); //Exibindo a biografia com o id 3
console.log(findName(4)); //Exibindo o nome com o id 4

console.log(delet(3)); //Excluindo o objeto com id 3
console.log(findBio(3)); //Verificando se objeto com id 3 foi excluido


console.log(findName(1)); //Exibindo o nome do objeto com o id 1
console.log(update(1,'Carla Ferreira', 'Estudante de frontend')); //Alterando o nome e bio do objeto com id 1
console.log(findName(1)); //Exibindo o nome do objeto com o id 1
console.log(findBio(1)); //Exibindo a bio com o objeto com id 1



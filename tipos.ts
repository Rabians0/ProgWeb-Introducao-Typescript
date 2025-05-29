// tipos em typescript

// tipo primitivo
let texto: string = 'ola mundo';
let numero: number = 777;
let ativo: boolean = true;

// array
let numeros: number[] = [1,1,2];
let palavras: Array<string> = ["typescript", "e", 'mamamao']

// tupas
let pessoa: [string, number];

// enum -- enunciado
enum cores{
    preto,
    vermelho,
    azul,
}
let corFavorita: cores.azul;

// any
let dadoAleatorio: any = 5;
dadoAleatorio = 'texto';
dadoAleatorio = true;

//unknown
let dadoDesconhecido: unknown = 10;

// void
function mostraralerta() : void{
console.log{"atencao"};
}

// null e underfined
let nada: null = null
let indefinido: undefined = undefined


// never (usado quando a funçao nunca retorna)
function errofatal(mensagem: string) : never{
throw new Error(mensagem)
}

//aliases - apelidos
type Usuario = {
nome: string;
idade: number;
}

let Usuario: Usuario = {nome: 'brian', idade: 19000}
const materie = [
    {
        id: 1,
        name: 'JavaScript',
        questions: [
            {
                id: 1,
                name: 'JavaScript',
                text: 'Qual è il risultato di 2 + 2?',
                answers: [
                    { id: 1, text: '3', is_correct: false, score: 0 },
                    { id: 2, text: '4', is_correct: true, score: 5 },
                    { id: 3, text: '5', is_correct: false, score: 0 },
                    { id: 4, text: '6', is_correct: false, score: 0 },
                ],
            },
            {
                id: 2,
                name: 'JavaScript',
                text: 'Quale metodo viene utilizzato per aggiungere un elemento alla fine di un array?',
                answers: [
                    { id: 1, text: 'shift()', is_correct: false, score: 0 },
                    { id: 2, text: 'unshift()', is_correct: false, score: 0 },
                    { id: 3, text: 'push()', is_correct: true, score: 5 },
                    { id: 4, text: 'pop()', is_correct: false, score: 0 },
                ],
            },
            {
                id: 3,
                name: 'JavaScript',
                text: 'Qual è il tipo di dato di `null` in JavaScript?',
                answers: [
                    { id: 1, text: '"null"', is_correct: false, score: 0 },
                    { id: 2, text: '"undefined"', is_correct: false, score: 0 },
                    { id: 3, text: '"object"', is_correct: true, score: 5 },
                    { id: 4, text: '"boolean"', is_correct: false, score: 0 },
                ],
            },
            {
                id: 4,
                name: 'JavaScript',
                text: 'Qual è lo scopo del metodo `map()` in un array?',
                answers: [
                    { id: 1, text: 'Iterare sugli elementi', is_correct: false, score: 0 },
                    { id: 2, text: 'Modificare tutti gli elementi e restituire un nuovo array', is_correct: true, score: 5 },
                    { id: 3, text: 'Ordinare gli elementi', is_correct: false, score: 0 },
                    { id: 4, text: 'Trovare un elemento specifico', is_correct: false, score: 0 },
                ],
            },
            {
                id: 5,
                name: 'JavaScript',
                text: 'Come si crea un oggetto vuoto in JavaScript?',
                answers: [
                    { id: 1, text: 'let obj = [];', is_correct: false, score: 0 },
                    { id: 2, text: 'let obj = {};', is_correct: true, score: 5 },
                    { id: 3, text: 'let obj = new Object;', is_correct: false, score: 0 },
                    { id: 4, text: 'let obj = null;', is_correct: false, score: 0 },
                ],
            },
            {
                id: 6,
                name: 'JavaScript',
                text: 'Qual è il risultato di `typeof NaN`?',
                answers: [
                    { id: 1, text: '"number"', is_correct: true, score: 5 },
                    { id: 2, text: '"NaN"', is_correct: false, score: 0 },
                    { id: 3, text: '"undefined"', is_correct: false, score: 0 },
                    { id: 4, text: '"object"', is_correct: false, score: 0 },
                ],
            },
            {
                id: 7,
                name: 'JavaScript',
                text: 'Quale simbolo viene usato per dichiarare una funzione anonima?',
                answers: [
                    { id: 1, text: '=>', is_correct: true, score: 5 },
                    { id: 2, text: 'function', is_correct: false, score: 0 },
                    { id: 3, text: ':', is_correct: false, score: 0 },
                    { id: 4, text: '->', is_correct: false, score: 0 },
                ],
            },
            {
                id: 8,
                name: 'JavaScript',
                text: 'Qual è il valore predefinito di una variabile dichiarata ma non inizializzata?',
                answers: [
                    { id: 1, text: 'null', is_correct: false, score: 0 },
                    { id: 2, text: 'undefined', is_correct: true, score: 5 },
                    { id: 3, text: '0', is_correct: false, score: 0 },
                    { id: 4, text: 'false', is_correct: false, score: 0 },
                ],
            },
            {
                id: 9,
                name: 'JavaScript',
                text: 'Quale metodo converte una stringa in un numero intero?',
                answers: [
                    { id: 1, text: 'parseInt()', is_correct: true, score: 5 },
                    { id: 2, text: 'toFixed()', is_correct: false, score: 0 },
                    { id: 3, text: 'Number()', is_correct: false, score: 0 },
                    { id: 4, text: 'toString()', is_correct: false, score: 0 },
                ],
            },
            {
                id: 10,
                name: 'JavaScript',
                text: 'Qual è il risultato di `console.log(0.1 + 0.2 === 0.3)`?',
                answers: [
                    { id: 1, text: 'true', is_correct: false, score: 0 },
                    { id: 2, text: 'false', is_correct: true, score: 5 },
                    { id: 3, text: 'undefined', is_correct: false, score: 0 },
                    { id: 4, text: 'NaN', is_correct: false, score: 0 },
                ],
            },
            {
                id: 11,
                name: 'JavaScript',
                text: 'Quale dichiarazione viene usata per fermare un ciclo?',
                answers: [
                    { id: 1, text: 'stop', is_correct: false, score: 0 },
                    { id: 2, text: 'end', is_correct: false, score: 0 },
                    { id: 3, text: 'break', is_correct: true, score: 5 },
                    { id: 4, text: 'exit', is_correct: false, score: 0 },
                ],
            },
            {
                id: 12,
                name: 'JavaScript',
                text: 'Cosa fa il metodo `filter()` su un array?',
                answers: [
                    { id: 1, text: 'Modifica gli elementi', is_correct: false, score: 0 },
                    { id: 2, text: 'Rimuove gli elementi duplicati', is_correct: false, score: 0 },
                    { id: 3, text: 'Crea un nuovo array con gli elementi che soddisfano una condizione', is_correct: true, score: 5 },
                    { id: 4, text: 'Ordina gli elementi', is_correct: false, score: 0 },
                ],
            },
            {
                id: 13,
                name: 'JavaScript',
                text: 'Cosa restituisce `Array.isArray([1, 2, 3])`?',
                answers: [
                    { id: 1, text: 'true', is_correct: true, score: 5 },
                    { id: 2, text: 'false', is_correct: false, score: 0 },
                    { id: 3, text: 'undefined', is_correct: false, score: 0 },
                    { id: 4, text: 'null', is_correct: false, score: 0 },
                ],
            },
            {
                id: 14,
                name: 'JavaScript',
                text: 'Come si definisce una variabile che non può essere riassegnata?',
                answers: [
                    { id: 1, text: 'var', is_correct: false, score: 0 },
                    { id: 2, text: 'let', is_correct: false, score: 0 },
                    { id: 3, text: 'const', is_correct: true, score: 5 },
                    { id: 4, text: 'fixed', is_correct: false, score: 0 },
                ],
            },
            {
                id: 15,
                name: 'JavaScript',
                text: 'Qual è il risultato di `typeof []`?',
                answers: [
                    { id: 1, text: '"array"', is_correct: false, score: 0 },
                    { id: 2, text: '"object"', is_correct: true, score: 5 },
                    { id: 3, text: '"undefined"', is_correct: false, score: 0 },
                    { id: 4, text: '"null"', is_correct: false, score: 0 },
                ],
            },
            {
                id: 16,
                name: 'JavaScript',
                text: 'Come puoi creare una funzione in JavaScript?',
                answers: [
                    { id: 1, text: 'function myFunc() {}', is_correct: true, score: 5 },
                    { id: 2, text: 'def myFunc() {}', is_correct: false, score: 0 },
                    { id: 3, text: 'func myFunc() {}', is_correct: false, score: 0 },
                    { id: 4, text: 'create function myFunc() {}', is_correct: false, score: 0 },
                ],
            },
            {
                id: 17,
                name: 'JavaScript',
                text: 'Quale metodo JavaScript converte un oggetto JSON in una stringa?',
                answers: [
                    { id: 1, text: 'JSON.parse()', is_correct: false, score: 0 },
                    { id: 2, text: 'JSON.stringify()', is_correct: true, score: 5 },
                    { id: 3, text: 'JSON.toString()', is_correct: false, score: 0 },
                    { id: 4, text: 'JSON.convert()', is_correct: false, score: 0 },
                ],
            },
            {
                id: 18,
                name: 'JavaScript',
                text: 'Quale valore restituisce una funzione senza un `return`?',
                answers: [
                    { id: 1, text: 'null', is_correct: false, score: 0 },
                    { id: 2, text: 'undefined', is_correct: true, score: 5 },
                    { id: 3, text: '0', is_correct: false, score: 0 },
                    { id: 4, text: 'NaN', is_correct: false, score: 0 },
                ],
            },
            {
                id: 19,
                name: 'JavaScript',
                text: 'Qual è il risultato di `Boolean("")`?',
                answers: [
                    { id: 1, text: 'true', is_correct: false, score: 0 },
                    { id: 2, text: 'false', is_correct: true, score: 5 },
                    { id: 3, text: 'undefined', is_correct: false, score: 0 },
                    { id: 4, text: 'null', is_correct: false, score: 0 },
                ],
            },
            {
                id: 20,
                name: 'JavaScript',
                text: 'Qual è il risultato di `2 == "2"` in JavaScript?',
                answers: [
                    { id: 1, text: 'true', is_correct: true, score: 5 },
                    { id: 2, text: 'false', is_correct: false, score: 0 },
                    { id: 3, text: 'undefined', is_correct: false, score: 0 },
                    { id: 4, text: 'NaN', is_correct: false, score: 0 },
                ],
            },
            //altre domande di Javascript-----------------------------------------------------
        ],
    },

    {
    id: 2,
    name: 'Typescript',
    questions: [
        {
            id: 1,
            name: 'TypeScript',
            text: 'Qual è la principale differenza tra TypeScript e JavaScript?',
            answers: [
              { id: 1, text: 'TypeScript è un superset di JavaScript', is_correct: true, score: 5 },
              { id: 2, text: 'TypeScript non supporta le funzioni', is_correct: false, score: 0 },
              { id: 3, text: 'JavaScript è più veloce di TypeScript', is_correct: false, score: 0 },
              { id: 4, text: 'TypeScript non può essere eseguito nel browser', is_correct: false, score: 0 },
            ],
        },
        {
            id: 2,
            name: 'TypeScript',
            text: 'Come si definisce un tipo di variabile in TypeScript?',
            answers: [
              { id: 1, text: 'type variabile = tipo;', is_correct: false, score: 0 },
              { id: 2, text: 'let variabile: tipo;', is_correct: true, score: 5 },
              { id: 3, text: 'variabile: tipo;', is_correct: false, score: 0 },
              { id: 4, text: 'let tipo variabile;', is_correct: false, score: 0 },
            ],
        },
        {
            id: 3,
            name: 'TypeScript',
            text: 'Qual è la sintassi corretta per dichiarare un array di numeri in TypeScript?',
            answers: [
              { id: 1, text: 'let arr: number[];', is_correct: true, score: 5 },
              { id: 2, text: 'let arr: Array<number>;', is_correct: true, score: 5 },
              { id: 3, text: 'let arr: number;', is_correct: false, score: 0 },
              { id: 4, text: 'let arr: [number];', is_correct: false, score: 0 },
            ],
        },
        {
            id: 4,
            name: 'TypeScript',
            text: 'Qual è il tipo di dato predefinito in TypeScript per i valori nulli?',
            answers: [
              { id: 1, text: 'undefined', is_correct: false, score: 0 },
              { id: 2, text: 'null', is_correct: true, score: 5 },
              { id: 3, text: 'void', is_correct: false, score: 0 },
              { id: 4, text: 'any', is_correct: false, score: 0 },
            ],
        },
        {
            id: 5,
            name: 'TypeScript',
            text: 'Come si dichiara una funzione in TypeScript?',
            answers: [
              { id: 1, text: 'function nomeFunzione() {}', is_correct: true, score: 5 },
              { id: 2, text: 'declare nomeFunzione() {}', is_correct: false, score: 0 },
              { id: 3, text: 'let nomeFunzione() {}', is_correct: false, score: 0 },
              { id: 4, text: 'def nomeFunzione() {}', is_correct: false, score: 0 },
            ],
        },
        {
            id: 6,
            name: 'TypeScript',
            text: 'Cosa rappresenta il tipo `any` in TypeScript?',
            answers: [
              { id: 1, text: 'Qualsiasi tipo di dato', is_correct: true, score: 5 },
              { id: 2, text: 'Un tipo di dato specifico', is_correct: false, score: 0 },
              { id: 3, text: 'Un array', is_correct: false, score: 0 },
              { id: 4, text: 'Un oggetto', is_correct: false, score: 0 },
            ],
        },
        {
            id: 7,
            name: 'TypeScript',
            text: 'Qual è la sintassi corretta per creare un tipo personalizzato in TypeScript?',
            answers: [
              { id: 1, text: 'type Nome = {}; ', is_correct: true, score: 5 },
              { id: 2, text: 'let Nome: {}; ', is_correct: false, score: 0 },
              { id: 3, text: 'custom Nome = {}; ', is_correct: false, score: 0 },
              { id: 4, text: 'create Nome = {}; ', is_correct: false, score: 0 },
            ],
        },
        {
            id: 8,
            name: 'TypeScript',
            text: 'Come si definisce un’interfaccia in TypeScript?',
            answers: [
              { id: 1, text: 'interface Nome {}', is_correct: true, score: 5 },
              { id: 2, text: 'type Nome {}', is_correct: false, score: 0 },
              { id: 3, text: 'class Nome {}', is_correct: false, score: 0 },
              { id: 4, text: 'define Nome {}', is_correct: false, score: 0 },
            ],
        },
        {
            id: 9,
            name: 'TypeScript',
            text: 'Quale dei seguenti è un tipo di dato non primitivo in TypeScript?',
            answers: [
              { id: 1, text: 'number', is_correct: false, score: 0 },
              { id: 2, text: 'string', is_correct: false, score: 0 },
              { id: 3, text: 'object', is_correct: true, score: 5 },
              { id: 4, text: 'boolean', is_correct: false, score: 0 },
            ],
        },
        {
            id: 10,
            name: 'TypeScript',
            text: 'Cosa fa il comando `tsc`?',
            answers: [
              { id: 1, text: 'Compila i file TypeScript in JavaScript', is_correct: true, score: 5 },
              { id: 2, text: 'Esegue il codice TypeScript', is_correct: false, score: 0 },
              { id: 3, text: 'Installa TypeScript', is_correct: false, score: 0 },
              { id: 4, text: 'Aggiorna TypeScript', is_correct: false, score: 0 },
            ],
        },
        {
            id: 11,
            name: 'TypeScript',
            text: 'Come si definisce un tipo di dato opzionale in TypeScript?',
            answers: [
              { id: 1, text: 'variabile?: tipo;', is_correct: true, score: 5 },
              { id: 2, text: 'variabile! : tipo;', is_correct: false, score: 0 },
              { id: 3, text: 'variabile: tipo | null;', is_correct: false, score: 0 },
              { id: 4, text: 'variabile: ?tipo;', is_correct: false, score: 0 },
            ],
        },
        {
            id: 12,
            name: 'TypeScript',
            text: 'Cosa rappresenta il tipo `void` in TypeScript?',
            answers: [
              { id: 1, text: 'Un tipo che non restituisce valore', is_correct: true, score: 5 },
              { id: 2, text: 'Un tipo di oggetto', is_correct: false, score: 0 },
              { id: 3, text: 'Un tipo di errore', is_correct: false, score: 0 },
              { id: 4, text: 'Un array vuoto', is_correct: false, score: 0 },
            ],
        },
        {
            id: 13,
            name: 'TypeScript',
            text: 'Qual è il risultato dell’operazione di casting in TypeScript?',
            answers: [
              { id: 1, text: 'Modifica il tipo di dato di una variabile', is_correct: true, score: 5 },
              { id: 2, text: 'Elimina una variabile', is_correct: false, score: 0 },
              { id: 3, text: 'Aggiunge una variabile', is_correct: false, score: 0 },
              { id: 4, text: 'Compila il codice', is_correct: false, score: 0 },
            ],
        },
        {
            id: 14,
            name: 'TypeScript',
            text: 'Qual è la sintassi per dichiarare un tipo unione in TypeScript?',
            answers: [
              { id: 1, text: 'let variabile: tipo1 | tipo2;', is_correct: true, score: 5 },
              { id: 2, text: 'let variabile: tipo1 & tipo2;', is_correct: false, score: 0 },
              { id: 3, text: 'let variabile: tipo1 tipo2;', is_correct: false, score: 0 },
              { id: 4, text: 'let variabile: tipo1, tipo2;', is_correct: false, score: 0 },
            ],
        },
        {
            id: 15,
            name: 'TypeScript',
            text: 'Cosa fa il costruttore di una classe in TypeScript?',
            answers: [
              { id: 1, text: 'Inizializza le variabili della classe', is_correct: true, score: 5 },
              { id: 2, text: 'Dichiara una variabile', is_correct: false, score: 0 },
              { id: 3, text: 'Chiama un metodo', is_correct: false, score: 0 },
              { id: 4, text: 'Elimina la classe', is_correct: false, score: 0 },
            ],
        },
        {
            id: 16,
            name: 'TypeScript',
            text: 'Qual è la sintassi per estendere una classe in TypeScript?',
            answers: [
              { id: 1, text: 'class NuovaClasse extends BaseClasse {}', is_correct: true, score: 5 },
              { id: 2, text: 'class NuovaClasse inherits BaseClasse {}', is_correct: false, score: 0 },
              { id: 3, text: 'class NuovaClasse : BaseClasse {}', is_correct: false, score: 0 },
              { id: 4, text: 'class NuovaClasse with BaseClasse {}', is_correct: false, score: 0 },
            ],
        },
        {
            id: 17,
            name: 'TypeScript',
            text: 'Come si dichiara un tipo di oggetto in TypeScript?',
            answers: [
              { id: 1, text: 'let obj: { chiave: tipo };', is_correct: true, score: 5 },
              { id: 2, text: 'let obj: [chiave: tipo];', is_correct: false, score: 0 },
              { id: 3, text: 'let obj: chiave: tipo;', is_correct: false, score: 0 },
              { id: 4, text: 'let obj: tipo { chiave };', is_correct: false, score: 0 },
            ],
        },
        {
            id: 18,
            name: 'TypeScript',
            text: 'Qual è la differenza principale tra `interface` e `type` in TypeScript?',
            answers: [
              { id: 1, text: 'Le interfacce possono essere estese, i tipi no', is_correct: false, score: 0 },
              { id: 2, text: 'I tipi possono essere unioni, le interfacce no', is_correct: true, score: 5 },
              { id: 3, text: 'Le interfacce non possono essere oggetti, i tipi sì', is_correct: false, score: 0 },
              { id: 4, text: 'Le interfacce sono più veloci da compilare', is_correct: false, score: 0 },
            ],
        },
        {
            id: 19,
            name: 'TypeScript',
            text: 'Quale parola chiave si usa per dichiarare una variabile costante in TypeScript?',
            answers: [
              { id: 1, text: 'const', is_correct: true, score: 5 },
              { id: 2, text: 'let', is_correct: false, score: 0 },
              { id: 3, text: 'var', is_correct: false, score: 0 },
              { id: 4, text: 'fixed', is_correct: false, score: 0 },
            ],
        },
        {
            id: 20,
            name: 'TypeScript',
            text: 'Quale dei seguenti è un modo corretto per dichiarare una funzione che restituisce una stringa?',
            answers: [
              { id: 1, text: 'function nomeFunzione(): string {}', is_correct: true, score: 5 },
              { id: 2, text: 'function nomeFunzione(): number {}', is_correct: false, score: 0 },
              { id: 3, text: 'function nomeFunzione() -> string {}', is_correct: false, score: 0 },
              { id: 4, text: 'function nomeFunzione: string {}', is_correct: false, score: 0 },
            ],
        },
        // Altre domande Typescript-----------------------------------------------------
    ],
    },

      {
        id: 3,
        name: 'Angular',
        questions: [
            {
                id: 1,
                name: 'Angular',
                text: 'Qual è il comando per creare un nuovo progetto Angular?',
                answers: [
                  { id: 1, text: 'ng create new', is_correct: false, score: 0 },
                  { id: 2, text: 'ng new', is_correct: true, score: 5 },
                  { id: 3, text: 'ng init', is_correct: false, score: 0 },
                  { id: 4, text: 'ng generate app', is_correct: false, score: 0 },
                ],
            },
            {
                id: 2,
                name: 'Angular',
                text: 'Qual è lo scopo di un decoratore @Component in Angular?',
                answers: [
                  { id: 1, text: 'Creare un modulo', is_correct: false, score: 0 },
                  { id: 2, text: 'Definire una direttiva', is_correct: false, score: 0 },
                  { id: 3, text: 'Definire un componente', is_correct: true, score: 5 },
                  { id: 4, text: 'Creare un servizio', is_correct: false, score: 0 },
                ],
            },
            {
                id: 3,
                name: 'Angular',
                text: 'Quale comando viene utilizzato per avviare un server di sviluppo Angular?',
                answers: [
                  { id: 1, text: 'ng serve', is_correct: true, score: 5 },
                  { id: 2, text: 'ng start', is_correct: false, score: 0 },
                  { id: 3, text: 'ng run', is_correct: false, score: 0 },
                  { id: 4, text: 'ng dev', is_correct: false, score: 0 },
                ],
            },
            {
                id: 4,
                name: 'Angular',
                text: 'Qual è lo scopo del modulo `HttpClientModule`?',
                answers: [
                  { id: 1, text: 'Gestire le rotte', is_correct: false, score: 0 },
                  { id: 2, text: 'Effettuare richieste HTTP', is_correct: true, score: 5 },
                  { id: 3, text: 'Gestire i form', is_correct: false, score: 0 },
                  { id: 4, text: 'Gestire le animazioni', is_correct: false, score: 0 },
                ],
            },
            {
                id: 5,
                name: 'Angular',
                text: 'Qual è il ciclo di vita iniziale di un componente Angular?',
                answers: [
                  { id: 1, text: 'ngOnChanges', is_correct: false, score: 0 },
                  { id: 2, text: 'ngOnInit', is_correct: true, score: 5 },
                  { id: 3, text: 'ngAfterViewInit', is_correct: false, score: 0 },
                  { id: 4, text: 'ngOnDestroy', is_correct: false, score: 0 },
                ],
            },
            {
                id: 6,
                name: 'Angular',
                text: 'Quale decoratore viene utilizzato per creare un servizio?',
                answers: [
                  { id: 1, text: '@Component', is_correct: false, score: 0 },
                  { id: 2, text: '@Directive', is_correct: false, score: 0 },
                  { id: 3, text: '@Injectable', is_correct: true, score: 5 },
                  { id: 4, text: '@Service', is_correct: false, score: 0 },
                ],
            },
            {
                id: 7,
                name: 'Angular',
                text: 'Qual è il comando per generare un nuovo componente?',
                answers: [
                  { id: 1, text: 'ng generate module', is_correct: false, score: 0 },
                  { id: 2, text: 'ng generate service', is_correct: false, score: 0 },
                  { id: 3, text: 'ng generate component', is_correct: true, score: 5 },
                  { id: 4, text: 'ng generate class', is_correct: false, score: 0 },
                ],
            },
            {
                id: 8,
                name: 'Angular',
                text: 'Cosa fa `ngFor` in Angular?',
                answers: [
                  { id: 1, text: 'Esegue una funzione', is_correct: false, score: 0 },
                  { id: 2, text: 'Ripete un elemento HTML per ogni elemento di un array', is_correct: true, score: 5 },
                  { id: 3, text: 'Filtra i dati', is_correct: false, score: 0 },
                  { id: 4, text: 'Esegue una condizione', is_correct: false, score: 0 },
                ],
            },
            {
                id: 9,
                name: 'Angular',
                text: 'Qual è il principale vantaggio dell’utilizzo di `ngIf`?',
                answers: [
                  { id: 1, text: 'Ripetere un elemento più volte', is_correct: false, score: 0 },
                  { id: 2, text: 'Condizionare la visualizzazione di un elemento', is_correct: true, score: 5 },
                  { id: 3, text: 'Ordinare un array', is_correct: false, score: 0 },
                  { id: 4, text: 'Creare un form', is_correct: false, score: 0 },
                ],
            },
            {
                id: 10,
                name: 'Angular',
                text: 'Qual è il comando per compilare un’app Angular per la produzione?',
                answers: [
                  { id: 1, text: 'ng serve', is_correct: false, score: 0 },
                  { id: 2, text: 'ng build', is_correct: true, score: 5 },
                  { id: 3, text: 'ng compile', is_correct: false, score: 0 },
                  { id: 4, text: 'ng prod', is_correct: false, score: 0 },
                ],
            },
            {
                id: 11,
                name: 'Angular',
                text: 'Quale simbolo viene usato per il data binding unidirezionale in Angular?',
                answers: [
                  { id: 1, text: '{{ }}', is_correct: true, score: 5 },
                  { id: 2, text: '[ ]', is_correct: false, score: 0 },
                  { id: 3, text: '( )', is_correct: false, score: 0 },
                  { id: 4, text: '[()]', is_correct: false, score: 0 },
                ],
            },
            {
                id: 12,
                name: 'Angular',
                text: 'Qual è lo scopo principale di un service in Angular?',
                answers: [
                  { id: 1, text: 'Gestire le rotte', is_correct: false, score: 0 },
                  { id: 2, text: 'Fornire logica riutilizzabile per i componenti', is_correct: true, score: 5 },
                  { id: 3, text: 'Creare elementi HTML', is_correct: false, score: 0 },
                  { id: 4, text: 'Gestire le animazioni', is_correct: false, score: 0 },
                ],
            },
            {
                id: 13,
                name: 'Angular',
                text: 'Quale comando aggiorna i pacchetti e le dipendenze di Angular?',
                answers: [
                  { id: 1, text: 'ng update', is_correct: true, score: 5 },
                  { id: 2, text: 'ng upgrade', is_correct: false, score: 0 },
                  { id: 3, text: 'ng install', is_correct: false, score: 0 },
                  { id: 4, text: 'ng refresh', is_correct: false, score: 0 },
                ],
            },
            {
                id: 14,
                name: 'Angular',
                text: 'Quale servizio viene usato per gestire le richieste HTTP?',
                answers: [
                  { id: 1, text: 'HttpRequest', is_correct: false, score: 0 },
                  { id: 2, text: 'HttpClient', is_correct: true, score: 5 },
                  { id: 3, text: 'HttpService', is_correct: false, score: 0 },
                  { id: 4, text: 'HttpHandler', is_correct: false, score: 0 },
                ],
            },
            {
                id: 15,
                name: 'Angular',
                text: 'Cosa indica il binding a due vie `[()]` in Angular?',
                answers: [
                  { id: 1, text: 'Solo lettura del valore', is_correct: false, score: 0 },
                  { id: 2, text: 'Solo scrittura del valore', is_correct: false, score: 0 },
                  { id: 3, text: 'Sincronizzazione del valore tra il modello e la vista', is_correct: true, score: 5 },
                  { id: 4, text: 'Assegnazione diretta', is_correct: false, score: 0 },
                ],
            },
            {
                id: 16,
                name: 'Angular',
                text: 'Qual è il nome del file di configurazione principale per un progetto Angular?',
                answers: [
                  { id: 1, text: 'angular.json', is_correct: true, score: 5 },
                  { id: 2, text: 'package.json', is_correct: false, score: 0 },
                  { id: 3, text: 'config.json', is_correct: false, score: 0 },
                  { id: 4, text: 'ng-config.json', is_correct: false, score: 0 },
                ],
            },
            {
                id: 17,
                name: 'Angular',
                text: 'Qual è lo scopo del modulo `FormsModule`?',
                answers: [
                  { id: 1, text: 'Gestire animazioni', is_correct: false, score: 0 },
                  { id: 2, text: 'Gestire le rotte', is_correct: false, score: 0 },
                  { id: 3, text: 'Gestire form reattivi e template-driven', is_correct: true, score: 5 },
                  { id: 4, text: 'Gestire richieste HTTP', is_correct: false, score: 0 },
                ],
            },
            {
                id: 18,
                name: 'Angular',
                text: 'Quale comando rimuove un componente generato?',
                answers: [
                  { id: 1, text: 'ng remove component', is_correct: false, score: 0 },
                  { id: 2, text: 'ng delete component', is_correct: false, score: 0 },
                  { id: 3, text: 'Non esiste un comando diretto', is_correct: true, score: 5 },
                  { id: 4, text: 'ng clear component', is_correct: false, score: 0 },
                ],
            },
            {
                id: 19,
                name: 'Angular',
                text: 'Cosa indica il decoratore `@Input()`?',
                answers: [
                  { id: 1, text: 'Invia dati dal componente figlio al componente genitore', is_correct: false, score: 0 },
                  { id: 2, text: 'Invia dati dal componente genitore al componente figlio', is_correct: true, score: 5 },
                  { id: 3, text: 'Esegue una funzione', is_correct: false, score: 0 },
                  { id: 4, text: 'Genera un evento', is_correct: false, score: 0 },
                ],
            },
            {
                id: 20,
                name: 'Angular',
                text: 'A cosa serve il decoratore `@Output()`?',
                answers: [
                  { id: 1, text: 'Invia dati dal componente genitore al componente figlio', is_correct: false, score: 0 },
                  { id: 2, text: 'Genera un evento nel componente figlio verso il genitore', is_correct: true, score: 5 },
                  { id: 3, text: 'Inizializza il componente', is_correct: false, score: 0 },
                  { id: 4, text: 'Esegue una funzione', is_correct: false, score: 0 },
                ],
            },
            {
                id: 21,
                name: 'Angular',
                text: 'Quale metodo viene usato per navigare tra le rotte?',
                answers: [
                  { id: 1, text: 'navigate()', is_correct: true, score: 5 },
                  { id: 2, text: 'redirect()', is_correct: false, score: 0 },
                  { id: 3, text: 'go()', is_correct: false, score: 0 },
                  { id: 4, text: 'route()', is_correct: false, score: 0 },
                ],
            }
          // Altre domande Angular-----------------------------------------------------
        ],
    },
    
     
  ];
   

module.exports = materie

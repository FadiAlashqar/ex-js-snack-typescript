// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
// Se è una stringa: stampala in maiuscolo
// Se è un numero: moltiplicalo per due e stampalo
// Se è un booleano: stampa “Sì” o “No” in base al suo valore
// In tutti gli altri casi: stampa “Tipo non supportato”

let dato: unknown;

if (typeof dato === 'string') {
  console.log(dato.toUpperCase())
}
else if (typeof dato === 'number') {
  console.log(dato * 2)
}
else if (typeof dato === 'boolean') {
  console.log(dato ? 'Sì' : 'No')
}
else if (typeof dato === null) {
  console.log('Il dato è vuoto')
}
else if (Array.isArray(dato)) {
  console.log(dato.length)
}
else {
  console.log('Tipo non supportato')
}

// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:
// nome → stringa
// cognome → stringa
// annoNascita → numero
// sesso → Può essere solo "m" o "f".
// anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: 'indeterminato' | 'determinato' | 'freelance',
} & (Developer | ProjectManager)

type Developer = {
  livelloEsperienza: 'Junior' | 'Mid' | 'Senior',
  linguaggi?: string[],
  certificazioni: string[]
}

type ProjectManager = {
  teamSize: number | null,
  budgetGestito?: number,
  stakeholderPrincipali: string[]
}

const dipendente2: Dipendente = {
  nome: 'Fadi',
  cognome: 'Al ashqar',
  annoNascita: 2001,
  sesso: 'm',
  anniDiServizio: [2025, 2024, 2023],
  emailAziendale: 'mail-azienda@mail.com',
  contratto: 'determinato',
  teamSize: null,
  stakeholderPrincipali: []

}

const dipendente3: Dipendente = {
  nome: 'Mattia',
  cognome: 'rossi',
  annoNascita: 2000,
  sesso: 'm',
  anniDiServizio: [2025, 2024, 2023, 2022, 2021],
  emailAziendale: 'mail-azienda@mail.com',
  contratto: 'indeterminato',
  livelloEsperienza: 'Mid',
  linguaggi: ['Java', 'Python'],
  certificazioni: []
}


console.log(dipendente2, dipendente3)


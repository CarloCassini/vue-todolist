# Rifare l'esercizio della to do list. (done)

Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

### svolgimento:

    - creo un array di oggetti
    - collego css+js+bootrstap
    - eseguo qualche test per vedere se è tutto ok

## MILESTONE 1

Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

- creo un div differente per ogni elemento dell'array con "v-for"
- faccio un v-bind sull'attributo class="" in cui eseguo una verifica del valore booleano di "todo"
  - se true -> aggiungo la classe task-done all'elemenot creato

## MILESTONE 2

Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

## MILESTONE 3

Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

## Bonus:

1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

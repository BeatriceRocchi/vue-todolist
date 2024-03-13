# Vue To Do List

Rifare l’esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà: a) text, una stringa che indica il testo del todo e b) done, un booleano (true/false) che indica se il todo è stato fatto oppure no.

#### MILESTONE 1

Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

#### MILESTONE 2

Visualizzare a fianco ad ogni item ha un cestino: cliccando su di esso, il todo viene rimosso dalla lista.

#### MILESTONE 3

Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista.

#### Bonus

1. Esporre un messaggio di errore se il testo inserito ha meno di 4 caratteri
2. Cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
3. Rendere eliminabili solo i task con done === true. In caso contrario esporre un messaggio di errore diverso dal precedente
4. Se la lista è vuota stampare “Non sono presenti task” al posto della lista.

## Svolgimento

1. Predisporre ambiente per lavorare con Vue
2. In data, creare un array di oggetti (task), ciascuno due proprietà: a) text (stringa per descrivere il task) e b) done (booleano per indicare se il task è stato fatto)
3. Con un ciclo v-for nell'li, stampare tutti i task presenti nell'array di oggetti. All'li passare dinamicamente anche la classe done definita in css se il booleano done è true
4. Alla creazione del li con il ciclo v-for, recuperare anche l'indice dell'elemento nell'array
5. Al click sul cestino, richiamare la funzione removeTask a cui passare come argomento l'indice dell'elemento
6. Con la funzione removeTask(index), rimuovere dall'array l'elemento avente l'indice passato come parametro
7. In data, creare un oggetto newTask con le proprietà: a) text inizializzato come stringa vuota e b) done inizializzato a false
8. Inserire nel campo di input un v-model per leggere l'input inserito dall'utente che sarà la proprietà text di newTask
9. Al @click sul pulsante "Aggiungi" e/o al @keyup.enter sull'input, richiamare la funzione addTask
10. Con la funzione addTask, aggiungere all'array il newTask come primo elemento e poi resettare tutto l'oggetto newTask
11. In data, creare una variabile per il messaggio di errore inizializzata come stringa vuota
12. Aggiungere condizione per controllare lunghezza del testo di input nella funzione addTask. Se la lunghezza è inferiore a 4 caratteri, far apparire messaggio di errore
13. Al @click sull'li con il task, invertire proprietà done del task

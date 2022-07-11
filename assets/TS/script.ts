const input = document.querySelector('.input-nome') as HTMLInputElement;
const btn: HTMLElement = document.querySelector('.btn-nome') as HTMLButtonElement;
const table: HTMLElement = document.querySelector('.table') as HTMLTableElement;

// document.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         chamarIdade(input.value);
//     }
// })

btn.addEventListener('click', (event) => {
    if (!input.value) return;

    chamarIdade(input.value);
})

function addPessoa(pessoa: string, idade: string): void {
    const tr:HTMLElement = document.createElement('tr') as HTMLTableRowElement;

    let td1: HTMLElement = document.createElement('td') as HTMLTableCellElement;

    td1.innerHTML = pessoa;


    tr.appendChild(td1);


    let td2: HTMLElement = document.createElement('td') as HTMLTableCellElement;
    td2.innerHTML = idade;


    tr.appendChild(td2);

    tr.classList.add('tr-flex')

    table.appendChild(tr);

    limpaInput()

    removeIdadeBtn();

}

function limpaInput(): void {
    input.value = "";
    input.focus();

}

const container: HTMLElement = document.querySelector('.container-pessoas') as HTMLElement;

function chamarIdade(pessoa:string) : void {

    const crDiv: HTMLElement = document.createElement('div');


    const crBtn: HTMLElement = document.createElement('button') as HTMLButtonElement;

    
    const crInput = document.createElement('input') as HTMLInputElement;


    crInput.setAttribute('type', 'text');
    crInput.setAttribute('placeholder', 'Digite idade');


    crBtn.innerHTML = 'Adicionar Idade';
    crBtn.classList.add('btn-adicionar');


    crDiv.appendChild(crInput);
    crDiv.appendChild(crBtn);
    crDiv.classList.add('input-idade');


    container.appendChild(crDiv);

    crBtn.addEventListener('click', (event) => {
        if (!crInput.value) return;

        addPessoa(pessoa, crInput.value)
    })
}


function removeIdadeBtn(): void {
    const divIdade = document.querySelector('.input-idade') as HTMLDivElement;

    container.removeChild(divIdade);
}
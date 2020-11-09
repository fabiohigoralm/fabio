function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Adicionando dias ao calendario
function addDias() {
  const dezDaysList = [
    29,
    30,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];
  let addLi = document.querySelector('#days');

  for (i = 0; i < dezDaysList.length; i += 1) {
    let dia = dezDaysList[i];
    let listDiaItem = document.createElement('li');
    listDiaItem.setAttribute('class', 'day');
    listDiaItem.innerHTML = dia;
    addLi.append(listDiaItem);

    if (dezDaysList[i] == 24 || dezDaysList[i] == 25 || dezDaysList[i] == 31) {
      listDiaItem.className += ' holiday';
    }
    if (
      dezDaysList[i] == 4 ||
      dezDaysList[i] == 11 ||
      dezDaysList[i] == 18 ||
      dezDaysList[i] == 25
    ) {
      listDiaItem.className += ' friday';
    }
  }
}
addDias();
// Adicionando botao feriados!
function addBtFeriados(Feriados) {
  let btferiado = document.querySelector('.buttons-container');
  let bt = document.createElement('button');
  bt.id = 'btn-holiday';

  bt.innerHTML = 'Feriado';
  btferiado.appendChild(bt);
}
addBtFeriados();

// Adicionando botao sexta-feita!
function addBtSexta(Feriados) {
  let btsexta = document.querySelector('.buttons-container');
  let bt = document.createElement('button');
  bt.id = 'btn-friday';

  bt.innerHTML = 'Sexta-Feira!';
  btsexta.appendChild(bt);
}
addBtSexta();

// evento do botao feriado para mudar de cor o fundo
function corFeriado() {
  let corF = document.querySelectorAll('.holiday');

  for (let i = 0; i < corF.length; i += 1) {
    if (corF[i].style.backgroundColor === 'white') {
      corF[i].style.backgroundColor = '';
    } else {
      corF[i].style.backgroundColor = 'white';
    }
  }
}
// evento do botao sexta para mudar de cor o fundo
function corSexta() {
  let corS = document.querySelectorAll('.friday');

  const h3 = document.createElement('h3');

  for (let i = 0; i < corS.length; i += 1) {
    if (corS[i].innerText == 'Sextou o/') {
      corS[i].innerText = corS[i].previousElementSibling.innerHTML;
    } else {
      corS[i].innerHTML = 'Sextou o/';
    }
  }
}

//adicionando evento ao botao de feriado!
let btCor = document.querySelector('#btn-holiday');
btCor.addEventListener('click', corFeriado);

//adicionando evento ao botao de sexta-feira!
let btCor2 = document.querySelector('#btn-friday');
btCor2.addEventListener('click', corSexta);

// eventos dos cliques
function zoomLi() {
  const diasZ = document.getElementById('days');
  diasZ.addEventListener('mouseover', function (event) {
    event.target.style.fontWeight = '900';
  });
}
zoomLi();

function zoomOut() {
  const diasZ = document.getElementById('days');
  diasZ.addEventListener('mouseout', function (event) {
    event.target.style.fontWeight = '200';
  });
}
zoomOut();

function addTarefas(cor) {
  const tarefas = document.querySelector('.my-tasks');
  const createDiv = document.createElement('div');

  const createP = document.createElement('span');
  createP.innerText = 'Cozinhar';
  createP.id = 'atv';

  tarefas.appendChild(createP);

  createDiv.className = 'task';
  createDiv.style.background = cor;

  tarefas.appendChild(createDiv);
}
addTarefas('green');

const butAdd = document.querySelector('#btn-add');
function addCompro() {
  const valorTexto = document.querySelector('#task-input').value;

  const caixaTexto = document.querySelector('.tasks-container');
  const createSpan = document.createElement('span');

  createSpan.innerHTML = `${valorTexto}`;
  caixaTexto.appendChild(createSpan);
  console.log(valorTexto);
}
addCompro();
function limpacampo() {
  const valorTexto = document.querySelector('#task-input');
  valorTexto.value = '';
}
limpacampo();

butAdd.addEventListener('click', function confereVazio() {
  const valorTexto = document.querySelector('#task-input').value;
  if (valorTexto == '') {
    alert('Campo Vazio');
  } else {
    addCompro();
  }
});
butAdd.addEventListener('click', limpacampo);

//como selecionar objetvos e muda classe

function addSelecao() {
  const criandoCLasse = document.getElementsByClassName('task selected');
  const selecionadas = document.querySelector('.task');

  selecionadas.addEventListener('click', function (event) {
    if (criandoCLasse.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}
addSelecao();

//add cor com funçao de selecao

function addCor() {
  let diasSelec = document.getElementsByClassName('task selected'); //class criada na funçao add seleção
  let dias = document.querySelector('#days');
  let classCor = document.querySelector('.task');
  let corSalva = classCor.style.backgroundColor;

  dias.addEventListener('click', function (event) {
    let corCaptada = event.target.style.color;
    if (diasSelec.length > 0 && corCaptada !== corSalva) {
      let cor = diasSelec[0].style.backgroundColor;
      event.target.style.color = cor;
    } else if (corCaptada === corSalva && diasSelec.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}
addCor();




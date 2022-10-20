"use strict";

const panelMetaEl = document.querySelector(`.panelmeta`);
const panelAtualEl = document.querySelector(`.panelatual`);
const panelEstadoEl = document.querySelector(`.panelestado`);
const panelCidadeEl = document.querySelector(`.panelcidade`);
const panelSorteadoEl = document.querySelector(`.panelsorteado`);
const panelDoadoresEl = document.querySelector(`.paneldoadores`);
const sliderNumberEl = document.querySelector(`.slidernumber`);
const sliderCoverEl = document.querySelector(`.slidercover`);

const meta = 200;
const atual = 0;
const estado = `SORTEADO AOS 50%`;
const cidade = `SORTEADO AOS 100%`;
const sorteado = `A SER SORTEADO`;
const doadores = [`Lista de Doadores:`];

const percentage = (atual / meta) * 100;
let i = 0;

function slide() {
  if (i <= percentage) {
    sliderNumberEl.textContent = i + `%`;
    sliderCoverEl.style.transform = `translateX(${i}%)`;
    i++;
  }
}

function setPage() {
  panelMetaEl.textContent = meta;
  panelAtualEl.textContent = atual;
  panelEstadoEl.textContent = estado;
  panelCidadeEl.textContent = cidade;
  panelSorteadoEl.textContent = sorteado;

  doadores.forEach(function (doador, i) {
    const htmlCode = `
    <div class="doador">${doador} doou 1 PIX</div>`;
    panelDoadoresEl.insertAdjacentHTML(`beforeend`, htmlCode);
  });

  const intervalSlide = setInterval(slide, 120);
}

setPage();

import {createMenu} from "./components/main-menu.js";
import {createFilter} from "./components/filter.js";
import {createSort} from "./components/sort.js";
import {createAddCardForm} from "./components/new-card-form.js";
import {createCards} from "./components/card.js";
import {createLoadmoreBtn} from "./components/load-more-btn.js";
import {render} from "./components/render.js"

const main = document.querySelector(`.main`);

const menuEl = main.querySelector(`.main__control`);
render(menuEl, createMenu);

render(main, createFilter);

const $board = document.createElement(`section`);
$board.className = `board container`;
main.appendChild($board);

const boardEl = main.querySelector(`.board`);
render(boardEl, createSort);

const $tasks = document.createElement(`div`);
$tasks.className = `board__tasks`;

boardEl.appendChild($tasks);

const tasksEl = boardEl.querySelector(`.board__tasks`);
render(tasksEl, createAddCardForm);

const TASK_COUNT = 3;
for (let i = 0; i < TASK_COUNT; i++) {
  render(tasksEl, createCards);
}

render(boardEl, createLoadmoreBtn);

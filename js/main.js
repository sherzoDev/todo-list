const $form = document.querySelector(".form");
const $int = document.querySelector(".int");
const $btn = document.querySelector(".btn");
const $list = document.querySelector(".js-list");
const $unComplated = document.querySelector(".js-uncomplate-number");
const $complated = document.querySelector(".js-complate-number");
const $all = document.querySelector('.js-all-number');

let $arr = [];
let $intialId = 0;
let $todos = [];


const renderArray = function(array, element) {
    $list.innerHTML = '';
    const complatedArray = array.filter(function (item) {
        return item.isCompleted;
    })

    $complated.textContent = array.length - complatedArray.length;
    $all.textContent = array.length;

    array.forEach(element => {
        const $cloneTemp = document.querySelector
    });

    $form.addEventListener("submit", function(evt) {
        evt.preventDefault();
    });
}

let json = JSON.stringify(users);
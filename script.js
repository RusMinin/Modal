const modalBtns = document.querySelector('._modal-open');//получаем все кнопки которые у нас есть на странице
const modals = document.querySelector('._modal');//получаем все модальные окна которые есть на странице

const body = document.body;
//функция открытия модального окна
function openModal(elem) {
    elem.classlist.add('_active');
    body.classlist.add('_locked')
}

function closeModal(e) {
    if (e.target.classlist.contains('modal-close') || e.target.closest('.modal-close') || e.target.classlist.contains('.modal-bg')) {
        e.target.closest('._modal').classlist.remove('_active');
        body.classList.remove('_locked')
    }
}
// Данная функция представляет собой обработчик события для закрытия модальных окон. В функции происходит следующее:

// Проверяется, является ли элемент, на который произошло событие клика (e.target), кнопкой закрытия модального окна или элементом, содержащим класс "modal-close", или элементом, содержащим класс "modal-bg". Для этого выполняются следующие проверки:

// a) Проверяется, содержит ли e.target класс "modal-close" с помощью метода classList.contains('modal-close').

// b) Проверяется, содержит ли ближайший родительский элемент кнопки класс "modal-close" с помощью метода closest('.modal-close').

// c) Проверяется, содержит ли e.target класс ".modal-bg" с помощью метода classList.contains('.modal-bg').

// Если одно из условий (а, б или в) выполняется, то выполняются следующие действия:

// a) Находится ближайший родительский элемент с классом "_modal" с помощью метода closest('._modal').

// b) У найденного элемента удаляется класс "_active" с помощью метода classList.remove('_active').

// c) У элемента body удаляется класс "_locked" с помощью метода classList.remove('_locked').

// Таким образом, данная функция отвечает за закрытие модальных окон при клике на кнопку закрытия ("modal-close") или при клике на фон модального окна ("modal-bg")

    modalBtns.addEventListener('click', (e) => {
        openModal(modal);
    })

// Данный код представляет собой обработчик события клика на кнопки, которые имеют класс "modalBtns". Когда происходит клик на одной из этих кнопок, функция внутри обработчика выполняется.

// Внутри функции происходит следующее:

// Получение значения атрибута "data-modalOpen" у цели события (т.е. у кнопки, на которую был произведен клик) и сохранение его в переменную "data".

// Затем происходит перебор всех элементов с классом "modals". Для каждого элемента выполняется следующая проверка:

// a) Если значение атрибута "data-modal" у текущего модального окна совпадает с переменной "data", то вызывается функция "openModal" с этим модальным окном в качестве аргумента.

// b) Или, если значение атрибута "data-modal" у текущего модального окна совпадает со значением атрибута "data-modalOpen" у ближайшего родительского элемента кнопки (с классом "_modal-open"), то также вызывается функция "openModal" с этим модальным окном.

// // Таким образом, данная функция отвечает за открытие модальных окон в зависимости от значения атрибутов "data-modal" и "data-modalOpen".

modals.forEach(modal => {
    modal.addEventListener('click', e => closeModal(e))
})

window.addEventListener('keydown', e => {
    modals.forEach(modal => {
        if (e.key === "Escape" && modal.classList.contains('_active')) {
            modal.classList.remove('_active');
            body.classList.remove('_locked');
        }
    })
})
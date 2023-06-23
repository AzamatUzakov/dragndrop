const empties = document.querySelectorAll('.empty')
let boxse = document.querySelector('#boxes')

let two = document.querySelector('#two')
let three = document.querySelector('#three')
console.log();
let temp_id
let temp = []

let images = [
    Alex = "img/daler_aka.svg",
    Muhammad = "img/five_img.svg",
    Otabek = "img/foor_img.svg",
    Daler = "img/daler_aka.svg",
    Azamat = "img/three_img.svg",
    Alisher = "img/three_img.svg",
    Malik = "img/one_img.svg",
    Davlat = "img/daler_aka.svg",
    Timur = "img/daler_aka.svg",


]
let todos = []

for (let todo of todos) {
    let div = document.createElement('div')
    let b = document.createElement('b')
    let p = document.createElement('p')

    div.setAttribute('id', todo.id)
    div.setAttribute('class', 'fill')
    div.setAttribute('draggable', true)

    b.innerHTML = todo.title
    p.innerHTML = todo.description

    div.append(b, p)
    empties[0].append(div)

    temp.push(div)

    div.ondragstart = () => {
        temp_id = todo.id
        div.classList.add('hold')
        setTimeout(() => (div.className = 'invisible'), 0)
    }
    div.ondragend = () => {
        div.className = 'fill'
    }
}

for (empty of empties) {

    empty.ondragover = (event) => {
        event.preventDefault()
    }
    empty.ondragenter = function (event) {
        event.preventDefault()
        this.className += ' hovered'
    }
    empty.ondragleave = function () {
        this.className = 'empty'
    }
    empty.ondrop = function () {
        this.className = 'empty'
        temp.forEach((item, index) => {
            if (item.id === temp_id) {
                this.append(item)
            }
        })
    }
}




/* .//////////////////////////////////////////////////////// */





let create = document.querySelector('.create')
let close = document.querySelector('.close')
let modal_bg = document.querySelector('.modal')
let forms = document.querySelector('.change')
let cont = document.querySelector('.contener')



function reload(arr) {

    boxse.innerHTML = ""
    two.innerHTML = ''
    three.innerHTML = ''

    for (let item of arr) {

        let block_item = document.createElement('div')
        let task_name_p = document.createElement('p')
        let description_p = document.createElement('p')
        let name_p = document.createElement('p')
        let img_face = document.createElement('img')
        let dedline_p = document.createElement('p')
        let status = document.createElement('p')

        block_item.classList.add('block_item')


        task_name_p.innerHTML = item.task
        description_p.innerHTML = item.description
        name_p.innerHTML = item.name
        dedline_p.innerHTML = item.deline


        if (item.status === 'todo'.toLowerCase()) {
            boxse.append(block_item)
        } else if (item.status === 'doing'.toLowerCase()) {
            two.append(block_item)
        } else if (item.status === 'done'.toLowerCase()) {
            three.append(block_item)
        }



        block_item.append(task_name_p, description_p, name_p, img_face, dedline_p)




    }

}




forms.onsubmit = (event) => {
    event.preventDefault()


    let todo = {
        id: Math.random(),
        isDone: false,
        time: new Date().getHours() + ":" + new Date().getMinutes()
    }

    let fm = new FormData(event.target)

    fm.forEach((value, key) => {
        todo[key] = value
    })

    todos.push(todo)
    reload(todos)
}







create.onclick = () => {
    modal_bg.style.display = 'block'
}


close.onclick = () => {
    modal_bg.style.display = 'none'

}

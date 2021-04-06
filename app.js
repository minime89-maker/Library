'use strict';

const books = document.querySelector('.books-container')
const form = document.getElementById('form-container')
const newBook = document.getElementById('newBook')
const submit = document.getElementById('submit')

class Book {
    constructor(title, author, pages){
        this.title = title
        this.author = author
        this.pages = pages
    }

    createCard (){
        const card = document.createElement('div')
        card.classList.add('books')
        const info = document.createElement('div')
        info.classList.add('info')
        const btn = document.createElement('div')
        btn.classList.add('btn')
        const title = document.createElement('p')
        title.classList.add('title')
        const author = document.createElement('p')
        author.classList.add('author')
        const pages = document.createElement('p')
        pages.classList.add('pages')
        const read = document.createElement('button')
        read.classList.add('read')
        read.textContent = 'Read'
        const remove = document.createElement('button')
        remove.classList.add('remove')
        remove.textContent = 'Remove'

        books.appendChild(card)
        card.appendChild(info)
        card.appendChild(btn)
        info.appendChild(title)
        info.appendChild(author)
        info.appendChild(pages)
        btn.appendChild(read)
        btn.appendChild(remove)

        title.innerHTML = `Title: <strong>"${book.title}"</strong>`
        author.innerHTML = `Author: <strong> ${book.author}</strong>`
        pages.innerHTML = `Pages: <strong> ${book.pages}</strong>`

        read.addEventListener('click', () => {
            if(read.textContent === 'Read'){
                read.textContent = 'Unread'
                read.style.textDecoration = 'line-through  #e84545'
                read.style.color = '#e84545'
            } else {
                read.textContent = 'Read'
                read.style.textDecoration = 'none'
                read.style.color = '#fff'
            }
        })

        remove.addEventListener('click', () => {
            books.removeChild(card)
        })
    }
}

let book = new Book('To Kill a Mockingbird', 'Harper Lee', 109)
book.createCard()

newBook.addEventListener('click', () => {
    if(form.style.display === 'none'){
        form.style.display = 'block'
        newBook.style.transform = 'rotate(-45deg)'
        newBook.style.borderRadius = '50%'
        newBook.style.padding = '6px 19px'
        newBook.style.backgroundColor = '#e84545'
        newBook.style.transition = '0.7s'
    } else {
        form.style.display = 'none'
        newBook.style.transform = 'rotate(-180deg)'
        newBook.style.borderRadius = '0'
        newBook.style.padding = '6px 16px'
        newBook.style.backgroundColor = '#557174'
    }
})

submit.addEventListener('click', (e) => {
    e.preventDefault()

    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    book = new Book(title, author, pages)
    book.createCard()  
})

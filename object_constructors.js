
const myLibrary=[]

addBookToLibrary('Harry Potter','J. K. Rowling', 4100)
addBookToLibrary('Dune','Frank Herbert', 2632, 'yes')

function Book(id,title,author,pages,read){

    //OBJECT CONSTRUCTOR to make book objects
    this.id=id
    this.title=title
    this.author=author
    this.pages=pages
    this.read=Boolean(read)
    this.info= function(){
        return `The ${this.title} by ${this.author}, ${this.pages} pages, read ${this.read}`

    }
}

Book.prototype.sayHello=function(){
    return 'Heyya, I\'m Book'
}

function addBookToLibrary(title,author,pages,read){

    //FUNCTION that adds the book object into myLibrary array
    let id=crypto.randomUUID()
    myLibrary.push(new Book(id,title,author,pages,read))
    return true
}

const table=document.getElementById('DisplayBooks')
const showform=document.getElementById('showForm')
const form=document.getElementById('form')
const inputs=document.querySelectorAll('input')

function displayBooks(arr){
    let innerHTML=''
    for (let i=0; i < arr.length; i++){
        innerHTML+=`
        <tr>
        <td>${arr[i]['id']}</td>
        <td>${arr[i]['title']}</td>
        <td>${arr[i]['author']}</td>
        <td>${arr[i]['pages']}</td>
        <td>${arr[i]['read']}</td>
        <td><button type="button" data-id=${arr[i]['id']}>Remove Book</button></td>
        </tr>
        `
    }
    return innerHTML
}

table.innerHTML+=displayBooks(myLibrary)

showform.addEventListener('click',()=>{
    form.style.display='block'
    showform.style.display='none'
    document.getElementById('author').focus()
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    form.style.display='none'
    showform.style.display='block'

    let formData=new FormData(form)
    let data=Object.fromEntries(formData)

    addBookToLibrary(data.title,data.author,data.pages,data.read)
    table.innerHTML+=displayBooks([myLibrary[myLibrary.length-1]])
    
    inputs.forEach(input=>{
        input.value=''
    })
})

table.addEventListener('click', (e)=>{
    if (e.target.tagName==='BUTTON'){
        e.target.parentNode.parentNode.remove()

        //removing from array
        popIndex=myLibrary.indexOf(book=>{
            e.target.dataset.id==book.id
        })
        myLibrary.splice(popIndex)
    }
})

//b2 = new Book('Harry Potter','J. K. Rowling', 4100)
//b1= new Book('Dune','Frank Herbert', 2632, true)
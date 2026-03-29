function Book(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.info= function(){
        return `The ${this.title} by ${this.author}, ${this.pages} pages, read ${this.read}`
    }
}

Book.prototype.sayHello=function(){
    return 'Heyya, I\'m Book'
}

//b2 = new Book('harry','bones',6000,false)
//b1= new Book('dune','frank',5000,true)
function MakeBooks(titel, author, category, link, date) {
    var obj = {}
    obj.titel = titel
    obj.author = author
    obj.category = category
    obj.read = false
    obj.date = date
    return obj
}

function MakeBooksList() {
    var obj = {}
    obj.bookReaded = 0
    obj.bookNotReaded = 0
    obj.arrayBooks = []
    obj.nextBook = {}
    obj.currentBook = {}
    obj.lastBook = {}
    obj.add = addBook
    // obj.getNextBook=getNextBook
    // obj.finishCurrentBook=finishCurrentBook
    return obj
}
var addBook = function (book) {
    this.arrayBooks.push(book)
    // this.bookNotReaded ++
    // this.currentBook=getCurrentBooks(this.arrayBooks)
    // this.nextBook=getTheNextBook(this.arrayBooks)
}


var booklist1 = MakeBooksList()



$('#show-formulaire').click(function () {
    $('.book-formulaire').toggle()
    $('#add').toggle()
   
})



function addItem() {

    var newTitle = $('#title').val()
    var newAuthor = $('#author').val()
    var newCategory = $('#category').val()
    var date = $('#date').val()
    var newBook = MakeBooks(newTitle, newAuthor, newCategory, date)
    console.log("hi ", newBook)
    booklist1.add(newBook)
    $('.book-formulaire').hide();
    $('.book-formulaire').hide(); 


}





function display() {
    for (let i = 0; i < booklist1.arrayBooks.length; i++) {
        $('#list-of-books').append(`

<tr>
<td>${booklist1.arrayBooks[i].titel}</td>
<td>${booklist1.arrayBooks[i].author}</td>
<td>${booklist1.arrayBooks[i].category}</td>
<td>${booklist1.arrayBooks[i].read}</td>
<td>${booklist1.arrayBooks[i].date}</td>

</tr>

`)
    }
}
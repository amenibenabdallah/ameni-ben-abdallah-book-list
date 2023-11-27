function MakeBooks(titel, author, category, link, date) {
    var obj = {}
    obj.titel = titel
    obj.author = author
    obj.category = category
    
    return obj
}

function MakeBooksList() {
    var obj = {}
    
    obj.arrayBooks = []
   
    obj.add = addBook
    
    obj.finishBook=finishBook
    return obj
}

//methode of the object
// first methode add book
var addBook = function (book) {
    this.arrayBooks.push(book)
    
}
var finishBook=function(){
    
        booklist1.arrayBooks.shift()
    }

//clear button functionality
$('#clear-list').click(function () {
    
    $('#list-of-books').empty()
    $('#list-of-books').append(`
    
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            
        </tr>

    `)
})


var booklist1 = MakeBooksList()


// new book button functionality
$('#show-formulaire').click(function () {
    $('.book-formulaire').toggle()
    $('#add').toggle()  
})
$('#add').click(function () {
    $('#add').toggle()
})

//clear button functionality
$('#clear-list').click(function () {
    
    $('#list-of-books').empty()
    $('#list-of-books').append(`
    
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            
        </tr>

    `)
})

//finish book button functionality
$('#finish').click(function () {
    booklist1.finishBook
    display()
})



//function used when click add to create new book
function addItem() {

    var newTitle = $('#title').val()
    var newAuthor = $('#author').val()
    var newCategory = $('#category').val()
   
    var newBook = MakeBooks(newTitle, newAuthor, newCategory)
    console.log("hi ", newBook)
    booklist1.add(newBook)
    $('.book-formulaire').hide();
     


}





function display() {
    for (let i = 0; i < booklist1.arrayBooks.length; i++) {
        $('#list-of-books').append(`

<tr>
<td>${booklist1.arrayBooks[i].titel}</td>
<td>${booklist1.arrayBooks[i].author}</td>
<td>${booklist1.arrayBooks[i].category}</td>


</tr>

`)
    }
}


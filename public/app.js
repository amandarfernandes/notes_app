$(function(){
    $.getJSON("/api/notes")
        .then(addNotes);
});

function addNotes(notes) {
    $('#notes').text(notes.length+" notes")
    notes.forEach(function(note){
        addNote(note);
    });
    getNoteDetail(notes[0]);
    
}

function getNoteDetail(note) {
    $('#noteTitle').val(note.title);
    $('#noteText').html(note.text);
    $('li:first').addClass('border');
}

function addNote(note){
    console.log(note.title);
    $('.list').append('<li>'+note.title+'<span>'+note.created+'</span></li>');
}
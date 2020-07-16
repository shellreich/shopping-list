// enter items they need by entering text and hitting return or clicking the add item button
// stop default action of the event

$('#js-shopping-list-form').submit(function(event) {

  event.preventDefault();

  // create variable to hold entry
    var item = $('#js-shopping-list-entry').val();
    
    
// create entry, append to list
    
   let newItem = '<li><span class="shopping-item">'+$("#shopping-list-entry").val()+'</span>' + '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' + '<span class="button-label">check</span> ' + '</button> '+ '<button class="shopping-item-delete">'+ '<span class="button-label">delete</span>'+ '</button>'+ '</div >'+ '</li > ';
    
    $('.shopping-list').append(newItem);
       });




// check and uncheck items on the list by clicking check button
$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});




// permanently remove items from the list
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });
  








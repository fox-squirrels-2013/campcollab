var Event = {
  init: function(){
    $('form#new_item').on('ajax:success', this.handleSuccess)
    // $('form#new_item').on('ajax:error', this.handleError)
    $('div#item-list').on('ajax:success', 'a.dlt-item', this.handleSuccess)
    $('div#item-list').on('ajax:error', 'a.dlt-item', this.handleError)
    // $('div#item-list').on('ajax:error', 'a.dlt-item', function() {console.log("error")})
  },

  handleSuccess: function(e, response) {
    debugger
    $('div#item-list').html(response)
  },

   handleError: function(e, response) {
    // debugger
  }
}

$(document).ready(function(){

  Event.init();
})
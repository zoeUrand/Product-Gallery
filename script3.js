// Attempt to target the click event

// $(document).ready(function() {
//
//   $('.button').click(function(event) {
//
//     // Target button
//     var $eventTarget = $(event.target);
//     console.log("$eventTarget ", $eventTarget);
//
//     // Target specific button
//     var $button = $eventTarget.closest('.button');
//
//     // Toggle to button--shrink
//     // $button.toggleClass('button--shrink');
//
//     // Toggle to left
//     $button.toggleClass('left');
//
//     // Show hidden item
//     $button.toggleClass('show');
//
//   });
// });

$(document).ready(function() {

  // Button
  var $control = $('.control');
  $('.control').click(function(event) {
    $('.button').toggleClass('button--shrink');
    $('.button').toggleClass('left');
    $('.counter-container').toggleClass('show');
    $('.hidden-icon-button').toggleClass('show');
  });

  // Attempt to add item counter
  // $('.counter-button--minus').on('click', function(e) {
  //   e.preventDefault();
  //   var $this = $(this);
  //   var $input = $this.closest('div').find('input');
  //   var value = parseInt($input.val());
  //
  //   if (value & amp; gt; 1) {
  //     value = value - 1;
  //   } else {
  //     value = 0;
  //   }
  //
  //   $input.val(value);
  //
  // });
  //
  // $('.counter-button--plus').on('click', function(e) {
  //   e.preventDefault();
  //   var $this = $(this);
  //   var $input = $this.closest('div').find('input');
  //   var value = parseInt($input.val());
  //
  //   if (value & amp; lt; 100) {
  //     value = value + 1;
  //   } else {
  //     value = 100;
  //   }
  //
  //   $input.val(value);
  // });

});

// GENERIC SUBNAV TRIGGER
        // Get all the buttons in the document
        const buttons = document.querySelectorAll('.js-trigger-subnav');
       
        // Add click event listener to each button
        buttons.forEach(button => {
          button.addEventListener('click', () => {
            // Get the parent element of the clicked button
            const parent = button.parentNode;
            const grandpa = parent.parentNode;
            
            // Toggle the 'highlight' class on the parent element
            grandpa.classList.toggle('--subnav-active');
          });
        });
       

        
        
        // CLOSE OTHERS BEFORE OPENING SELF
        document.addEventListener('DOMContentLoaded', function() {
            var buttons = document.querySelectorAll('.js-trigger-subnav--lvl1');
            
            buttons.forEach(function(button) {
              button.addEventListener('click', function() {
                var buttonParent = button.closest('.sidebar-item--lvl1');
                console.log (buttonParent);
                if (buttonParent.classList.contains('--subnav-active')) {
                  buttonParent.classList.remove('--subnav-active');
                } else {
                  var siblings = Array.from(buttonParent.parentNode.children);
                  siblings.forEach(function(sibling) {
                    sibling.classList.remove('--subnav-active');
                  });
                  buttonParent.classList.add('--subnav-active');
                }
              });
            });
          });




        // SHOW ARCHIVED
        // Get the button element
        const showArchived = document.querySelector('.js-show-archived');

        // Add click event listener to the button
        showArchived.addEventListener('click', () => {
        // Toggle the "highlight" class on the button
        showArchived.classList.toggle('--active');
        });


        // OPEN SIDEBAR SMALL SCREEN
        function toggleClassOnClick() {
        var elementsB = document.getElementsByClassName('sidebar');
        
        for (var i = 0; i < elementsB.length; i++) {
            elementsB[i].classList.toggle('--active');
        }
        }

        // Attach the click event listener to the elements with class "element-a"
        var elementsA = document.getElementsByClassName('js-sidebar-toggle');
        for (var i = 0; i < elementsA.length; i++) {
        elementsA[i].addEventListener('click', toggleClassOnClick);
        }
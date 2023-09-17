// Function to remove the overlay after 3 seconds 
     function removeOverlay() { 
       var overlay = document.getElementById('overlay'); 
       overlay.style.display = 'none'; 
     } 
  
     // Event listener for the page load event 
     window.addEventListener('load', function() { 
       setTimeout(removeOverlay, 3000); // Remove overlay after 4 seconds (3000 milliseconds) 
     }); 
  
  
     function showRandomOverlayLoader() { 
       var randomOverlayLoader = document.getElementById('random-overlay-loader'); 
       randomOverlayLoader.style.display = 'flex'; 
     } 
  
     function hideRandomOverlayLoader() { 
       var randomOverlayLoader = document.getElementById('random-overlay-loader'); 
       randomOverlayLoader.style.display = 'none'; 
     }

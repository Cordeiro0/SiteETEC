indice = 0;
             function avancar() { 
             let images = document.getElementById("carousel").children;
                 for (let i = 0; i < images.length; i++) {
                     images[i].style.display = "none";
                 }
                 indice = (indice - 1 + images.length) % images.length;
                 images[indice].style.display = "block";
                 }

             function depois() {
                 
                 let images = document.getElementById("carousel").children;
                 for (let i = 0; i < images.length; i++) {
                     images[i].style.display = "none";
                 }
                 indice = (indice - 1 + images.length) % images.length;
                 images[indice].style.display = "block";
             }
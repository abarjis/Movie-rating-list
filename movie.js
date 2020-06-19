
   let currentId = 0;
   let movieList = [];
   
   //when DOMcontent loaded
   $(function() {
   
   
       //add movies and ratings into the form.
       $("#movie-form").on("submit", function(e) {
           e.preventDefault();
   
           //set movieData obj, key, value
           let title = $("#title").val();
           let rating = $("#rating").val();
           let movieData = { title, rating, currentId };
   
           //update id and movieList
           currentId++;
           movieList.push(movieData);
           //make movieTable then append to tbody
           const movieTable = createMovieDataHtml(movieData);
           $("tbody").append(movieTable);
           //rest the form for new inputs
           $("#movie-form").trigger("reset");
       });
       
   });
   
   // A function returns 1 tr and 3 tds: title, rating and delete Btn.
   
   function createMovieDataHtml(data) {
       return `
           <tr>
               <td>${data.title}</td>
               <td><${data.rating}</td>
               <td>
                   <button class="deleteBtn" id="${data.currentId}">Delete</button>
                </td>
            </tr>
               `;
   }



   //click delete btn to remove from movieList
   
       // });
       $("#tbody").on("click", ".deleteBtn", function() {
        $(this).closest("tr").remove();
     });
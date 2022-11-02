import React from "react";

function Library () {
    return (
        <section>
            <form class="example" action="action_page.php">
        <input type="text" placeholder="Search.." name="search"></input>
        <button type="submit"><i class="fa fa-search"></i>Search</button>
        </form>
        <div class="swiper mySwiper container">
          <div class="swiper-wrapper content">
    
            <div class="swiper-slide card one">
              <div class="card-content">
                <div class="image-one">
                <img src="images/img9.jpg" alt=""></img>
                </div>
    
            <div class="name-game">
                  <span class="title">Persona 5</span>
            </div>
            <div class="button">
                  <button class="title">Add Game</button>
            </div>
              </div>
            </div>
            <div class="swiper-slide card two">
              <div class="card-content">
                <div class="image-two">
                <img src="images/img9.jpg" alt=""></img>
                </div>
                <div class="name-game">
                  <span class="title">Genshin Impact</span>
                 
                </div>
                <div class="button">
                  <button class="title">Add Game</button>
                  </div>
              </div>
            </div>
            <div class="swiper-slide card three">
              <div class="card-content">
                <div class="image-three">
                <img src="images/img9.jpg" alt=""></img>
                </div>
    
               <div class="name-game">
                  <span class="title">Final Fantasy VII</span>
                 </div>
                 <div class="button">
                  <button class="title">Add Game</button>
                  </div>
    
    
    
          
            </div>
            </div>
    
          </div>
        </div>
    
       
      </section>
    
    
        
    )
}

export default Library;
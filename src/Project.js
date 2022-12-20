import React from 'react'

function Project() {
  return (
    <section id="work" class="portfolio-mf sect-pt4 route">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">
             My Project
            </h3>   
            <p class="subtitle-a">
              Make some projects with my own idea
            </p>
            <div class="line-mf"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="work-box">
            
              <div class="work-img">
                <img src="img/zomato.png" alt="" class="img-fluid"/>
              </div>
              <div className='col-lg-12'>

                <div class="row">
                  {/* <div class="col-sm-8">
                    <h2 class="w-title">Lorem impsum dolor</h2>
                    <div class="w-more">
                      <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <span class="ion-ios-plus-outline"></span>
                    </div>
                  </div> */}
                <div className='col-lg-12 mt-2 mb-3'>
                  <a href="https://velvety-choux-721dba.netlify.app/" target="_blank" class="stretched-link">Click My Zomato Clone</a>                  
                  <div className='col-lg-12 mt-2'>
                    <p>Full Stack Project The Clone Of Zomato Website </p>
                  <span class="badge text-bg-secondary">React js</span>    
                   <span class="badge text-bg-secondary">Node js</span>
                    <span class="badge text-bg-secondary">Express js</span>
                    <span class="badge text-bg-secondary">MongoDB</span>
                    <span class="badge text-bg-secondary">JavaScript</span>
                    <span class="badge text-bg-secondary">Bootstrap</span>
                    <span class="badge text-bg-secondary">Netlify</span>
                    <span class="badge text-bg-secondary">Render</span>
                  </div>
                  </div>                  
                </div>
              </div>           
          </div>
        </div>
        
        
        
        
        <div class="col-md-4">
          <div class="work-box">
              <div class="work-img">
                <img src="img/portfolio.png" alt="" class="img-fluid"/>
              </div>
              <div className='col-lg-12'>
                <div class="row">
                <div className='col-lg-12 mt-2 '>
                  <a href="https://magnificent-cranachan-79826b.netlify.app/#home" target="_blank" class="stretched-link">Click My Portfolio</a>                  
                  <div className='col-lg-12 mt-4 mb-4'>
                  <p>My Personal Website Built With React</p>
                  <span class="badge text-bg-secondary">React js</span>                      
                    <span class="badge text-bg-secondary">JavaScript</span>
                    <span class="badge text-bg-secondary">Bootstrap</span>
                    <span class="badge text-bg-secondary">Netlify</span>                    
                  </div>
                  </div>                                 
                </div>
            </div>      
          </div>
        </div>


        <div class="col-md-4">
          <div class="work-box">
              <div class="work-img">
                <img src="img/makeup.png" alt="" class="img-fluid"/>
              </div>
              <div className='col-lg-12'>
                <div class="row">
                <div className='col-lg-12 mt-2 '>
                  <a href="https://euphonious-taffy-120cd3.netlify.app/" target="_blank" class="stretched-link">Click My Makeup</a>                  
                  <div className='col-lg-12 mt-4 mb-4'>
                  <p>Makeup Website Is Creating For Fetch API</p>
                    <span class="badge text-bg-secondary">JavaScript</span>
                    <span class="badge text-bg-secondary">DOM</span>                  
                    <span class="badge text-bg-secondary">HTML</span>
                    <span class="badge text-bg-secondary">CSS</span>                      
                    <span class="badge text-bg-secondary">Netlify</span>
                    
                  </div>
                  </div>                  
                
                  
                </div>
              </div>
            
          </div>
        </div>

        </div>
        </div>

        
    
  </section>
  )
}

export default Project
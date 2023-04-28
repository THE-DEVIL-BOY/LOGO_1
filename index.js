setTimeout(()=>{
    $(".cont1").addClass("ani1");
    setTimeout(()=>{
        $(".cont1").removeClass("ani1");
        $(".cont1").addClass("ani2");
        setTimeout(()=>{
            $(".cont1").removeClass("ani2");
            $(".cont1").addClass("ani3");
            setTimeout(()=>{
                $(".cont1").removeClass("ani3");
                $(".cont1").addClass("ani4");
                setTimeout(()=>{
                    $(".cont1").removeClass("ani4");
                    $(".cont1").addClass("ani5");       
                    $(".cont1").css({"background-image": "url(img.png)"});  
                    
                    setTimeout(()=>{
                        $(".cont1").removeClass("ani5");
                        setTimeout(()=>{
                            $(".cont1").addClass("large");       
                            $(".cont").addClass("fade1");       
                            $(".cont").removeClass("hide");        
                            setTimeout(()=>{
                              $(".cont2").removeClass("hide");       
                              setTimeout(()=>{
                                $(".cont1").addClass("hide");       
                                setTimeout(()=>{
                                    $(".cont2").addClass("ani6");       
                                    $(".cont2").css({"background-image": "url(pick2.jpeg)"});
                                    setTimeout(()=>{
                                        $(".cont").css({"background-image": "url(1679146755invoicelogo.jpg)"});
                                        setTimeout(()=>{
                                            $(".cont2").addClass("hide");       
                                          },870.5,)      
                                      },860.5,)
                                  },850.5,) 
                                  
                              },850.5,) 
                            },850.2,)     
   
                        },850,)
                    },800,)  

                },750,)
            },700,)
        },650,)

    },600)
},500)
// function fadeOut() {
//   const element = document.querySelector('.fade');
//   element.classList.add('hide');
// }

// function fadeIn() {
//   const element = document.querySelector('.fade');
//   element.classList.remove('hide');
//   // setTimeout(() => {
//   //   element.classList.remove('fade');
//   // }, 100);
// } 
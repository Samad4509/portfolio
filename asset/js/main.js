var typed = new Typed('#text', {
    strings: ['<i>Frontend Developer</i>.', '&amp; Backend Developer.'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true

  });
  var MyVar=document.querySelector("#experience");

  function Experience(){
    MyVar.innerHTML="<h5  style='color: #00eeff'>TRAINING</h5> <h5>Institute :</h5>Bangladesh Association of Software & Information Services <br><h5>Location :</h5>BDBL Bhaban (4th Floor), 12 Kawran Bazar, Dhaka<br><h5>Duration :</h5>6 Months";
  }
  function Education(){
    MyVar.innerHTML="<h5  style='color: #00eeff'>2023</h5>BSc from American International University Bangladesh(AIUB).<br> <h5  style='color: #00eeff'>2017</h5>Advanced Residential Model College (Mymensingh)<br><h5  style='color: #00eeff'>2015</h5>Gohailkandi High School(Mymensingh)";
  }



  const scriptURL = 'https://script.google.com/macros/s/AKfycbzthrwJBNJjI577hEz4VQIBNiVyDiSl9UIzl5hdEwy9fL_hx5OWMtId4upnAkHDK_c8/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Thank you for your message"
        setTimeout(function(){
          msg.innerHTML= ""
        },5000)
        form.reset()

      })
      .catch(error => console.error('Error!', error.message))
  })

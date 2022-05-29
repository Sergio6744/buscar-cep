function pegar() {

   let cep = document.querySelector('#cep')
   
   let resp = document.querySelector('#resp')
   
   cep = cep.value
   let len = `${cep}`
   
   if (len.length != 8) {
   
     resp.style.color = "red"
     resp.innerHTML = ""
     resp.innerHTML += "o cep deve ter 8 caracteres"
     len = 0
     
   } else {
              fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.text())
      .then(response => {
   
         resp.style.color="black"
         resp.innerHTML = ""
         let obj =JSON.parse(response)
         len = 0
         
         let c = 0
         
         for (i in obj) {

            c = c + 1
            resp.innerHTML += `${i} : ${obj[i]}` 
            if (obj[i] == "") {
               resp.innerHTML += "?????<br>"
            } if (obj[i] != "") {
               resp.innerHTML += "<br>"
            }
         }
         if (c == 1) {
            resp.innerHTML = ""
            resp.innerHTML = "cep não encontrado "
         }
         c = 0
      })
   
      .catch(response => {resp
 
         len = 0
         resp.style.color="red"
         resp.innerHTML = ""
         resp.innerHTML += "erro! ×"
      
      })
   }
}

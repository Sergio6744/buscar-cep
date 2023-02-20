document.addEventListener("keydown", (t)=>{
   if(t.key === 'Enter') {
      let cep = document.querySelector("#cep").value
      let rspst = document.querySelector("#resp")
      if(cep.length != 8 || /[a-z]/i.test(cep)) {
         rspst.innerHTML = ""
         rspst.style.color = "red"
         rspst.innerHTML = "O cep deve ter somente 8 NÚMEROS"
      } else {
         cep = parseInt(cep)
         fetch(`https://viacep.com.br/ws/${cep}/json/`)
         .then(async api => {
            let resp = await api.json()
            rspst.style.color = "black"
            rspst.innerHTML = ""
            for(let i in resp) {
               if(i === "erro") {
                  rspst.innerHTML = "cep não encomtrado."
                  break
               }
               rspst.innerHTML += i + " : " 
               if(resp[i] === "") {
                  rspst.innerHTML += "<span class='vl'> ----- <span>"
               } else {
                  rspst.innerHTML += `<spn class="vl"> ${resp[i]} </span>`
               }
               rspst.innerHTML += "<br>"
            }
         })
         .catch(() => {
            rspst.style.color = "red"
            rspst.innerHTML = ""
            rspst.innerHTML = "Erro, verifique a sua conexão."
         })
      }
   }
})
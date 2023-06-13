function criaFormulario() { 
//<----------------------------------------------------------->
//Parte Inicial do Formulario.
  
  let formu = document.createElement("form");
  formu.name = "myForm"
  formu.setAttribute("id", "myForm");
  document.body.appendChild(formu);


  let texto = document.createElement("input")
  texto.setAttribute("type", "text");
  texto.name = "validarNome";
  document.getElementById("myForm").appendChild(texto).placeholder = "Escreva Seu nome!";

  
  let emai = document.createElement("input");
  emai.setAttribute("type", "email");
  document.body.appendChild(emai).placeholder = "Seu Email";

  let telefone = document.createElement("input")
  telefone.setAttribute("type", "tel");
  telefone.name = "telefon";
  document.getElementById("myForm").appendChild(telefone).placeholder = "Telefone";  
  let pulaLinha = document.createElement('br');

  
// <------------------------------------------------------------->



//------------------------------------------------------------ Inicio Radio button 1
  let labela = document.createElement("label");
  let conteudo = document.createTextNode(" Carne Exótica")
  labela.setAttribute("for", "Carne Exotica");
  
  let pulaLinha3 = document.createElement('br');
  document.body.appendChild(pulaLinha3); //precisa ficar 
  
  labela.appendChild(conteudo);
  document.body.appendChild(labela);
  
  let radio = document.createElement("input");
  radio.setAttribute("type", "radio");
  document.body.appendChild(radio).name = "radius";
//--------------------------------------- Fim do Radio button 1


  //<--------------------------------------------------------------> Inicio Radio button 2 
  let labela2 = document.createElement("label");
  let conteudo2 = document.createTextNode("Carne Tradicional");
  labela2.setAttribute("for", "Carne Tradicional");
  labela2.appendChild(conteudo2);
  
  let pulaLinha2 = document.createElement('br');
  document.body.appendChild(pulaLinha2);
  document.body.appendChild(labela2);
  
  let radio2 = document.createElement("input");
  radio2.setAttribute("type", "radio");
  document.body.appendChild(radio2).name = "radius";
//<-------------------------------------------------------------> fim radion button 2


//<------------------------------------------------------------->  Inicio Radio Button 3
  let labela3 = document.createElement("label");
  let conteudo3 = document.createTextNode("Ambas");
  labela3.setAttribute("for", "Ambas");
  labela3.appendChild(conteudo3);

  let pulaLinha4 = document.createElement('br');
  document.body.appendChild(pulaLinha4);
  document.body.appendChild(labela3);
  
  
  let radios3 = document.createElement("input");
  radios3.setAttribute("type", "radio");
  document.body.appendChild(radios3).name = "radius";
//<---------------------------------------------> Fim Radio Button 3



//  <--------------------------------> Inicio Botão Select
   let pulaLinha16 = document.createElement('br');
    document.body.appendChild(pulaLinha16);
   let myParent = document.body;
  
  let pulaLinha5 = document.createElement('br');
  document.body.appendChild(pulaLinha5);

  var listaSelect = document.createElement("select");
  listaSelect.id = "mySelect";
  myParent.appendChild(listaSelect);

  let opcao1 = document.createElement("option");
  opcao1.text = "Bovina";
  listaSelect.add(opcao1)

  let opcao2 = document.createElement("option");
  opcao2.text = "Suína";
  listaSelect.add(opcao2);
  
  let opcao3 = document.createElement("option");
  opcao3.text = "Aves";
  listaSelect.add(opcao3);
 

  let opcao4 = document.createElement("option");
  opcao4.text = "Frutos do Mar";
  listaSelect.add(opcao4);
 
  let opcao5 = document.createElement("option");
  opcao5.text = "Outras";
  listaSelect.add(opcao5);
//<-------------------------------------------------> Fim Botão Select



  
  //<---------------------------------------------------------------> Inicio Checkbox
  let pulaLinha6 = document.createElement('br');
  document.body.appendChild(pulaLinha6);
 
  let pulaLinha7 = document.createElement('br');
  document.body.appendChild(pulaLinha7);
  
  
  let labela4 = document.createElement("label");
  let conteudo4 = document.createTextNode("Receber Comunicações por");
  labela4.setAttribute("for", "Comunicacao");
  labela4.appendChild(conteudo4);

  document.body.appendChild(labela4);

  let pulaLinha8 = document.createElement('br');
  document.body.appendChild(pulaLinha8);

  let pulaLinha9 = document.createElement('br');
  document.body.appendChild(pulaLinha9);


  let labela5 = document.createElement("label");
  let conteudo5 = document.createTextNode("Todos os Meios");
  labela5.setAttribute("for", "Meios");
  labela5.appendChild(conteudo5);
  document.body.appendChild(labela5);

  
  let checaBox = document.createElement("input");
  checaBox.setAttribute("type", "checkbox");
  document.body.appendChild(checaBox);

   let pulaLinha10 = document.createElement('br');
  document.body.appendChild(pulaLinha10);
  
  let labela6 = document.createElement("label");
  let conteudo6 = document.createTextNode("E-mail");
  labela6.setAttribute("for", "Meios");
  labela6.appendChild(conteudo6);
  document.body.appendChild(labela6);  

  let checaBox2 = document.createElement("input");
  checaBox2.setAttribute("type", "checkbox");
  document.body.appendChild(checaBox2);
  
 let pulaLinha11 = document.createElement('br');
  document.body.appendChild(pulaLinha11);

  let labela7 = document.createElement("label");
  let conteudo7 = document.createTextNode("SMS");
  labela7.setAttribute("for", "Meios");
  labela7.appendChild(conteudo7);
  document.body.appendChild(labela7);  

  let checaBox3 = document.createElement("input");
  checaBox3.setAttribute("type", "checkbox");
  document.body.appendChild(checaBox3);


  let pulaLinha17 = document.createElement('br');
  document.body.appendChild(pulaLinha17);


  let labela8 = document.createElement("label");
  let conteudo8 = document.createTextNode("Marcar/Desmarcar todos");
  labela8.id = "marcaTudo";
  labela8.setAttribute("for", "Marcar");
  labela8.appendChild(conteudo8);
  document.body.appendChild(labela8);  
  

  let checaBox4 = document.createElement("input");
  checaBox4.setAttribute("type", "checkbox");
  document.body.appendChild(checaBox4);

  
  //<-------------------------------------------------------------------> Fim Checkbox.


//<-----------------------------------------------------> Final do formulario
  
  let pulaLinha12 = document.createElement('br');
  document.body.appendChild(pulaLinha12);

  let pulaLinha13 = document.createElement('br');
  document.body.appendChild(pulaLinha13);
  
 let areaTexto =  document.createElement("textarea");
  areaTexto.name = "nomeArea"
  document.body.appendChild(areaTexto).placeholder = "Deixe uma Mensagem para Nós!";


  let pulaLinha14 = document.createElement('br');
  document.body.appendChild(pulaLinha14);
  
  let pulaLinha15 = document.createElement('br');
  document.body.appendChild(pulaLinha15);
  
  let botaoEnviar = document.createElement("input");
  botaoEnviar.setAttribute("type", "submit");
  botaoEnviar.addEventListener('click', validacao);
  document.body.appendChild(botaoEnviar).value = 'Enviar Formulario'
  
}

//<-----------------------------------------------------------> Final do formulario.

//<---------------------------------> Validações:

function validacao(){ 


  if(document.myForm.validarNome.value == ""){
    alert("Não deixe o Nome em branco, preencha-o");
    return false;
  }

  
if(document.myForm.telefon.value == "") {

  alert("Não deixe o seu numero de telefone em Branco, preencha-o.");
  return false;
}

if(document.myForm.telefon.value.length <= 11){

  alert("O numero de telefone deve ter 11 dígitos.");
  return false;
}
  
}

criaFormulario();

 

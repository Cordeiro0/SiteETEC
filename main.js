let MateriasADM1 = ["Língua Portuguesa", " Língua Inglesa"," Arte"," Educação Física"," Matemática"," Física"," Química"," Biologia"," História"," Geografia"," Estudos Avançados em Ciências Humanas e Sociais Aplicadas"," Estudos Avançados em Matemática e suas Tecnologias"," Laboratório de Investigação Científica"," Práticas de Emprendedorismo"," Desenvolvimento de Ações de Marketing e dos Processos Comerciais", " Legislação EMpresarial"," Planejamento e Organização de Rotinas  Administrativas"," Aplicativos Informatizados"]
let MateriasADM2 = ["Língua Portuguesa","Língua Inglesa","Educação Física"," Matemática"," Física"," Química"," Biologia"," História"," Geografia"," Filosofia"," Estudos Avançados em Ciências Humanas e Sociais Aplicadas"," Estudos Avançados em Matemática e suas Tecnologias"," Laboratório de Investigação Científica"," Laboratório de Mediação e Intervenção Sociocultural"," Laboratório de Processos Criativos"," Custos, Processos e Operações contábeis"," Planejamento e Organização de Rotinas de Departamento Pessoal"," Desenvolvimento de Modelos de Negócios"," Estudos da Administração Pública"]
let MateriasADM3 = ["Língua Portuguesa"," Língua Inglesa"," Língua Espanhola"," Matemática"," Sociologia"," Estudos Avançados em Ciências Humanas e Sociais Aplicadas"," Estudos Avançados em Matemática e suas Tecnologias"," Administração Financeira e Orçamentária"," Administração da Produção e Serviços"," Administração de Recursos Humanos"," Estudos de Economia, Mercado e de Comércio Internacional"," Ética e Cidadania organizacional"]

var jaClicou = true; 








var materias = document.getElementById("materias-curso")

function TrocarTituloCurso(){

      var adm = document.getElementById("tituloADM")
      adm.addEventListener("click", function(){
       title = document.getElementById("cursos-nome-curso").innerHTML = "Administração"
          document.getElementById("desc-curso").innerHTML = "O técnico em administração é o profissional que adota postura ética na execução da rotina administrativa, na elaboração do planejamento da produção e materiais, recursos humanos, financeiros e mercadológicos. Ele realiza atividades de controles organizacional e auxilia nos processos de direção utilizando ferramentas da informática básica. Fomenta ideias e práticas empreendedoras desempenha suas atividades observando as normas de segurança, saúde e higiene do trabalho, bem como as de preservação ambiental."
          
          var btn1 = document.getElementById("ano-curso1");
           btn1.addEventListener("click", function(){
            materias.innerHTML = "Portugues" + "<br>" + "Materias asjdnjlasn"
         }) 

         var btn2 = document.getElementById("ano-curso2");
         btn2.addEventListener("click", function(){
            materias.innerHTML = MateriasADM2 + "<br>"  
            })

         var btn3 = document.getElementById("ano-curso3");
         btn3.addEventListener("click", function(){
            for(i=0;i<MateriasADM3.length;i++){
                if(jaClicou){
                    materias.innerHTML += MateriasADM3[i] + "<br>"
                }
                jaClicou = false;
            }
           
            //FAZER UM SISTEMA PARA LIMPAR AS MATERIAS APÓS O CLIQUE EM OUTRA MATERIA

         })   
        })

      var ds = document.getElementById("tituloDS")
      ds.addEventListener("click", function(){
        document.getElementById("cursos-nome-curso").innerHTML = "Desenvolvimento de Sistemas"
        document.getElementById("desc-curso").innerHTML = "O técnico em desenvolvimento de sistemas é o profissional que analisa e desenvolve sistemas computacionais; modela, implementa e mantém banco de dados; realiza testes de programas de computador e mantém os registros para a análise do desempenho do sistema desenvolvido. Além disso, ele aplica princípios e paradigmas de programação para solucionar problemas, elabora a documentação do sistema e executa manutenção contínua dos programas do computador."

        var btn1 = document.getElementById("ano-curso1");
           btn1.addEventListener("click", function(){
            document.getElementById("materias-curso").innerHTML = "Teste DS1"
         }) 

         var btn2 = document.getElementById("ano-curso2");
         btn2.addEventListener("click", function(){
            document.getElementById("materias-curso").innerHTML = "Teste DS2"
            })

         var btn3 = document.getElementById("ano-curso3");
         btn3.addEventListener("click", function(){
            document.getElementById("materias-curso").innerHTML = "Teste DS3"
        })   
      })

     let MateriasMKT1 = ["Língua Portuguesa", " Língua Inglesa", " Arte", " Educação Física", " Matemática", " Física", " Química", " Biologia", " História", " Geografia", " Estudos Avançados em Ciências Humanas e Sociais Aplicadas", " Estudos Avançados em Linguagens em suas Tecnologias", " Laboratório de Investigação Científica", " Aplicativos informatizados", " Introdução ao Marketing e Comunicação Integrada", " Pesquisa de Mercado e Comportamento do Consumidor", " Projeto Integrador I"]

      var mkt = document.getElementById("tituloMKT")
      mkt.addEventListener("click", function(){
        mktTitle = document.getElementById("cursos-nome-curso").innerHTML = "Marketing"
        mktDesc = document.getElementById("desc-curso").innerHTML = "Além disso, ele executa tarefa de análise das vendas, preços e produtos; cuida das políticas de comunicação da empresa como a fidelização de clientes, relação com fornecedores ou outras entidades; elabora apresentações dos produtos com foco na venda e participa na elaboração e realização de estudos de mercado.  "
        
        var btn1 = document.getElementById("ano-curso1");
           btn1.addEventListener("click", function(){
            document.getElementById("materias-curso").innerHTML = MateriasMKT1
         }) 

         var btn2 = document.getElementById("ano-curso2");
         btn2.addEventListener("click", function(){
            document.getElementById("materias-curso").innerHTML = "Teste MKT2"
            })

         var btn3 = document.getElementById("ano-curso3");
         btn3.addEventListener("click", function(){
            document.getElementById("materias-curso").innerHTML = "Teste MKT3"
        })  
      

      })

      var rh = document.getElementById("tituloRH")
      rh.addEventListener("click", function(){
        document.getElementById("cursos-nome-curso").innerHTML = "Recursos Humanos"
        document.getElementById("desc-curso").innerHTML = "O técnico em recursos humanos é o profissional que organiza a rotina diária da gestão de pessoas e auxilia no processo de recrutamento e seleção pessoal. Ele elabora documentos administrativos, confere a frequência, os benefícios, os afastamentos e as transferências de funcionários. Realiza contratação e registro de funcionários conforme a legislação trabalhista e efetua lançamentos de folha de pagamento."
        
        var btn1 = document.getElementById("ano-curso1");
           btn1.addEventListener("click", function(){
            document.getElementById("materias-curso").innerHTML = "Teste RH1"
         }) 

         var btn2 = document.getElementById("ano-curso2");
         btn2.addEventListener("click", function(){
            document.getElementById("materias-curso").innerHTML = "Teste RH2"
            })

         var btn3 = document.getElementById("ano-curso3");
         btn3.addEventListener("click", function(){
            document.getElementById("materias-curso").innerHTML = "Teste RH3"
        })
    })
  }



function Validar(){
    nome = document.getElementsByName("inp-nome");
    email = document.getElementsByName("inp-email");
    fone = document.getElementsByName("inp-fone");

    if(nome.value === "" || email.value === "" || fone.value === ""){
        alert("Preencha todos os campos");
                    return false;
    }
    else{
        alert("Mensagem enviada!");
    }
}

function Funcionando(){
    alert("Estou funcionando");
}
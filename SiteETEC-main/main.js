var jaClicou = true; 

var cursos = document.querySelector(".list-group-item")
var materias = document.getElementById("materias-curso")

function TrocarTituloCurso(){

      var adm = document.getElementById("tituloADM")
      adm.addEventListener("click", function(){
       title = document.getElementById("cursos-nome-curso").innerHTML = "Administração"
          document.getElementById("desc-curso").innerHTML = "O técnico em administração é o profissional que adota postura ética na execução da rotina administrativa, na elaboração do planejamento da produção e materiais, recursos humanos, financeiros e mercadológicos. Ele realiza atividades de controles organizacional e auxilia nos processos de direção utilizando ferramentas da informática básica. Fomenta ideias e práticas empreendedoras desempenha suas atividades observando as normas de segurança, saúde e higiene do trabalho, bem como as de preservação ambiental."
          adm.addEventListener("mouseenter", ()=> {
            materias.innerHTML = "";
          })
          
          var btn1 = document.getElementById("ano-curso1");
           btn1.addEventListener("click", function(){
            materias.innerHTML = "Língua Portuguesa" + "<br>" + "Lingua Inglesa" + "<br>" + "Arte" + "<br>" + "Educação Física" + "<br>" + "Matemática" + "<br>" + "Física" + "<br>" + "Química" + "<br>" + "Biologia" + "<br>" + "História" + "<br>" + "Geografia" + "<br>" + "Estudos Avançados em Ciências Humanas e Sociais Aplicadas" + "<br>" + "Estudos Avançados em Matemática e suas Tecnologias" + "<br>" + "Laboratório de Investigação Científica" + "<br>" + "Práticas de Emprendedorismo" + "<br>" + "Desenvolvimento de Ações de Marketing e dos Processos Comerciais" + "<br>" + "Legislação Empresarial" + "<br>" + "Planejamento e Organização de Rotinas  Administrativas" + "<br>" + "Aplicativos Informatizados"
         }) 

         var btn2 = document.getElementById("ano-curso2");
         btn2.addEventListener("click", function(){
            materias.innerHTML = "Língua Portuguesa" + "<br>" + "Língua Inglesa" + "<br>" + "Educação Física" + "<br>" + "Matemática" + "<br>" + "Física" + "<br>" + "Química" + "<br>" + "Biologia" + "<br>" + "História" + "<br>" + "Geografia" + "<br>" + "Filosofia" + "<br>" + "Estudos Avançados em Ciências Humanas e Sociais Aplicadas" + "<br>" + "Estudos Avançados em Matemática e suas Tecnologias" + "<br>" + "Laboratório de Mediação e Intervenção Sociocultural" + "<br>" + "Laboratório de Processos Criativos" + "<br>" + "Custos, Processos e Operações contábeis" + "<br>" + "Planejamento e Organização de Rotinas de Departamento Pessoal" + "<br>" + "Desenvolvimento de Modelos de Negócios" + "<br>" + "Estudos da Administração Pública"
            })

         var btn3 = document.getElementById("ano-curso3");
         btn3.addEventListener("click", function(){
              materias.innerHTML = "Língua Portuguesa" + "<br>" +  "Língua Inglesa" + "<br>" + "Língua Espanhola" + "<br>" + "Matemática" + "<br>" + "Sociologia" + "<br>" + "Estudos Avançados em Ciências Humanas e Sociais Aplicadas" + "<br>" + "Estudos Avançados em Matemática e suas Tecnologias" + "<br>" + "Administração Financeira e Orçamentária" + "<br>" + "Administração da Produção e Serviços" + "<br>" + "Administração de Recursos Humanos" + "<br>" + "Estudos de Economia, Mercado e de Comércio Internacional" + "<br>" + "Ética e Cidadania organizacional"
               })
            //FAZER UM SISTEMA PARA LIMPAR AS MATERIAS APÓS O CLIQUE EM OUTRA MATERIA

        })

      var ds = document.getElementById("tituloDS")
      ds.addEventListener("click", function(){
        document.getElementById("cursos-nome-curso").innerHTML = "Desenvolvimento de Sistemas"
        document.getElementById("desc-curso").innerHTML = "O técnico em desenvolvimento de sistemas é o profissional que analisa e desenvolve sistemas computacionais; modela, implementa e mantém banco de dados; realiza testes de programas de computador e mantém os registros para a análise do desempenho do sistema desenvolvido. Além disso, ele aplica princípios e paradigmas de programação para solucionar problemas, elabora a documentação do sistema e executa manutenção contínua dos programas do computador."
        ds.addEventListener("mouseenter", ()=> {
         materias.innerHTML = "";
       })

        var btn1 = document.getElementById("ano-curso1");
           btn1.addEventListener("click", function(){
         document.getElementById("materias-curso").innerHTML = "Língua Portuguesa" + "<br>" + "Língua Inglesa" + "<br>" + "Arte" + "<br>" + "Educação Física" + "<br>" + "Matemática" + "<br>" + "Física" + "<br>" + "Química" + "<br>" + "História" + "<br>" + "Estudos Avançados em Ciências da Natureza e suas Tecnologias" + "<br>" + "Estudos Avançados em Matemática e suas Tecnologias" + "<br>" + "Laboratório de Investigação Científica" + "<br>" + "Práticas de Empreendedorismo" + "<br>" + "Programação Web I" + "<br>" + "Análise e Projeto de Sistemas" + "<br>"  + "Design Digital" + "<br>" + "Fundamentos da Informática" + "<br>" + "Técnicas de Programação e Algoritmos" + "Banco de Dados I" 
         }) 

         var btn2 = document.getElementById("ano-curso2");
         btn2.addEventListener("click", function(){
            document.getElementById("materias-curso").innerHTML = "Língua Portuguesa" + "<br>" + "Língua Inglesa" + "<br>" + "Educação Física" + "<br>" + "Matemática" + "<br>" + "Física" + "<br>" + "Química" + "<br>" + "Biologia" + "<br>" + "História" + "<br>" + "Geografia" + "<br>" + "Estudos Avançados em Ciências da Natureza e suas Tecnologias" + "<br>" + "Estudos Avançados em Matemática e suas Tecnologias" + "<br>" + "Estudos Avançados em Matemática e suas Tecnologias" + "<br>" + "Laboratório de Mediação e Intervenção Sociocultural" + "<br>" + "Programação Web II" + "<br>" + "Banco de Dados II" + "<br>" + "Desenvolvimento de Sistemas" + "<br>" + "Ética e Cidadania organizacional" + "<br>" + "Programação de Aplicativos Mobile I"
            })

         var btn3 = document.getElementById("ano-curso3");
         btn3.addEventListener("click", function(){
            document.getElementById("materias-curso").innerHTML = "Língua Portuguesa" + "<br>" + "Língua Inglesa" + "<br>" + "Língua Espanhola" + "<br>" + "Matemática" + "<br>" + "Biologia" + "<br>" + "Geografia" + "<br>" + "Filosofia" + "<br>" + "Sociologia" + "<br>" + "Estudos Avançados em Ciências da Natureza e suas Tecnologias" + "<br>" + "Estudos Avançados em Matemática e suas Tecnologias" + "<br>" + "Programação Web III" + "<br>" + "Programação de Aplicativos Mobile II" + "<br>" + "Internet, Protocolos e Segurança de Sistemas da Informação" + "<br>" + "Planejamento e Desenvolvimento do Trabalho de Conclusão de Curso (TCC) em Desenvolvimento de Sistemas" + "<br>" + "Qualidade e Teste de Software" + "<br>" + "Sistemas Embarcados"
        })   
      })

      var mkt = document.getElementById("tituloMKT")
      mkt.addEventListener("click", function(){
        mktTitle = document.getElementById("cursos-nome-curso").innerHTML = "Marketing"
        mktDesc = document.getElementById("desc-curso").innerHTML = "Além disso, ele executa tarefa de análise das vendas, preços e produtos; cuida das políticas de comunicação da empresa como a fidelização de clientes, relação com fornecedores ou outras entidades; elabora apresentações dos produtos com foco na venda e participa na elaboração e realização de estudos de mercado.  "
        mkt.addEventListener("mouseenter", ()=>{
            materias.innerHTML = "" 
        })

        var btn1 = document.getElementById("ano-curso1");
           btn1.addEventListener("click", function(){
            document.getElementById("materias-curso").innerHTML = "Língua Portuguesa" + "<br>" + "Língua Inglesa" + "<br>" + "Educação Física" + "<br>" + "Matemática" + "<br>" + "Física" + "<br>" + "Química" + "<br>" + "Biologia" + "<br>" + "História" + "<br>" + "Geografia" + "<br>" + "Filosofia" + "<br>" + "Estudos Avançados em Ciências Humanas e Sociais Aplicadas" + "<br>" + "Estudos Avançados em Linguagens em suas Tecnologias" + "<br>" + "Laboratório de Mediação e Intervenção Sociocultural" + "<br>" + "Laboratório de Processos Criativos" + "<br>" + "Projeto Integrador II" + "<br>" + "Estratégias de Marketing e Modelos de Negócios" + "<br>" + "Ética e Cidadania Organizacional" + "<br>" + "Promoção de Vendas e Merchandising" + "<br>" + "Informática Aplicada ao Marketing"
         }) 

         var btn2 = document.getElementById("ano-curso2");
         btn2.addEventListener("click", function(){
            document.getElementById("materias-curso").innerHTML = "Língua Portuguesa" + "<br>" + "Língua Inglesa" + "<br>" + "Educação Física" + "<br>" + "Matemática" + "<br>" + "Física" + "<br>" + "Química" + "<br>" + "Biologia" + "<br>" +  "História" + "<br>" + "Geografia" + "<br>" + "Filosofia" + "<br>" + "Estudos Avançados em Ciências Humanas e Sociais Aplicadas" + "<br>" + "Estudos Avançados em Linguagens em suas Tecnologias" + "<br>" + "Laboratório de Mediação e Intervenção Sociocultural" + "<br>" + "Laboratório de Processos Criativos" + "<br>" + "Projeto Integrador II" + "<br>" + "Estratégias de Marketing e Modelos de Negócios" + "<br>" + "Ética e Cidadania Organizacional" + "<br>" + "Promoção de Vendas e Merchandising" + "Informática Aplicada ao Marketing" 
            })

         var btn3 = document.getElementById("ano-curso3");
         btn3.addEventListener("click", function(){
            document.getElementById("materias-curso").innerHTML = "Língua Portuguesa" + "<br>" + "Língua Inglesa" + "<br>" + "Língua Espanhola" + "Matemática" + "<br>" + "Sociologia" + "<br>" + "Administração Financeira Aplicada ao Marketing" + "<br>" + "Canais de Distribuição" + "<br>" + "Legislação de Mercado" + "<br>" + "Marketing de Relacionamento" + "<br>" + "Marketing Digital e E-Commerce" + "<br>" + "Marketing Institucional" + "<br>" + "Planejamento e Desenvolvimento do Trabalho de Conclusão de Curso (TCC) em Marketing" + "<br>" + "Plano de Marketing"
        })  
      

      })

      var rh = document.getElementById("tituloRH")
      rh.addEventListener("click", function(){
        document.getElementById("cursos-nome-curso").innerHTML = "Recursos Humanos"
        document.getElementById("desc-curso").innerHTML = "O técnico em recursos humanos é o profissional que organiza a rotina diária da gestão de pessoas e auxilia no processo de recrutamento e seleção pessoal. Ele elabora documentos administrativos, confere a frequência, os benefícios, os afastamentos e as transferências de funcionários. Realiza contratação e registro de funcionários conforme a legislação trabalhista e efetua lançamentos de folha de pagamento."
        rh.addEventListener("mouseenter", ()=> {
            materias.innerHTML = ""
        })

        var btn1 = document.getElementById("ano-curso1");
           btn1.addEventListener("click", function(){
         document.getElementById("materias-curso").innerHTML = "Língua Portuguesa" + "<br>" + "Língua Inglesa" +  "<br>" + "Arte" + "<br>" + "Educação Física" + "<br>" + "Matemática" + "<br>" + "Física" + "<br>" + "Química" + "<br>" + "Biologia" + "<br>" + "História" + "<br>" + "Geografia" + "<br>" + "Rotinas de Departamento Pessoal" + "<br>" + "Aplicativos informatizados" + "<br>" + "Recrutamento e Seleção de Pessoal" + "<br>" + "Projeto Integrador I"
         }) 

         var btn2 = document.getElementById("ano-curso2");
         btn2.addEventListener("click", function(){
            document.getElementById("materias-curso").innerHTML = "Língua Portuguesa" + "<br>" + "Língua Inglesa" + "<br>" + "Educação Física" + "<br>" + "Matemática" + "<br>" + "Física" + "<br>" + "Química" + "<br>" + "Biologia" +  "<br>" + "História" + "<br>" + "Geografia" + "<br>" + "Filosofia" + "<br>" + "Projeto Integrador II" + "<br>" + "Cálculos de Folha de Pagamento" + "<br>" + "Estudos do Regime de Trabalho Celetista" + "<br>" + "Relações Jurídicas do Trabalho"
             })

         var btn3 = document.getElementById("ano-curso3");
         btn3.addEventListener("click", function(){
         document.getElementById("materias-curso").innerHTML = "Língua Portuguesa" + "<br>" + "Língua Inglesa" + "<br>" + "Língua Espanhola" + "Matemática" + "<br>" + "Sociologia" + "<br>" + "Cargos, Carreira e Remuneração" + "<br>" + "Comunicação Corporativa" + "<br>" + "Qualidade de Vida e Saúde e Segurança do Trabalho" + "<br>"+ "Gestão de Desempenho" + "<br>" + "Modelos de Gestão" + "<br>" + "Comportamento Organizacional" + "<br>" + "Ética e Cidadania organizacional" + "<br>" + "Planejamento e Desenvolvimento do Trabalho de Conclusão de Curso (TCC) em Recursos Humanos"
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

function MostrarMenuMobile(){
   let menuMobile = document.querySelector(".mobile-menu");
   if (menuMobile.classList.contains("open")){
      menuMobile.classList.remove("open");
   }

   else{
      menuMobile.classList.add("open");
   }
}


function Funcionando(){
    alert("Estou funcionando");
}




function toggleMenu() {
   const nav = document.querySelector('.ajuste-nav');
   nav.classList.toggle('open');
}




const slideshow = document.querySelector(".slideshow");
const list = document.querySelector(".slideshow .slides");
const btns = document.querySelectorAll(".slideshow .arrows .arrow");
const prevBtn = document.querySelector(".slideshow .arrow-prev");
const prevBtnChild = document.querySelector(
  ".slideshow .arrow-prev span"
);
const nextBtn = document.querySelector(".slideshow .arrow-next");
const nextBtnChild = document.querySelector(
  ".slideshow .arrow-next span"
);
const main = document.querySelector("main");
const autoplayInterval =
  parseInt(slideshow.dataset.autoplayInterval) || 4000;
const isActive = "is-active";
const isVisible = "is-visible";
let intervalID;

window.addEventListener("load", () => {
  changeSlide();
  autoPlay();
  stopAutoPlayOnHover();
  customizeArrows();
});

function changeSlide() {
  for (const btn of btns) {
    btn.addEventListener("click", (e) => {
      const activeSlide = document.querySelector(".slide.is-active");
      activeSlide.classList.remove(isActive);
      if (e.currentTarget === nextBtn) {
        activeSlide.nextElementSibling
          ? activeSlide.nextElementSibling.classList.add(isActive)
          : list.firstElementChild.classList.add(isActive);
      } else {
        activeSlide.previousElementSibling
          ? activeSlide.previousElementSibling.classList.add(isActive)
          : list.lastElementChild.classList.add(isActive);
      }
    });
  }
}

function autoPlay() {
  if (slideshow.dataset.autoplay === "true") {
    intervalID = setInterval(() => {
      nextBtn.click();
    }, autoplayInterval);
  }
}

function stopAutoPlayOnHover() {
  if (
    slideshow.dataset.autoplay === "true" &&
    slideshow.dataset.stopAutoplayOnHover === "true"
  ) {
    slideshow.addEventListener("mouseenter", () => {
      clearInterval(intervalID);
    });

    slideshow.addEventListener("touchstart", () => {
      clearInterval(intervalID);
    });
  }
}

function customizeArrows() {
  slideshow.addEventListener("mousemove", mousemoveHandler);
  slideshow.addEventListener("touchmove", mousemoveHandler);
  slideshow.addEventListener("mouseleave", mouseleaveHandler);
  main.addEventListener("touchstart", mouseleaveHandler);
}

function mousemoveHandler(e) {
  const width = this.offsetWidth;
  const xPos = e.pageX;
  const yPos = e.pageY;
  const xPos2 = e.pageX - nextBtn.offsetLeft - nextBtnChild.offsetWidth;

  if (xPos > width / 2) {
    prevBtn.classList.remove(isVisible);
    nextBtn.classList.add(isVisible);

    nextBtnChild.style.left = `${xPos2}px`;
    nextBtnChild.style.top = `${yPos}px`;
  } else {
    nextBtn.classList.remove(isVisible);
    prevBtn.classList.add(isVisible);

    prevBtnChild.style.left = `${xPos}px`;
    prevBtnChild.style.top = `${yPos}px`;
  }
}

function mouseleaveHandler() {
  prevBtn.classList.remove(isVisible);
  nextBtn.classList.remove(isVisible);
}


function search() {
  var input = document.getElementById('searchInput').value.trim().toUpperCase();
  var products = document.querySelectorAll('.product');
  var categories = document.querySelectorAll('.category-title');

  products.forEach(function(product) {
      var title = product.querySelector('.title').innerText.toUpperCase();
      var synopsis = product.querySelector('.synopsis').innerText.toUpperCase();
      var price = product.querySelector('.price').innerText.toUpperCase();
      var category = product.closest('.category');

      if (title.includes(input) || synopsis.includes(input) || price.includes(input)) {
          product.style.display = ''; // Exibe o produto
          if (category) {
              category.style.display = ''; // Exiba a categoria do produto
          }
      } else {
          product.style.display = 'none'; // Oculte o produto
      }
  });

  // Ocultar títulos de categoria sem produtos correspondentes
  categories.forEach(function(category) {
      var categoryProducts = category.nextElementSibling.querySelectorAll('.product');
      var categoryVisible = Array.from(categoryProducts).some(function(product) {
          return product.style.display !== 'none';
      });
      if ((!category.innerText.toUpperCase().includes(input) && !categoryVisible) && input !== '') {
          category.style.display = 'none';
      } else {
          category.style.display = ''; // Exibe a categoria
      }
  });
}

const abrirModal = document.querySelector("#abrir-modal");
const fecharModal = document.querySelector("#fechar-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const eventos = [abrirModal, fade, fecharModal];

var vingadores2aSerieN1 = document.getElementById("Vingadores_2ª_Série_n°_1");
var vingadoresAssuntosDeFamilia = document.getElementById("Vingadores_Assuntos_de_Família");
var vingadores3AOrigemSecretaDoUniverso = document.getElementById("Vingadores_3_A_Origem_Secreta_do_Universo");
var viuvaNegraLacosQueUnem = document.getElementById("Viuva_Negra_Laços_Que_Unem");
var feiticeiraEscarlate2023N1 = document.getElementById("Feiticeira_Escarlate_(2023)_n°1");

var supermanEntreAFoiceEOMartelo = document.getElementById("Superman_Entre_a_Foice_e_o_Martelo");
var batmanACacaDaBesta = document.getElementById("Batman_à_Caça_da_Besta");
var besouroAzulConfrontoFinal = document.getElementById("Besouro_Azul_Confronto_Final");
var mulherMaravilha = document.getElementById("Mulher_Maravilha");
var lanternaVerdeOfensivaEsmeralda = document.getElementById("Lanterna_Verde_Ofensiva_Esmeralda");

var starWarsC3PO2 = document.getElementById("Star_Wars_C-3PO");
var starWarsYodasSecretWar = document.getElementById("Star_Wars_Yoda's_Secret_War");
var starWarsChewbacca = document.getElementById("Star_Wars_Chewbacca");
var starWarsDarthVader = document.getElementById("Star_Wars_Darth_Vader");
var starWarsKananTheLastPadawan = document.getElementById("Star_Wars_Kanan_the_Last_Padawan");

var add = document.getElementById("add");
var carrinho = document.getElementById("pedidos");
var limpar = document.getElementById("btn-limpar");
var valorTotal = document.getElementById("valor-total");
var soma = 0;

var soma = 0;
const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};
eventos.map(el => {
  el.addEventListener("click", () => toggleModal());
});
limpar.addEventListener("click", () => {
  carrinho.innerHTML = "";
  valorTotal.innerHTML = "<p>Valor Total :</p>";
  soma = 0;
});

var quadrinhos = [
  { nome: "Vingadores, Os 2ª Série - n° 1", valor: 25.00 },
  { nome: "Vingadores Assuntos de Família", valor: 60.00 },
  { nome: "Vingadores 3 A Origem Secreta do Universo", valor: 9.90 },
  { nome: "Viuva Negra Laços Que Unem", valor: 49.90 },
  { nome: "Feiticeira Escarlate (2023) n°1", valor: 7.90 },
  { nome: "Superman Entre a Foice e o Martelo", valor: 62.90 },
  { nome: "Batman à caça da besta", valor: 39.99 },
  { nome: "Besouro Azul confronto final?", valor: 10.90 },
  { nome: "Mulher Maravilha", valor: 209.79 },
  { nome: "Lanterna Verde ofensiva esmeralda", valor: 14.00 },
  { nome: "Star Wars C-3PO", valor: 7.90 },
  { nome: "Star Wars Yoda's Secret War", valor: 59.97 },
  { nome: "Star Wars Chewbacca", valor: 41.90 },
  { nome: "Star Wars Darth Vader", valor: 32.71 },
  { nome: "Star Wars Kanan the Last Padawan", valor: 39.90 }
];

function adicionarQuadrinhoAoCarrinho(index) {
  soma += quadrinhos[index].valor;
  carrinho.innerHTML += `<p>${quadrinhos[index].nome} - R$ ${quadrinhos[index].valor.toFixed(2)}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
}

vingadores2aSerieN1.addEventListener("click", () => {
  adicionarQuadrinhoAoCarrinho(0);
});

vingadoresAssuntosDeFamilia.addEventListener("click", () => {
  adicionarQuadrinhoAoCarrinho(1);
});

vingadores3AOrigemSecretaDoUniverso.addEventListener("click", () => {
  adicionarQuadrinhoAoCarrinho(2);
});

viuvaNegraLacosQueUnem.addEventListener("click", () => {
  adicionarQuadrinhoAoCarrinho(3);
});

feiticeiraEscarlate2023N1.addEventListener("click", () => {
  adicionarQuadrinhoAoCarrinho(4);
});

supermanEntreAFoiceEOMartelo.addEventListener("click", () => {
  adicionarQuadrinhoAoCarrinho(5);
});

batmanACacaDaBesta.addEventListener("click", () => {
  adicionarQuadrinhoAoCarrinho(6);
});

besouroAzulConfrontoFinal.addEventListener("click", () => {
  adicionarQuadrinhoAoCarrinho(7);
});

mulherMaravilha.addEventListener("click", () => {
  adicionarQuadrinhoAoCarrinho(8);
});

lanternaVerdeOfensivaEsmeralda.addEventListener("click", () => {
  adicionarQuadrinhoAoCarrinho(9);
});

starWarsC3PO2.addEventListener("click", () => {
  adicionarQuadrinhoAoCarrinho(10);
});

starWarsYodasSecretWar.addEventListener("click", () => {
  adicionarQuadrinhoAoCarrinho(11);
});

starWarsChewbacca.addEventListener("click", () => {
  adicionarQuadrinhoAoCarrinho(12);
});

starWarsDarthVader.addEventListener("click", () => {
  adicionarQuadrinhoAoCarrinho(13);
});

starWarsKananTheLastPadawan.addEventListener("click", () => {
  adicionarQuadrinhoAoCarrinho(14);
});

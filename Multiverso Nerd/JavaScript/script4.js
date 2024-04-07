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

var harryPotterEAsReliquiasDaMorte = document.getElementById("Harry_Potter_e_as_Relíquias_da_Morte");
var supermanEntreAFoiceEOMartelo = document.getElementById("Superman_Entre_a_Foice_e_o_Martelo");
var starWarsC3PO2 = document.getElementById("Star_Wars_C-3PO");
var senhorDosAneisASociedadeDoAnel = document.getElementById("Senhor_dos_aneis_A_Sociedade_do_Anel");
var asAventurasDeSherlockHolmes = document.getElementById("As_aventuras_de_Sherlock_Holmes");

var add = document.getElementById("add");
var carrinho = document.getElementById("pedidos");
var limpar = document.getElementById("btn-limpar");
var valorTotal = document.getElementById("valor-total");
var soma = 0;

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

eventos.forEach(el => {
  el.addEventListener("click", toggleModal);
});

limpar.addEventListener("click", () => {
  carrinho.innerHTML = "";
  valorTotal.innerHTML = "<p>Valor Total :</p>";
  soma = 0;
});

var mais_vendidos = [
  { nome: "Harry Potter e as Relíquias da Morte", valor: 37.90 },
  { nome: "Superman Entre a Foice e o Martelo", valor: 62.90 },
  { nome: "Star Wars C-3PO", valor: 7.90 },
  { nome: "Senhor dos Anéis: A Sociedade do Anel", valor: 32.90 },
  { nome: "As aventuras de Sherlock Holmes", valor: 21.00 },
];

function adicionarMaisVendidoAoCarrinho(index) {
  soma += mais_vendidos[index].valor;
  carrinho.innerHTML += `<p>${mais_vendidos[index].nome} - R$ ${mais_vendidos[index].valor.toFixed(2)}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
}

harryPotterEAsReliquiasDaMorte.addEventListener("click", () => {
  adicionarMaisVendidoAoCarrinho(0);
});

supermanEntreAFoiceEOMartelo.addEventListener("click", () => {
  adicionarMaisVendidoAoCarrinho(1);
});

starWarsC3PO2.addEventListener("click", () => {
  adicionarMaisVendidoAoCarrinho(2);
});

senhorDosAneisASociedadeDoAnel.addEventListener("click", () => {
  adicionarMaisVendidoAoCarrinho(3);
});

asAventurasDeSherlockHolmes.addEventListener("click", () => {
  adicionarMaisVendidoAoCarrinho(4);
});

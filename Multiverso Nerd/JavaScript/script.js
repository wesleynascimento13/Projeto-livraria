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

var senhorDosAneisASociedadeDoAnel = document.getElementById("Senhor_dos_aneis_A_Sociedade_do_Anel");
var senhorDosAneisAsDuasTorres = document.getElementById("Senhor_dos_aneis_As_Duas_Torres");
var senhorDosAneisORetornoDoRei = document.getElementById("Senhor_dos_Aneis_O_Retorno_do_Rei");
var oHobbit = document.getElementById("o_hobbit");
var quedaDeNumenor = document.getElementById("A_Queda_de_Numenor");

var sherlockHolmesUmEstudoEmVermelho = document.getElementById("Sherlock_Holmes_Um_estudo_em_vermelho");
var sherlockHolmesOSignoDosQuatro = document.getElementById("Sherlock_Holmes_O_signo_dos_quatro");
var sherlockHolmesOValeDoMedo = document.getElementById("Sherlock_Holmes_O_Vale_do_Medo");
var sherlockHolmesOCaoDosBaskerville = document.getElementById("Sherlock_Holmes_O_cao_dos_Baskerville");
var asAventurasDeSherlockHolmes = document.getElementById("As_aventuras_de_Sherlock_Holmes");

var harryPotterEPedraFilosofal = document.getElementById("Harry_Potter_e_a_Pedra_Filosofal");
var harryPotterECamaraSecreta = document.getElementById("Harry_Potter_e_a_Câmara_Secreta");
var harryPotterEOPrisioneiroDeAzkaban = document.getElementById("Harry_Potter_e_o_Prisioneiro_de_Azkaban");
var harryPotterEAOrdemDaFenix = document.getElementById("Harry_Potter_e_a_Ordem_da_Fênix");
var harryPotterEAsReliquiasDaMorte = document.getElementById("Harry_Potter_e_as_Relíquias_da_Morte");

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
var livros = [
  { nome: "Senhor dos Anéis: A Sociedade do Anel", valor: 32.90 },
  { nome: "Senhor dos Anéis: As Duas Torres", valor: 53.82 },
  { nome: "Senhor dos Anéis: O Retorno do Rei", valor: 50.68 },
  { nome: "O Hobbit", valor: 53.80 },
  { nome: "A Queda de Númenor", valor: 36.90 },
  { nome: "Sherlock Holmes: Um estudo em vermelho", valor: 38.32 },
  { nome: "Sherlock Holmes: O signo dos quatro", valor: 38.32 },
  { nome: "Sherlock Holmes: O Vale do Medo", valor: 34.42 },
  { nome: "Sherlock Holmes: O cão dos Baskerville", valor: 22.47 },
  { nome: "As aventuras de Sherlock Holmes", valor: 21.00 },
  { nome: "Harry Potter e a Pedra Filosofal", valor: 38.42 },
  { nome: "Harry Potter e a Câmara Secreta", valor: 36.48 },
  { nome: "Harry Potter e o Prisioneiro de Azkaban", valor: 57.67 },
  { nome: "Harry Potter e a Ordem da Fênix", valor: 43.90 },
  { nome: "Harry Potter e as Relíquias da Morte", valor: 37.90 }
];


function adicionarLivroAoCarrinho(index) {
  soma += livros[index].valor;
  carrinho.innerHTML += `<p>${livros[index].nome} - R$ ${livros[index].valor.toFixed(2)}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
}

senhorDosAneisASociedadeDoAnel.addEventListener("click", () => {
  adicionarLivroAoCarrinho(0);
});

senhorDosAneisAsDuasTorres.addEventListener("click", () => {
  adicionarLivroAoCarrinho(1);
});

senhorDosAneisORetornoDoRei.addEventListener("click", () => {
  adicionarLivroAoCarrinho(2);
});

oHobbit.addEventListener("click", () => {
  adicionarLivroAoCarrinho(3);
});

quedaDeNumenor.addEventListener("click", () => {
  adicionarLivroAoCarrinho(4);
});

sherlockHolmesUmEstudoEmVermelho.addEventListener("click", () => {
  adicionarLivroAoCarrinho(5);
});

sherlockHolmesOSignoDosQuatro.addEventListener("click", () => {
  adicionarLivroAoCarrinho(6);
});

sherlockHolmesOValeDoMedo.addEventListener("click", () => {
  adicionarLivroAoCarrinho(7);
});

sherlockHolmesOCaoDosBaskerville.addEventListener("click", () => {
  adicionarLivroAoCarrinho(8);
});

asAventurasDeSherlockHolmes.addEventListener("click", () => {
  adicionarLivroAoCarrinho(9);
});

harryPotterEPedraFilosofal.addEventListener("click", () => {
  adicionarLivroAoCarrinho(10);
});

harryPotterECamaraSecreta.addEventListener("click", () => {
  adicionarLivroAoCarrinho(11);
});

harryPotterEOPrisioneiroDeAzkaban.addEventListener("click", () => {
  adicionarLivroAoCarrinho(12);
});

harryPotterEAOrdemDaFenix.addEventListener("click", () => {
  adicionarLivroAoCarrinho(13);
});

harryPotterEAsReliquiasDaMorte.addEventListener("click", () => {
  adicionarLivroAoCarrinho(14);
});








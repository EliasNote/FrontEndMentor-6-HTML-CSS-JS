function select(element) {
    const selecao = document.getElementById('select')
    if (selecao) {
      selecao.removeAttribute('select');
      selecao.setAttribute('id', 'unselect')
    }
    element.setAttribute('id', 'select');
  }
  function rating() {
    const text = document.getElementById('rating');
    text.innerText = document.getElementById('select').value;
  }
  function altern() {
    const main1 = document.getElementById('main1')
    const main2 = document.getElementById('main2')
    main1.style.display = "none"
    main2.style.display = "flex"
    rating()
    event.preventDefault()
  }
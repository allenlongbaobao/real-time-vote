(function() {
  const socket = io('http://192.168.199.108:8889')
  main()
  test()
  const selectedItems = new Set()

  function main() {
    initBlockListen()
    initSubmitListen()
    initSuccessBtnListen()
  }

  function initBlockListen() {
    const block = document.querySelector('#item-block')
    block.addEventListener('touched', handleTouch)
    block.addEventListener('click', handleTouch)
  }

  function initSubmitListen() {
    const submitBtn = document.querySelector('#submit')
    submitBtn.addEventListener('touched', handleSubmit)
    submitBtn.addEventListener('click', handleSubmit)
  }

  function initSuccessBtnListen() {
    const confirmBtn = document.querySelector('#confirm')
    confirmBtn.addEventListener('touched', handleConfirm)
    confirmBtn.addEventListener('click', handleConfirm)
  }

  function handleTouch(e) {
    let target = e.target
    let id = target.dataset.id
    while (!id) {
      target = target.parentElement
      id = target.dataset.id
    }
    const checkbox = target.querySelector('.item-checkbox')
    checkbox.checked = !checkbox.checked
    if (checkbox.checked) {
      selectedItems.add(id)
    } else {
      selectedItems.delete(id)
    }
  }

  function handleSubmit(e) {
    socket.emit("vote", {items: [...selectedItems]})
    showSuccessTip()
  }

  function handleConfirm(e) {
    const successTipCon = document.querySelector('.success__tip-container')
    successTipCon.style.display = "none"
  }

  function showSuccessTip() {
    const successTipCon = document.querySelector('.success__tip-container')
    successTipCon.style.display = "block"
  }

  function test() {
    const ids = ['1', '2', '3', '4', '5', '6', '7']
    const getIndex = () => Math.ceil(Math.random() * 7) - 1
    setInterval(() => {
      socket.emit("vote", { items: [ids[getIndex()], ids[getIndex()]]})
   }, 50)

  }
})()

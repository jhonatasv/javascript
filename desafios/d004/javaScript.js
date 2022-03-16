function clicou() {
    let nome_produto = prompt('Que produto você está comprando?')
   
    let valor_produto = Number(prompt(`Quanto custa ${nome_produto} que você está comprando?`))
    let conversao_produto = valor_produto.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    
    let valor_recebido = Number(prompt(`Qual foi o valor que você deu para pagar ${nome_produto}`))
    let conversao_recebido = valor_recebido.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
   
    let subtracao = valor_recebido -= valor_produto
    let troco = subtracao.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

    alert(`você comprou ${nome_produto} que custou ${conversao_produto}. \n Deu ${conversao_recebido} em dinheiro e vai receber ${troco} de troco. \n Volte Sempre!`)
}
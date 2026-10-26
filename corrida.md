## Passo a passo uber

1. Abrir o aplicativo  (Entrada)
2. Colocar o destino (Entrada)
3. Análise de preço(Dinâmica)= 10 (Processamento) 
    1. Selecionar raio em volta do passageiro
    2. Verifca a quantidade de motoristas dentro do raio
    3. Cálculo de Motoristas X Passageiros Demanda X oferta
4. Escolher a categoria  (Entrada)
5. Escolher a método de pagamento(pix)  (Entrada)
6. comfirmar partida  (Entrada)
7. comfirmar endereço de embarque  (Entrada)
8. calcúla as informações da corrida (Processamento)
9. Oferece aos motoristas em um sistema de leilão (Processamento)
10. Aguarda motorista aceitar a corrida  
11. O motorista aceita a corrida (Entrada) abaixo (Processamento)
    1.  As informações do passageiro e corrida são informadas ao motorista
    2.  Notifica ao passageiiro e carrega o GPS
    3.  Carrega as informações de GPS e mostra o destino de embarque ao motorista
12. O motorista não aceita a corrida (Entrada) abaixo (Processamento)
    1.  Atualiza o preço da corrida
    2.  Oferece para outro motorista
13. Chega no local de embarque
14. Verificação de placa 
15. Verificação do motorista
16. Embarque
17. O passageiro passa o código de segurança 
18. Motorista digita o código de segurança (Entrada)
19. Inicia a corrida (Entrada)
20. Chega ao destino
21. Motorista finaliza a corrida(Entrada)
22. Exibe o preço (saida)
23. Gera o qrcode automaticamente(Processamento)
24. Efetua o pagamento  (Processamento)
25. Processa o pagamento (Processamento)
26. Tela de sucesso (Saida)
27. Fim da corrida 
    


Q1.

Valor_base=5
km_percorrido=8
valor_km=2
tempo_viagem=20
valor_min=0.5

Total corrida= 5 + kmpercorrido * 2 + 0.5 * tempo_viagem
Total corrida= 5 + 8 * 2 + 0.5 * 20
Total corrida= 31

Q3.

Os valores fixos são o valor_base (5) a valor_Km(2) e o valor_min(0.5). Já os valores considerados variaveis são o km_percorrido e o tempo_viagem






# Bing maps com React

- rodar npm install

- iniciar a aplicação com npm start

- A biblioteca utilizada é BingMapsReact

- A prop bingMapsKey recebe o valor da chave de api que foi usada também na API para obter coordenadas de um endereço

- para inserir pontos no mapa basta passar um array de objetos na prop "pushPins" com a seguinte estrutura:

```javascript
[
  {
    center: { latitude: 9999, longitude: 9999 },
    optons: { title: "nome do lugar" },
  },
];
```

- depois de criado a Key copie a key e utilize-a no seu código

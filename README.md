# Tema

**Tema Recebido:** O tema que recebi foi sobre uma lista de compras.

# Instalação e uso

**Instalação:** 
* git clone https://github.com/seu-usuario/seu-repositorio.git

* cd nome-do-seu-projeto

* npm install

**Uso:**

* npm start

# Funcionalidades

## Componentes Principais:

**ListaCompras:** Componente principal que gerencia o estado da lista de compras e renderiza a interface.

## Estado do Componente:

* **compras:** Array que armazena as compras adicionadas.

* **newCompras:** String que guarda o valor do input de nova compra.

* **isEditing:** Booleano que indica se estamos editando um item existente na lista.

* **currentIndex:** Índice do item que está sendo editado.

## Funções Principais:

* **addCompra:** Adiciona uma nova compra à lista ou salva a edição de uma compra existente.

* **removeCompras:** Remove uma compra da lista com base no índice.

* **editCompra:** Prepara o estado para editar uma compra existente ao clicar no botão de edição.

## Componentes React Utilizados:

* **useState:** Hook do React utilizado para gerenciar o estado local dos componentes.

* **useCallback:** Hook utilizado para memoizar funções callback, evitando recriações desnecessárias de funções.

* **onChange:** Evento usado para capturar e atualizar o estado do input de nova compra.

* **onClick:** Evento utilizado nos botões de adicionar, editar e remover compras
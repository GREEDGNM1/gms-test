/// <reference types="cypress"/>

describe('US-001 Funcionalidade: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  // afterEach(() => {
  //   cy.screenshot()
  // });

  it('Deve buscar filmes com sucesso', () => {
    cy.get('#search-input').type('Mad Max')
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain', 'Mad Max')
  })

  it('Deve buscar filmes de uma lista com sucesso', () => {
    cy.fixture('filmes').then((filmes) => {
      cy.get('#search-input').type(filmes[0].titulo)
      cy.get('#search-button').click()
      cy.get('#results-section').should('contain', filmes[0].titulo)
    })
  })

  it('Deve buscar filmes da lista inteira com sucesso', () => {
    cy.fixture('filmes').each((filmes) => {
      cy.get('#search-input').clear().type(filmes.titulo)
      cy.get('#search-button').click()
      cy.get('#results-section').should('contain', filmes.titulo)
    })
  })

})
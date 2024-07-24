/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Gledson')
    cy.get('#signup-lastname').type('Nunes')
    cy.get('#signup-email').type('gledson7@teste.com')
    cy.get('#signup-phone').type('1122334477')
    cy.get('#signup-password').type('Teste@3030')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})
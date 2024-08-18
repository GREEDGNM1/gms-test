/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `teste${Date.now()}@teste.com`
    cy.preencherCadastro('Teste','Souza', email, '{backspace}', 'Teste@3030')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
  
  it('Deve fazer o cadastro com todos os campos preenchidos', () => {
    var email = `teste${Date.now()}@teste.com`
    cy.preencherCadastro('Teste','Souza', email, '1122334477', 'Teste@3030')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Deve validar erro de nome inválido', () => {
    var email = `teste${Date.now()}@teste.com`
    cy.preencherCadastro('Teste123','Souza', email, '1122334477', 'Teste@3030')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })
  
  it('Deve fazer bloquear e-mail já cadastrado', () => {
    var email = `teste${Date.now()}@teste.com`
    cy.preencherCadastro('Teste','Souza', 'gledson2@teste.com', '1122334477', 'Teste@3030')
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado.')
  })
  
  it('Deve impedir cadastro com email inválido', () => {
    var email = `teste${Date.now()}@teste.com`
    cy.preencherCadastro('Teste','Souza', 'gledson2@teste', '1122334477', 'Teste@3030')
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })
  
  it('Deve bloquear cadastro com senha fraca', () => {
    var email = `teste${Date.now()}@teste.com`
    cy.preencherCadastro('Teste','Souza', email, '1122334477', 'test123')
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })
  
  it('Deve bloquear cadastro com nome vazio', () => {
    var email = `teste${Date.now()}@teste.com`
    cy.preencherCadastro('{backspace}','Souza', email, '1122334477', 'Teste@3030')
    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  })
  
  it('Deve bloquear cadastro com sobrenome vazio', () => {
    var email = `teste${Date.now()}@teste.com`
    cy.preencherCadastro('Teste','{backspace}', email, '1122334477', 'Teste@3030')
    cy.get('#signup-response').should('contain', 'Sobrenome não pode estar vazio')
  })
  
  it('Deve bloquear cadastro com e-mail vazio', () => {
    cy.preencherCadastro('Teste','Souza', '{backspace}', '1122334477', 'Teste@3030')
    cy.get('#signup-response').should('contain', 'E-mail não pode estar vazio')
  })
  
  it('Deve bloquear cadastro sem senha', () => {
    var email = `teste${Date.now()}@teste.com`
    cy.preencherCadastro('Teste','Souza', email, '1122334477', '{backspace}')
    cy.get('#signup-response').should('contain', 'Senha não pode estar vazia')
  })

  it('Deve abrir politica de privacidade', () => {
    cy.get('a').click()
    cy.url().should('include' , '/polices.html')
  })

})
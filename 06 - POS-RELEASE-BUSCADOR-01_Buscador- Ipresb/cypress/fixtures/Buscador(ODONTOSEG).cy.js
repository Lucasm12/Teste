describe('BD_CONNECT', () => {
    beforeEach(() => {
        //Função responsável só pela validação do login
        cy.visit("https://portalbdhml.bdconnect.com.br/portal/?op=5#!/rede")
        cy.wait(5000)
        
      
    })
    it('Busca por local',()=>{

       
        //
        //busca por tipo de serviço (consultórios e clínicas) + especialidade
        cy.get('input#AutoCompleteAddress')
        .type('São Paulo, SP, Brasil{downarrow}{enter}', { delay: 500 })
        cy.get('#cbTipoServico').select(1)
        cy.get('#pesquisar-rede').click()
        cy.wait(10000)

        //busca por tipo de serviço (exames radiológicos)
        
        cy.get('#cbTipoServico').select(2)
        cy.get('#pesquisar-rede').click()
        cy.wait(10000)
        
       // busca por tipo de serviço (pronto socorro)

      
        cy.get('#cbTipoServico').select(3)
        cy.get('#pesquisar-rede').click()
        cy.wait(10000)

    })

    it('Busca por nome',()=>{
        //Consultorios e Clinicas
        cy.get('fieldset > :nth-child(2) > .col-lg-12 > :nth-child(2)').click()
        cy.get('#NomeCredenciado').type('a')
        cy.get('#cbEstado').select(6)
        cy.get('b').click()
        .type('{downarrow}{enter}', { delay: 500 })
        cy.get('#cbTipoServico').select(1)
        cy.get('#pesquisar-rede').click()


          //Exames Radiologicos
          cy.get('fieldset > :nth-child(2) > .col-lg-12 > :nth-child(2)').click()
          cy.get('#NomeCredenciado').type('a')
          cy.get('#cbEstado').select(6)
          cy.get('b').click()
          .type('{downarrow}{enter}', { delay: 500 })
          cy.get('#cbTipoServico').select(2)
          cy.get('#pesquisar-rede').click()


            //Pronto Socorro
        cy.get('fieldset > :nth-child(2) > .col-lg-12 > :nth-child(2)').click()
        cy.get('#NomeCredenciado').type('a')
        cy.get('#cbEstado').select(6)
        cy.get('b').click()
        .type('{downarrow}{enter}', { delay: 500 })
        cy.get('#cbTipoServico').select(3)
        cy.get('#pesquisar-rede').click()
        
        

        
      


    })
})

//npx cypress run --record --key f6415db7-a4ac-4890-90fb-982082b5a19e
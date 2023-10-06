describe('BD_CONNECT', () => {

  it('Busca por local - Consultório e Clínicas',()=>{
      cy.visit("https://portal.bdconnect.com.br/portal/?op=7#!/rede")
      cy.wait(3000)
      cy.get('input#AutoCompleteAddress')
      .type('São Paulo, SP, Brasil{downarrow}{enter}', { delay: 500 })
      cy.get('#cbTipoServico').select(1)
      cy.wait(3000)
       cy.get('#cbEspecialidade').select('object:120');
      cy.wait(3000)
      cy.get('#pesquisar-rede').click();
      cy.wait(5000)
      cy.get('[style=""] > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click();
      cy.wait(3000)
      cy.get('.close').click();
      cy.wait(3000)
      cy.get('#cbEspecialidade').select('object:121');
      cy.wait(3000)
      cy.get('#pesquisar-rede').click();
      cy.wait(5000)
      cy.get('[style=""] > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click();
      cy.wait(3000)
      cy.get('.close').click();
      cy.wait(3000)
      cy.get('#cbEspecialidade').select('object:122');
      cy.wait(3000)
      cy.get('#pesquisar-rede').click();
      cy.wait(5000)
      cy.get('[style=""] > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click();
      cy.wait(3000)
      cy.get('.close').click();
      cy.wait(3000)
      cy.get('#cbEspecialidade').select('object:119');
      cy.wait(3000)
      cy.get('#pesquisar-rede').click();
      cy.wait(5000)
      cy.get('[style=""] > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click();
      cy.wait(3000)
      cy.get('.close').click();
      cy.wait(3000)
      cy.get('#cbEspecialidade').select('object:123');
      cy.wait(3000)
      cy.get('#pesquisar-rede').click();
      cy.wait(5000)
      cy.get('[style=""] > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click();
      cy.wait(3000)
      cy.get('.close').click();
      cy.wait(3000)
      cy.get('#cbEspecialidade').select('object:124');
      cy.wait(3000)
      cy.get('#pesquisar-rede').click();
      cy.wait(5000)
      cy.get('[style=""] > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click();
      cy.wait(3000)
      cy.get('.close').click();
      cy.wait(3000)
      cy.get('#cbEspecialidade').select('object:125');
      cy.wait(3000)
      cy.get('#pesquisar-rede').click();
      cy.wait(5000)
      cy.get('[style=""] > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click();
      cy.wait(3000)
      cy.get('.close').click();
      cy.wait(3000)
      cy.get('#cbEspecialidade').select('object:126');
      cy.wait(3000)
      cy.get('#pesquisar-rede').click();
      cy.wait(5000)
      cy.get('[style=""] > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click();
      cy.wait(3000)
      cy.get('.close').click();
      cy.wait(3000)
      cy.get('#cbEspecialidade').select('object:127');
      cy.wait(3000)
      cy.get('#pesquisar-rede').click();
      cy.wait(5000)
      cy.get('[style=""] > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click();
      cy.wait(3000)
      cy.get('.close').click();
      cy.wait(3000)
      cy.get('#cbEspecialidade').select('object:128');
      cy.wait(3000)
      cy.get('#pesquisar-rede').click();
      cy.wait(5000)
      cy.get('[style=""] > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click();
      cy.wait(3000)
      cy.get('.close').click();
      cy.wait(3000) 
 
  })

  it('Busca por local - Exames Radiologicos',()=>{
      cy.visit("https://portal.bdconnect.com.br/portal/?op=7#!/rede")  
      cy.wait(3000)
      cy.get('input#AutoCompleteAddress')
      .type('São Paulo, SP, Brasil{downarrow}{enter}', { delay: 500 })
      cy.get('#cbTipoServico').select(2)
      cy.wait(3000)  
      cy.get('#pesquisar-rede').click();
      cy.wait(3000)
      cy.get('[style=""] > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click();
      cy.wait(3000)
      cy.get('.close').click();
      cy.wait(3000)

  })

  it('Busca por local - Pronto Socorro',()=>{
      cy.visit("https://portal.bdconnect.com.br/portal/?op=7#!/rede")  
      cy.wait(3000)
      cy.get('input#AutoCompleteAddress')
      .type('São Paulo, SP, Brasil{downarrow}{enter}', { delay: 500 })
      cy.get('#cbTipoServico').select(3)
      cy.wait(3000)  
      cy.get('#pesquisar-rede').click();
      cy.get('[style=""] > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click();
      cy.get('.close').click();

  })

 

  it('Busca por Nome - Consultório e Clínicas',()=>{
      cy.visit("https://portal.bdconnect.com.br/portal/?op=7#!/rede")  
       cy.wait(3000)
      cy.get(':nth-child(2) > .col-lg-12 > :nth-child(2) > .checkbox > label').click();
      cy.wait(3000)
      cy.get('#NomeCredenciado').type('Clinica');
      cy.wait(3000)
      cy.get('#cbEstado').select(26);
      cy.wait(3000)
      cy.get('b').click();
      cy.wait(3000)
      cy.get('.chosen-search > input').clear();
      cy.wait(3000)
      cy.get('.chosen-search > input').type('sao pau');
      cy.wait(3000)
      cy.get('.active-result').click();
      cy.wait(3000)
      cy.get('#cbTipoServico').select(1);
      cy.wait(3000)
      
      
  })

  it('Busca por Nome - Exames Radiologicos',()=>{
      cy.visit("https://portal.bdconnect.com.br/portal/?op=7#!/rede")  
      cy.wait(3000)
      cy.get(':nth-child(2) > .col-lg-12 > :nth-child(2) > .checkbox > label').click();
      cy.wait(3000)
      cy.get('#chkPorNome').check();
      cy.wait(3000)
      cy.get('#NomeCredenciado').type('Clinica');
      cy.wait(3000)
      cy.get('#cbEstado').select('object:54');
      cy.wait(3000)
      cy.get('.chosen-single > span').click();
      cy.wait(3000)
      cy.get('.chosen-search > input').clear();
      cy.wait(3000)
      cy.get('.chosen-search > input').type('sao pau');
      cy.wait(3000)
      cy.get('em').click();
      cy.wait(3000)
      cy.get('#cbTipoServico').select('object:25');
      cy.wait(3000)
      cy.get('#pesquisar-rede').click();
      cy.wait(3000)
      cy.get('[style=""] > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click();
      cy.wait(3000)
      cy.get('.close').click();

  })

  it('Busca por Nome - Pronto Socorro',()=>{
      cy.visit("https://portal.bdconnect.com.br/portal/?op=7#!/rede")  
      cy.wait(3000)      
      cy.get(':nth-child(2) > .col-lg-12 > :nth-child(2) > .checkbox > label').click();
      cy.wait(3000)  
      cy.get('#chkPorNome').check();
      cy.wait(3000)  
      cy.get('#NomeCredenciado').type('Clinica');
      cy.wait(3000)
      cy.get('#cbEstado').select('object:54');
      cy.wait(3000)
      cy.get('.chosen-single > span').click();
      cy.wait(3000)
      cy.get('.chosen-search > input').clear();
      cy.wait(3000)
      cy.get('.chosen-search > input').type('sao pau');
      cy.wait(3000)
      cy.get('em').click();
      cy.wait(3000)
      cy.get('#cbTipoServico').select('object:25');
      cy.wait(3000)
      cy.get('#pesquisar-rede').click();
      cy.wait(3000)
      cy.get('[style=""] > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click();
      cy.wait(3000)
      cy.get('.close').click();

  })





})

//npx cypress run --record --key b576dc1c-dbcb-44bc-84a4-33261ed5f0b9
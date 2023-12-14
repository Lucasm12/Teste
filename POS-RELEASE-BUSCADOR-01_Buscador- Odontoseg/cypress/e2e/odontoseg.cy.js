describe('Buscador Odontoseg (Belo Horizonte - MG)', () => {
  

    it('Consultorios e Clinicas - Por Local',() =>{
      cy.visit("https://portalbdhml.bdconnect.com.br/portal/?op=10#!/rede")
    
    cy.get('input#AutoCompleteAddress')
    .type('Belo Horizonte, MG, Brasil{downarrow}{enter}', { delay: 300 })
     cy.wait(3000)
    
    //seleciona tipo de serviço consultórios e clínicas
      cy.get('#cbTipoServico').select(1)
    // cy.wait(1000)
    
    //seleciona a especialidade cirurgia
    cy.get('#cbEspecialidade').select(1);
    // cy.wait(3000)
    
    //realiza a busca de rede credenciada
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(5000)
    
    
    //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
      
      
     
     
    //seleciona a especialidade cirurgia buco maxilo facial
    cy.get('#cbEspecialidade').select(2);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
    //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
      
    
    //seleciona a especialidade clínica geral
    cy.get('#cbEspecialidade').select(3);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
     //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
      
    //seleciona a especialidade dentística
    cy.get('#cbEspecialidade').select(4);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
    //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
      
    
    //seleciona a especialidade emergência
    cy.get('#cbEspecialidade').select(5);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
    //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
      
    
    //seleciona a especialidade endodontia
    cy.get('#cbEspecialidade').select(6);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
    //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
      
    
    //seleciona a especialidade odontopediatria
    cy.get('#cbEspecialidade').select(7);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
    //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
      
    
    //seleciona a especialidade ortodontia
    cy.get('#cbEspecialidade').select(8);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
      //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
      
    
    //seleciona a especialidade pacientes especiais
    cy.get('#cbEspecialidade').select(9);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
    //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
      
          
    //seleciona a especialidade periodontia
    cy.get('#cbEspecialidade').select(10);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
    //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
    
    
    })
    
    it('Exames Radiologicos  - Por Local',() =>{
    
      cy.visit("https://portalbdhml.bdconnect.com.br/portal/?op=10#!/rede")
    
      cy.get('input#AutoCompleteAddress')
      .type('Belo Horizonte, MG, Brasil{downarrow}{enter}', { delay: 300 })
       cy.wait(3000)
      
      //seleciona tipo de serviço exames radiologicos
      cy.get('#cbTipoServico').select(2)
      // cy.wait(1000)
    
    
      //realiza a busca de rede credenciada
          cy.get('#pesquisar-rede').click({force:true})
          // cy.wait(3000)          
          //seleciona o primeiro resultado de busca
      cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    
      // cy.wait(2000)
    
      //seleciona a visualização do endereço do credenciado no mapa
      cy.get('.close').click({force:true})
      
      // cy.wait(2000)
    
    
    })
    
    it('Pronto Socorro - Por Local',() =>{
    
    
      cy.visit("https://portalbdhml.bdconnect.com.br/portal/?op=10#!/rede")
    
      cy.get('input#AutoCompleteAddress')
      .type('Belo Horizonte, MG, Brasil{downarrow}{enter}', { delay: 300 })
       cy.wait(3000)
      
              //seleciona tipo de serviço pronto socorro
              cy.get('#cbTipoServico').select(3)
              // cy.wait(1000)
    
    
              //realiza a busca de rede credenciada
                  cy.get('#pesquisar-rede').click({force:true})
                  // cy.wait(3000)          
                  //seleciona o primeiro resultado de busca
                  cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
              
    
            //seleciona a visualização do endereço do credenciado no mapa
            cy.get('.close').click({force:true})
            // cy.wait(2000)
    })
    
    
    it('Consultorios e Clinicas - Por Nome',() =>{
      cy.visit("https://portalbdhml.bdconnect.com.br/portal/?op=10#!/rede")
      cy.get(':nth-child(2) > .col-lg-12 > :nth-child(2) > .checkbox > label').click();
    // Nome do crecendicado
    cy.get('#NomeCredenciado').type('C');
     cy.wait(3000)
    // Selecionar o Estado
    cy.get('#cbEstado').select('object:39');
     cy.wait(3000)
    cy.get('.chosen-single > span').click();
     cy.wait(3000)
    // Selecionar a cidade
    cy.get('.chosen-search > input').type('belo');
    cy.get('.highlighted').click();
     cy.wait(3000)
   
    //seleciona tipo de serviço consultórios e clínicas
    cy.get('#cbTipoServico').select(1)
    // cy.wait(1000)
    
    //seleciona a especialidade cirurgia
    cy.get('#cbEspecialidade').select(1);
    // cy.wait(3000)
    
    //realiza a busca de rede credenciada
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(5000)
    
    
    //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
      
      
     
     
    // //seleciona a especialidade cirurgia buco maxilo facial
    // cy.get('#cbEspecialidade').select(2);
    // // cy.wait(3000)
    // cy.get('#pesquisar-rede').click({force:true})
    // // cy.wait(3000)
    // //seleciona o primeiro resultado de busca
    // cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // // cy.wait(2000)
    
    // //seleciona a visualização do endereço do credenciado no mapa
    // cy.get('.close').click({force:true})
    // // cy.wait(2000)
    
      
    
    //seleciona a especialidade clínica geral
    cy.get('#cbEspecialidade').select(3);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
     //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
      
    //seleciona a especialidade dentística
    cy.get('#cbEspecialidade').select(4);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
    //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
      
    
    //seleciona a especialidade emergência
    cy.get('#cbEspecialidade').select(5);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
    //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
      
    
    //seleciona a especialidade endodontia
    cy.get('#cbEspecialidade').select(6);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
    //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
      
    
    //seleciona a especialidade odontopediatria
    cy.get('#cbEspecialidade').select(7);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
    //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
      
    
    // //seleciona a especialidade ortodontia
    // cy.get('#cbEspecialidade').select(8);
    // // cy.wait(3000)
    // cy.get('#pesquisar-rede').click({force:true})
    // // cy.wait(3000)
     
   
      
    
     //seleciona a especialidade pacientes especiais
    cy.get('#cbEspecialidade').select(9);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
    
    
      
          
    //seleciona a especialidade periodontia
    cy.get('#cbEspecialidade').select(10);
    // cy.wait(3000)
    cy.get('#pesquisar-rede').click({force:true})
    // cy.wait(3000)
    //seleciona o primeiro resultado de busca
    cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    // cy.wait(2000)
    
    //seleciona a visualização do endereço do credenciado no mapa
    cy.get('.close').click({force:true})
    // cy.wait(2000)
    
     
    })
    
    it('Exames Radiologicos  - Por Nome',() =>{
    
      cy.visit("https://portalbdhml.bdconnect.com.br/portal/?op=10#!/rede")
      cy.get(':nth-child(2) > .col-lg-12 > :nth-child(2) > .checkbox > label').click();
    // Nome do crecendicado
    cy.get('#NomeCredenciado').type('C');
     cy.wait(3000)
    // Selecionar o Estado
    cy.get('#cbEstado').select('object:39');
     cy.wait(3000)
    cy.get('.chosen-single > span').click();
     cy.wait(3000)
    // Selecionar a cidade
    cy.get('.chosen-search > input').type('belo');
    cy.get('.highlighted').click();
     cy.wait(3000)
      
      //seleciona tipo de serviço exames radiologicos
      cy.get('#cbTipoServico').select(2)
      // cy.wait(1000)
    
    
      //realiza a busca de rede credenciada
          cy.get('#pesquisar-rede').click({force:true})
          // cy.wait(3000)          
          //seleciona o primeiro resultado de busca
      cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    
      // cy.wait(2000)
    
      //seleciona a visualização do endereço do credenciado no mapa
      cy.get('.close').click({force:true})
      
      // cy.wait(2000)
    
    
    })
    
    it('Pronto Socorro - Por Nome',() =>{
    
    
    
      cy.visit("https://portalbdhml.bdconnect.com.br/portal/?op=10#!/rede")
      cy.get(':nth-child(2) > .col-lg-12 > :nth-child(2) > .checkbox > label').click();
    // Nome do crecendicado
    cy.get('#NomeCredenciado').type('C');
     cy.wait(3000)
    // Selecionar o Estado
    cy.get('#cbEstado').select('object:39');
     cy.wait(3000)
    cy.get('.chosen-single > span').click();
     cy.wait(3000)
    // Selecionar a cidade
    cy.get('.chosen-search > input').type('belo');
    cy.get('.highlighted').click();
     cy.wait(3000)
      
              //seleciona tipo de serviço pronto socorro
              cy.get('#cbTipoServico').select(3)
              // cy.wait(1000)
    
    
              //realiza a busca de rede credenciada
                  cy.get('#pesquisar-rede').click({force:true})
                  // cy.wait(3000)     
                  
                     //seleciona o primeiro resultado de busca
      cy.get(':nth-child(1) > [style="border-right: 1px dotted #eeeeee; width: 35%; "] > .mapa > [alt="ver no mapa"]').click({force:true})
    
      // cy.wait(2000)
    
      //seleciona a visualização do endereço do credenciado no mapa
      cy.get('.close').click({force:true})
      
      // cy.wait(2000)
                 
    
                })
          })
    
    //npx cypress run --record --key b576dc1c-dbcb-44bc-84a4-33261ed5f0b9
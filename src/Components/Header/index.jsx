import React from 'react';
import { Container, ContainerLogo, SubContainer } from './style';

const Header = () => {
  return (
      <Container>
        <SubContainer>
          <div>
            <ContainerLogo>
              <div>
                <h1>
                  Vestimento AJ
                </h1>
                <span>A melhor Loja para comprar suas roupas</span>
              </div>          
            </ContainerLogo>
          </div>
        </SubContainer>
      
      </Container>
  );
}

export default Header;
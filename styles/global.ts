import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;
    
    --blue-light: #6933ff;
    
    --text-title: #363f5f;
    --text-body: #969cb3;
    
		--background: #f0f2f5;
    --shape: #ffffff;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
  
  html {
    @media (max-wdth: 1080px) {
      font-size: 93.75%;  /*15px*/
    }

    @media (max-wdth: 720px) {
      font-size: 87.5%;   /*14px*/
    }
  }
	
	body {
		background: var(--background);
    -webkit-font-smoothing: antialiased;
	}

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed   // mostra a placa de não permitido no cursor do mouse
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5); //bg preto com opacity 0.5

    position: fixed; //para ocupar tela toda
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    //para que o overlay ocupe a tela toda.

    display: flex; // para colocar a parte do coteúdo do modal no centro
    align-items: center;
    justify-content: center;

    @media (max-width: 380px) {
      max-width: 480px;
      padding: 1rem;
    }
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;  // com menos de 576px, a largura fica 100% do tamanho da tela
    background: var(--background);
    padding: 3rem;
    position: relative;  //relative pois tem elementos que vão receber position absolute
    border-radius: 0.25rem;

    @media (max-width: 380px) {
      max-width: 480px;
    }
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

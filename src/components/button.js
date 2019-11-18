function Button(props) {
    const template = `
    <button 
    class="primary-button" 
    onclick="button.handleClick('${props.id}')" >
    ${props.title}
    </button>
    `;
    return template;
  }
  
  window.button = {
    handleClick: (id) => {
      return `${id}`;
    },
  };
  export default Button;
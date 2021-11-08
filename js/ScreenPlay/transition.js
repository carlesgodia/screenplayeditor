class Transition {
    /**
     * Our tool should be placed at the Toolbox, so describe an icon and title
     */
    static get toolbox() {
      return {
        title: 'Transition',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg>'
      };
    }

    constructor({data}){
        this.data = {
            text: data.text || '',
        };
    }

    render(){
        const transition = document.createElement('div');
        transition.classList.add('transition');
        transition.setAttribute("data-text","CORTE A:");

        transition.contentEditable = true;    

        if(this.data.text != null && this.data.text != ''){
            transition.innerText = this.data.text;
        } else {
            transition.innerText = '';
        }

        return transition;
    }
    
    save(blockContent){
        return {
            text: blockContent.innerText
        };
    }

    static get conversionConfig(){
        return {  
            import: 'text',
         
            export: function (blockData) {
                return blockData.caption ? `${blockData.text} — ${blockData.caption}` : blockData.text;
            }
        };
    }

    get shortcut() {
        return 'CMD+SHIFT+X';
    }
}
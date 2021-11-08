class Parenthetical {
    /**
     * Our tool should be placed at the Toolbox, so describe an icon and title
     */
    static get toolbox() {
      return {
        title: 'Parenthetical',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>'
      };
    }
    constructor({data}){
        this.data = {
            text: data.text || '',
        };
    }

    render(){
        const parenthetical = document.createElement('div');
        parenthetical.classList.add('parenthetical');
        parenthetical.setAttribute("data-text","(contento)");

        parenthetical.contentEditable = true;    

        if(this.data.text != null && this.data.text != ''){
            parenthetical.innerText = this.data.text;
        } else {
            parenthetical.innerText = '';
        }

        return parenthetical;
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
        return 'CMD+SHIFT+Z';
    }
}
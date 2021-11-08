class Dialogue {
    /**
     * Our tool should be placed at the Toolbox, so describe an icon and title
     */
    static get toolbox() {
      return {
        title: 'Dialogue',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>'
      };
    }
     
    constructor({data}){
        this.data = {
            text: data.text || '',
        };
    }

    render(){
        const dialogue = document.createElement('div');
        dialogue.classList.add('dialogue');
        dialogue.setAttribute("data-text","Escribe dialogo...");

        dialogue.contentEditable = true;    

        if(this.data.text != null && this.data.text != ''){
            dialogue.innerText = this.data.text;
        } else {
            dialogue.innerText = '';
        }

        return dialogue;
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

    static get enableLineBreaks() { // Allow to press Enter inside the action
        return false;
    }

    static get contentless() { //Empty dialogue is not an empty Block
        return true;
    }
    get shortcut() {
        return 'CMD+SHIFT+D';
    }
}
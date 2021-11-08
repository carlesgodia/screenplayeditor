class Character {
    /**
     * Our tool should be placed at the Toolbox, so describe an icon and title
     */
    static get toolbox() {
      return {
        title: 'Character',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>'
      };
    }

    
    constructor({data}){
        this.data = {
            text: data.text || '',
        };
    }

    render(){
        const character = document.createElement('div');
        character.classList.add('character');
        character.setAttribute("data-text","PERSONAJE");

        character.contentEditable = true;    

        if(this.data.text != null && this.data.text != ''){
            character.innerText = this.data.text;
        } else {
            character.innerText = '';
        }

        return character;
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
        return 'CMD+SHIFT+C';
    }
}
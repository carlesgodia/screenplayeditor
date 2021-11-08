class Action {
    /**
     * Our tool should be placed at the Toolbox, so describe an icon and title
     */
    static get toolbox() {
      return {
        title: 'Action',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"/></svg>'
      };
    }
    
    constructor({data, config}){
        this.data = {
            text: data.text || '',
        };
    }

    render(){
        const action = document.createElement('div');
        action.classList.add('action');
        action.contentEditable = true;    

        if(this.data.text != null && this.data.text != ''){
            action.innerText = this.data.text;
        } else {
            action.innerText = '';
        }
        return action;
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

    merge(data) {
        this.data.text += data.text;
        this.wrapper.innerHTML += data.text;
    }

    static get enableLineBreaks() { // Allow to press Enter inside the action
        return false;
    }

    static get contentless() { //Empty paragraph is not an empty Block
        return true;
    }

    get shortcut() {
        return 'CMD+SHIFT+A';
    }
}
class Note {
    /**
     * Our tool should be placed at the Toolbox, so describe an icon and title
     */
    static get toolbox() {
      return {
        title: 'Note',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>'
      };
    }
    
    constructor({data, config}){
        this.data = {
            text: data.text || '',
        };
    }

    render(){
        const note = document.createElement('div');
        note.classList.add('note');
        note.contentEditable = true;    

        if(this.data.text != null && this.data.text != ''){
            note.innerText = this.data.text;
        } else {
            note.innerText = '';
        }
        return note;
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
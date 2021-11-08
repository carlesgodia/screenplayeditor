class Paragraf {
    /**
     * Our tool should be placed at the Toolbox, so describe an icon and title
     */
    static get toolbox() {
      return {
        title: 'Paragraf',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/></svg>'
      };
    }
    
    constructor({data, config}){
        this.data = {
            text: data.text || '',
        };
    }

    render(){
        const paragraf = document.createElement('div');
        paragraf.classList.add('paragraf');
        paragraf.contentEditable = true;    

        if(this.data.text != null && this.data.text != ''){
            paragraf.innerText = this.data.text;
        } else {
            paragraf.innerText = '';
        }
        return paragraf;
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
        return 'CMD+SHIFT+P';
    }
}
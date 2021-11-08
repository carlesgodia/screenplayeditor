class Chapter {
    /**
     * Our tool should be placed at the Toolbox, so describe an icon and title
     * @property {string} chapter - Chapter of the novel.
     */
    static get toolbox() {
      return {
        title: 'Chapter',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 4v3h5.5v12h3V7H19V4z"/></svg>'
      };
    }

    constructor({data, config}){
        this.data = {
            text: data.text || '',
        };
    }

    render(){
        const scene = document.createElement('div');
        scene.classList.add('chapter');
        scene.setAttribute("data-text","Capítulo 1. Escribir");

        scene.contentEditable = true;    

        if(this.data.text != null && this.data.text != ''){
            scene.innerText = this.data.text;
        }else{
            scene.innerText = '';
        }

        return scene;
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
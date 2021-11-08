class Scene {
    /**
     * Our tool should be placed at the Toolbox, so describe an icon and title
     * @property {string} scene - Text of the scene: EXT/INT. PLACE - DAY/NIGHT
     */
    static get toolbox() {
      return {
        title: 'Scene',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/></svg>'
      };
    }

    constructor({data, config}){
        this.data = {
            text: data.text || '',
        };
    }

    render(){
        const scene = document.createElement('div');
        scene.classList.add('scene');
        scene.setAttribute("data-text","1. EXT./INT. LUGAR - DÍA/NOCHE");

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
        return 'CMD+SHIFT+S';
    }
}
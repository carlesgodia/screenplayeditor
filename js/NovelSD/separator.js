class Separator {
    /**
     * Our tool should be placed at the Toolbox, so describe an icon and title
     * @property {string} chapter - Chapter of the novel.
     */
    static get toolbox() {
      return {
        title: 'Separator',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z"/></svg>'
      };
    }

    constructor({data, config}){
        this.data = {
            text: data.text || '',
        };
    }

    render(){
        const separator = document.createElement('div');
        separator.classList.add('separator');
        separator.contentEditable = true;    

        if(this.data.text != null && this.data.text != ''){
            separator.innerText = this.data.text;
        }else{
            separator.innerText = '* * *';
        }

        return separator;
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

    static get contentless() { //Empty paragraph is not an empty Block
        return true;
    }
    get shortcut() {
        return 'CMD+SHIFT+S';
    }
}
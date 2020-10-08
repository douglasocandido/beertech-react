import SourceSettings from '../interfaces/SourceSettings'

export default class CustomPlayer {
    constructor(
        protected width: number, 
        protected height: number, 
        protected defaultErrorMessage: string, 
        protected controls: boolean = true, 
        protected sources: string = ""
    ) {
        this.width = width;
        this.height = height;
        this.defaultErrorMessage = defaultErrorMessage;
        this.controls = controls;
        this.sources = sources;
    }

    setSources(sourcesSettings: SourceSettings[]) {
        if(sourcesSettings.length <= 0) {
            return false;
        }
        sourcesSettings.forEach(sourceItem => {
            this.sources += `<source src="${sourceItem.src}" type="${sourceItem.type}">`;
        });
        return true;
    }

    render(sectionId: string) {
        const sectionElement: HTMLElement = document.createElement('section')
        sectionElement.setAttribute('id', sectionId)
        sectionElement.innerHTML = `
            <video width=${this.width} height=${this.height} ${this.controls ? 'controls' : ''}>
                ${this.sources}
                ${this.defaultErrorMessage}
            </video>
        `
        document.body.append(sectionElement);
        return true;
    }
}
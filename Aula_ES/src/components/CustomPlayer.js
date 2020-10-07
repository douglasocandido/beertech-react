export default class CustomPlayer {
    constructor(width, height, deaultErrorMessage, controls=true) {
        this.width = width;
        this.height = height;
        this.deaultErrorMessage = deaultErrorMessage;
        this.sources = '';
        this.controls = controls;
    }

    setSources(sourcesSettings) {
        if(sourcesSettings.length <= 0) {
            return false;
        }
        sourcesSettings.forEach(sourceItem => {
            this.sources += `<source src="${sourceItem.src}" type="${sourceItem.type}">`;
        });
        return true;
    }

    render(sectionId) {
        const sectionElement = document.createElement('section')
        sectionElement.setAttribute('id', sectionId)
        sectionElement.innerHTML = `
            <video width=${this.width} height=${this.height} ${this.controls ? 'controls' : ''}>
                ${this.sources}
                ${this.deaultErrorMessage}
            </video>
        `
        document.body.append(sectionElement);
        return true;
    }
}
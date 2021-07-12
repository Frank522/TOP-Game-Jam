function GenericDino (name){
    this.img = document.createElement('img');

    const setImage = (src) => {
        this.img.setAttribute(src);
    }

    const draw = (content) => {
        content.appendChild(this.img);
    }

    const flip = () => {
        this.img.style.transform = 'scaleX(-1)';
    }

    const setColor = (color) => {
        this.img.style.backgroundColor = color;
    }

    const setSize = (width) => {
        this.img.style.width = width;
    }

    return {setImage, draw, flip, setColor, setSize};
}

export default GenericDino;
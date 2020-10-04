import React, { Component } from 'react';
const bars = []

const getAverageVolume = array => {
    console.log(array.length)
    const length = array.length;
    let values = 0;
    let i = 0;

    // Loop over the values of the array, and count them
    for (; i < length; i++) {
        values += array[i];
    }

    // Return the avarag
    // console.log(values / length)
    return values / length;
}

class AudioVisualiser extends Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }



    componentDidUpdate() {
        const { audioData } = this.props;
        const tempArray = audioData

        // Get the byte frequency data from our array
        // analyser.getByteFrequencyData(tempArray);

        // Calculate the average volume and store that value in our bars Array
        bars.push(getAverageVolume(tempArray) / 100);
        this.draw();
    }




    draw() {

        const { audioData } = this.props;
        const canvas = this.canvas.current;
        const height = canvas.height;
        const halfHeight = height / 2;
        const width = canvas.width;
        const context = canvas.getContext('2d');
        let x = 0;
        const sliceWidth = (width * 1) / audioData.length;



        // context.lineWidth = 2;
        // context.strokeStyle = "#49F1D5"

        // context.clearRect(0, 0, width, height);

        // context.beginPath();
        // context.moveTo(0, height / 2);
        // for (const item of audioData) {
        //     const y = (item / 255.0) * height;
        //     context.lineTo(x, y);
        //     x += sliceWidth;
        // }
        // context.lineTo(x, height / 2);
        // context.stroke();

        bars.forEach((bar, index) => {
            context.fillStyle = "#49F1D5";
            // console.log(bar)

            // Top part of the bar
            context.fillRect((index * (2 + 2)), (halfHeight - (halfHeight * (bar / 100))), 2, (halfHeight * (bar / 100)));

            // Bottom part of the bars
            context.fillRect((index * (2 + 2)), halfHeight, 2, (halfHeight * (bar / 100)));
        });


    }

    render() {
        return <canvas width="700" height="1000" ref={this.canvas} />;
    }
}

export default AudioVisualiser;
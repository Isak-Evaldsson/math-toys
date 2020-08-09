import React from 'react'
import '../css/matrix-tools.css'

export class MatrixTools extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <div class="sidebar">
                </div>
                <div class="content">
                    <p>Matrix A Dimension <input type='number' size='3'/> x <input type='number' size='3'/></p>
                    <p>Matrix B Dimension <input type='number' size='3'/> x <input type='number' size='3'/></p>
                    <button>Done</button>
                </div>
            </div>
        )
    }
}
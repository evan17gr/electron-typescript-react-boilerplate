import React from "react";
import ReactDOM from "react-dom";


const Root:React.FC = () => (
    <div>
        <button>CLICK ME</button>
    </div>
);

ReactDOM.render(<Root/>,document.getElementById('app'));
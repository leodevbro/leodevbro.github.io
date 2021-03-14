import * as React from "react";
import { useState } from "react";

import Editor from "./Sento_textboxWithEmoji/sento_index";

import "./styles.css";

export default function App() {
    const [textAndEmo, setTextAndEmo] = useState(``);
    console.log(textAndEmo);
    return (
        <div className="App">
            <Editor
                mode={"edit"}
                html={textAndEmo}
                // onChange={(tar: string) => {
                //     setTextAndEmo((currV: string) => tar);
                // }}
            />
        </div>
    );
}

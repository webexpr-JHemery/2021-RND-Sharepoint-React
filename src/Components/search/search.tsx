import React, {useState} from "react";
import './search.scss'

interface IProps {
    name: string;
    height?: string;
    searchIcon?: boolean;
    width?: string;
    backgroundColor?: string;
}

export default function Search
({
     name,
     width = "50%",
     searchIcon = true,
     height = "20px",
     backgroundColor = "#ffffff",
 }: IProps ) {

    const [value, setValue] = useState<string>();

    const divStyles = {
        width: width,
    };
    const inputStyle = {
        background: !searchIcon ? "#ffffff" : "",
        backgroundColor: backgroundColor,
        height: height,
    };

    const handleChange = (e: any) => {
        setValue(e.target.value)
    }

    return (
        <div style={divStyles}>
            <input
                name={name}
                type="text"
                style={inputStyle}
                className="search_bar"
                onChange={handleChange}
                value={value}
            />
        </div>
    )
}
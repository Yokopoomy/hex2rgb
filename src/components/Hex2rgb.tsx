import { useState } from "react";

const Converter = () => {
  const [rgb, setRgb] = useState("rgb(204, 204, 255)");
  const [, setHex] = useState("#CCCCFF");

  const hex2rgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const result = hex2rgb(inputValue);

    if (inputValue.match(/^#[0-9a-f]{6}$/i) && result !== null) {
      setHex(inputValue);
      setRgb(`rgb(${result.r}, ${result.g}, ${result.b})`);
    } else if (inputValue.length === 7) {
      setHex("");
      setRgb("Ошибка!");
    }
  };

  const bgColour = {
    color: {
      backgroundColor: rgb !== "Ошибка!" ? rgb : "rgb(233, 75, 53)",
    },
  };

  return (
    <form>
      <div className="container" style={bgColour.color}>
        <input
          name="input"
          type="text"
          className="hex"
          onChange={handleChange}
          maxLength={7}
        ></input>
        <div className="rgb">{rgb}</div>
      </div>
    </form>
  );
};

export default Converter;
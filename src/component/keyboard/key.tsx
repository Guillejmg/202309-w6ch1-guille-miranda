
import { SyntheticEvent } from "react";

export function Key () {



  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const formElement = event.target as HTMLFormElement;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
 

  };
  return (
    <>
    <li><button className="key">1</button></li>
    <li><button className="key">2</button></li>
    <li><button className="key">3</button></li>
    <li><button className="key">4</button></li>
    <li><button className="key">5</button></li>
    <li><button className="key">6</button></li>
    <li><button className="key">7</button></li>
    <li><button className="key">8</button></li>
    <li><button className="key">9</button></li>
    <li><button className="key">0</button></li>
    <li><button className="key big">delete</button></li>
    </>
  );
}

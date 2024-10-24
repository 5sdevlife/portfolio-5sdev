import { ReactElement, useEffect, useState } from "react";
import "./assets/css/main.css";
import ReactIcon from "./components/svg/ReactIcon";
import JSIcon from "./components/svg/JSIcon";
import NextIcon from "./components/svg/NextIcon";
import HeartIcon from "./components/svg/HeartIcon";
import JsonIcon from "./components/svg/JsonIcon";
import HelloIcon from "./components/svg/HelloIcon";
import Editor from "./layout/Editor";

function App() {
  const [grids, setGrids] = useState<number[][]>([]);
  const [cellsBackground] = useState<number[][]>([[3, 5], [10, 7], [5, 20]]);
  const [backgroundIcon] = useState<ReactElement<SVGElement>[]>([
    <ReactIcon />,
    <JSIcon />,
    <NextIcon />
  ]);

  useEffect(() => {
    const countCells: number = Math.floor(window.innerWidth / 62);
    const countRows: number = Math.floor(window.innerHeight / 62);

    const gridsConstructor: number[][] = [];
    for(let rows = 0; rows <= countRows; rows++){
      const gridsCells: number[] = [];
      
      for(let cells = 0; cells < countCells; cells++){
        gridsCells.push(
          Number(
            cellsBackground.some(
              ([row, cell]) => row === rows && cell === cells
            )
          )
        );
      }

      gridsConstructor.push(gridsCells);
    }
    setGrids(gridsConstructor);
  }, []);

  return (
    <>
      <section className="grids">
        {grids.map((grid: any, indexGrid: number) => (
          <div className="grid" key={indexGrid}>
            {grid.map((cell: number, indexCell: number) => (
              <div
                className={`cell ${cell ? "cell-color" : ""}`}
                key={indexCell}
              >
                {cell ? (
                  backgroundIcon[
                    Math.floor(Math.random() * backgroundIcon.length)
                  ]
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        ))}
        <div className="overlay"></div>
        <div className="overlay-title">
          <h3>
            <HelloIcon />, bienvenido a
          </h3>
          <h1>5s.dev </h1>
          <h2>Sebastián Salas</h2>
          <h4>
            <HeartIcon />
            <JsonIcon />
            Software engineer life
          </h4>
          <Editor />
        </div>
      </section>
      <section className="another-content">kasjads</section>
    </>
  );
}

export default App;

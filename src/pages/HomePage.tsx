import { useEffect, useState } from "react";
import Reader from "../components/Reader";
import FileSelector from "../components/FileSelector";

function useLoadFile(path: string) {
  const [ fileMd, setFileMd ] = useState('');

  useEffect(() => {
    fetch(`markdown/${path}`).then((response) => response.text()).then(setFileMd);
  }, [path]);

  return fileMd;
}

export default function HomePage() {
  const [ fileName, setFileName ] = useState('file.md');
  const fileMd = useLoadFile(fileName);

  function onFileSelect(fileName: string): void {
    setFileName(fileName);
  }

  return (
    <>
      <FileSelector onFileSelect={onFileSelect}/>
      <div className='card'>
        <Reader content={fileMd}/>
      </div>
    </>
  );
}
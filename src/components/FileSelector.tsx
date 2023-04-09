interface FileSelectorProps {
  onFileSelect: (fileName: string) => void;
}

export default function FileSelector({onFileSelect}: FileSelectorProps) {

  return (
    <div className='grid'>
      <button onClick={() => onFileSelect('louça.md')}>Louça</button>
      <button onClick={() => onFileSelect('file.md')}>File</button>
      <button onClick={() => onFileSelect('romance.md')}>Romance</button>
    </div>
  );
}
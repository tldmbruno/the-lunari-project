import MarkdownIt from 'markdown-it';

interface ReaderProps {
  content: string;
}

export default function Reader({content}: ReaderProps) {
  const md = new MarkdownIt();

  return (
    <div dangerouslySetInnerHTML={{__html: md.render(content)}}></div>
  );
}


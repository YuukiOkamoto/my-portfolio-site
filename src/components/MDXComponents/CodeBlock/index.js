import React, { useState } from 'react';

import EditableHighlight from './EditableHighlight';
import Highlight from './Highlight';
import { LiveError, LivePreview, LiveProvider } from './react-live'

const CodeBlock = ({
  className,
  live,
  isManual,
  demo,
  title,
  line,
  children,
  ...props
}) => {
  const [code, setCode] = useState(children.trim());

  const language = className && className.replace('language-', '');

  if (language === 'jsx' && live) {
    return (
      <LiveProvider
        language={language}
        code={code}
        isManual={isManual}
        {...props}
      >
        <LivePreview />
        <EditableHighlight code={code} setCode={setCode} title={title} />
        <LiveError />
      </LiveProvider>
    );
  }

  if (demo) {
    return (
      <LiveProvider
        language={language}
        code={code}
        isManual={isManual}
        {...props}
      >
        <LivePreview />
        <Highlight title={title} code={code} language={language} line={line} />
      </LiveProvider>
    );
  }

  return (
    <Highlight title={title} code={code} language={language} line={line} />
  );
};

export default CodeBlock;

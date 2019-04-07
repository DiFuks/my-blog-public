import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

import { DefaultFetchingStatuses } from '@app/common/constants';
import { IPost } from '@app/post/duck/reducer';
import { PostTypes } from '@app/common/constants/postTypes';

export interface IProps {
  url: string;
  changeActive: (url: string) => void;
  data: IPost;
  fetchStatus: DefaultFetchingStatuses;
}

export const Post: React.FunctionComponent<IProps> = ({url, changeActive, data, fetchStatus}) => {
  React.useEffect(() => {
    changeActive(url);
  }, [url]);

  if (fetchStatus === DefaultFetchingStatuses.IN_PROGRESS || fetchStatus === DefaultFetchingStatuses.NONE) {
    return (<div>Загрузка</div>);
  }

  if (fetchStatus === DefaultFetchingStatuses.FAILED) {
    return (<div>Ошибка</div>);
  }

  return (
    <div>
      <h1>{data.title}</h1>
      {data.content.map((content, index) => {
        if (content.type === PostTypes.TEXT) {
          return (
            <div
              key={`${content.type}${index}`}
              dangerouslySetInnerHTML={{__html: content.content}}
            />
          );
        }

        return (
          <SyntaxHighlighter
            key={`${content.type}${index}`}
            showLineNumbers={true}
            language={content.type}
            useInlineStyles={true}
            style={darcula}
          >
            {content.content}
          </SyntaxHighlighter>
        );
      })}
    </div>
  );
};

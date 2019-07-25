import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';
import styled, { css, keyframes } from 'styled-components';
import { DiscussionEmbed } from 'disqus-react';
import { InjectedIntl, injectIntl } from 'react-intl';

import { FetchingStatuses, Routes, PostTypes, Locales, Colors } from '@app/common/constants';
import { LoremText } from '@app/common/components/LoremText';
import { SubmenuStates } from '@app/submenu/duck/constants';

import { IPost } from './duck/reducer';

export interface IProps {
  url: string;
  changeActive: (url: string, locale?: Locales) => void;
  data: IPost;
  fetchStatus: FetchingStatuses;
  menuIsOpen: SubmenuStates;
  intl: InjectedIntl;
}

export interface IPropsStyled {
  menu_is_open: SubmenuStates;
  fetch_status?: FetchingStatuses;
}

const Post: React.FC<IProps> = ({url, changeActive, data, fetchStatus, menuIsOpen, intl}) => {
  React.useEffect(() => {
    changeActive(url, intl.locale as Locales);

    return () => changeActive(null);
  }, [url, intl.locale]);

  if (fetchStatus === FetchingStatuses.IN_PROGRESS || fetchStatus === FetchingStatuses.NONE) {
    return (
      <PostStyled
        menu_is_open={menuIsOpen}
        fetch_status={fetchStatus}
      >
        <LoremText/>
      </PostStyled>
    );
  }

  if (fetchStatus === FetchingStatuses.FAILED) {
    return (
      <div>Ошибка :(</div>
    );
  }

  return (
    <PostStyled
      menu_is_open={menuIsOpen}
      tabIndex={0}
    >
      <h1>{data.title}</h1>
      {data.content.map((content, index) => {
        if (content.type === PostTypes.TEXT || content.type === PostTypes.IMAGE) {
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
      <DiscussionEmbed
        shortname={DISQUS_SHORTNAME}
        config={{
          url: `${SITE_URL}${Routes.POST.replace(':url', url)}`,
          identifier: data.id,
          title: data.title,
        }}
      />
    </PostStyled>
  );
};

const PostIntl = injectIntl(Post);

export { PostIntl as Post };

const fadeId = keyframes`
  0% {
    filter: blur(5px);
  }
  50% {
    filter: blur(3px);
  }
  100% {
    filter: blur(5px);
  }
`;

const PostStyled = styled.div<IPropsStyled>`
  height: 100%;
  overflow: scroll;
  line-height: 1.4;
  transition: filter 1s ease;
  filter: blur(0);
  width: 100%;
  figure {
    margin: 2rem 0;
    text-align: center;
    img {
      max-width: 100%;
    }
  }
  p a {
    color: ${Colors.GREY_200};
  }
  ${props => (props.fetch_status === FetchingStatuses.IN_PROGRESS || props.fetch_status === FetchingStatuses.NONE) &&
  css`
      animation: ${fadeId} 1s infinite;
      filter: blur(4px);
  `}
  ${props => props.menu_is_open === SubmenuStates.ACTIVE && css`
    overflow: hidden;
  `}
`;

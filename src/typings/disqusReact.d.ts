/* tslint:disable */
// https://github.com/disqus/disqus-react/pull/24
declare module 'disqus-react' {
  import * as React from 'react';

  interface DisqusProps {
    shortname: string;
    config: {
      url: string;
      identifier: string;
      title: string;
    };
  }

  interface CommentCountProps extends DisqusProps {
    children?: React.ReactNode;
  }

  interface CommentEmbedProps {
    commentId: string;
    showParentComment?: boolean;
    showMedia?: boolean;
    width?: number;
    height?: number;
  }

  interface IDisqus {
    CommentCount: React.Component<CommentCountProps, {}>;
    CommentEmbed: React.Component<CommentEmbedProps, {}>;
    DiscussionEmbed: React.Component<DisqusProps, {}>;
  }

  export class CommentCount extends React.Component<CommentCountProps, {}> {}
  export class CommentEmbed extends React.Component<CommentEmbedProps, {}> {}
  export class DiscussionEmbed extends React.Component<DisqusProps, {}> {}
  export const Disqus: {
    CommentCount: React.ComponentType<CommentCountProps>;
    CommentEmbed: React.ComponentType<CommentEmbedProps>;
    DiscussionEmbed: React.ComponentType<DisqusProps>;
  };

  export default Disqus;
}

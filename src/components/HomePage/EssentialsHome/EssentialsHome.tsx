import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './EssentialsHome.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 2:9 */
export const EssentialsHome: FC<Props> = memo(function EssentialsHome(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
    </div>
  );
});

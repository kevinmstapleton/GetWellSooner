import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Event_note_black_24dp1.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 2:12 */
export const Event_note_black_24dp1: FC<Props> = memo(function Event_note_black_24dp1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
    </div>
  );
});

import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './InterfaceAdjustHorizontalAlt.module.css';
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
/* @figmaId 2:2 */
export const InterfaceAdjustHorizontalAlt: FC<Props> = memo(function InterfaceAdjustHorizontalAlt(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
    </div>
  );
});

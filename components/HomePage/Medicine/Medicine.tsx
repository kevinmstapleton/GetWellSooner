import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { GroupIcon } from './GroupIcon.js';
import classes from './Medicine.module.css';

interface Props {
  className?: string;
  swap?: {
    group?: ReactNode;
  };
}
/* @figmaId 2:53 */
export const Medicine: FC<Props> = memo(function Medicine(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.group}>{props.swap?.group || <GroupIcon className={classes.icon} />}</div>
    </div>
  );
});

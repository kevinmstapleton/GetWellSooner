import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { GroupIcon } from './GroupIcon.js';
import classes from './Report.module.css';

interface Props {
  className?: string;
  swap?: {
    group?: ReactNode;
  };
}
/* @figmaId 2:15 */
export const Report: FC<Props> = memo(function Report(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.group}>{props.swap?.group || <GroupIcon className={classes.icon} />}</div>
    </div>
  );
});

import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BasicsSearch } from './BasicsSearch/BasicsSearch';
import { BatteryIcon } from './BatteryIcon.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { EssentialsHome } from './EssentialsHome/EssentialsHome';
import { Event_note_black_24dp1 } from './Event_note_black_24dp1/Event_note_black_24dp1';
import { GroupIcon2 } from './GroupIcon2.js';
import { GroupIcon } from './GroupIcon.js';
import classes from './HomePage.module.css';
import { InterfaceAdjustHorizontalAlt } from './InterfaceAdjustHorizontalAlt/InterfaceAdjustHorizontalAlt';
import { InterfaceMoreHorizontal } from './InterfaceMoreHorizontal/InterfaceMoreHorizontal';
import { Medicine } from './Medicine/Medicine';
import { Report } from './Report/Report';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon } from './VectorIcon.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 2:117 */
export const HomePage: FC<Props> = memo(function HomePage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle7}></div>
      <InterfaceAdjustHorizontalAlt
        className={classes.interfaceAdjustHorizontalAlt}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
      <div className={classes.frame10}>
        <BasicsSearch
          swap={{
            vector: <VectorIcon2 className={classes.icon2} />,
          }}
        />
        <div className={classes.searchMedical}>Search medical..</div>
      </div>
      <div className={classes.frame81}>
        <div className={classes.group74}>
          <div className={classes.rectangle10}></div>
          <div className={classes.findADoctor}>Find a Doctor</div>
          <div className={classes.useOurDatabaseOfWellTrustedAnd}>
            Use our database of well trusted and available doctors to choose from! (Coming Soon)
          </div>
        </div>
        <div className={classes.frame79}>
          <div className={classes.upcomingAppointments}>Upcoming Appointments</div>
          <div className={classes.frame78}>
            <div className={classes.group57}>
              <div className={classes.rectangle102}></div>
              <div className={classes.rectangle11}></div>
              <div className={classes.rectangle12}></div>
              <div className={classes.frame11}>
                <div className={classes._12}>12</div>
                <div className={classes.tue}>Tue</div>
              </div>
              <div className={classes._930AM}>09:30 AM</div>
              <div className={classes.projectAnxiety}>Project Anxiety</div>
              <div className={classes.drVeerasamy}>Dr. Veerasamy</div>
              <InterfaceMoreHorizontal
                className={classes.interfaceMoreHorizontal}
                swap={{
                  vector: <VectorIcon3 className={classes.icon3} />,
                }}
              />
            </div>
            <div className={classes.group572}>
              <div className={classes.rectangle103}></div>
              <div className={classes.rectangle112}></div>
              <div className={classes.frame112}>
                <div className={classes._13}>13</div>
                <div className={classes.tue2}>Tue</div>
              </div>
              <div className={classes._930}>09:30</div>
              <div className={classes.depression}>Depression</div>
              <div className={classes.drMimAkhter}>Dr. Mim Akhter</div>
              <InterfaceMoreHorizontal className={classes.interfaceMoreHorizontal2} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame82}>
        <div className={classes.frame6}>
          <div className={classes.veerasamyJ}>Veerasamy, J</div>
        </div>
      </div>
      <div className={classes.barsStatusOnLight}>
        <div className={classes.battery}>
          <BatteryIcon className={classes.icon8} />
        </div>
        <div className={classes.wifi}>
          <WifiIcon className={classes.icon9} />
        </div>
        <div className={classes.cellularConnection}>
          <CellularConnectionIcon className={classes.icon10} />
        </div>
        <div className={classes.timeStyle}>
          <div className={classes.Time}>9:41</div>
        </div>
      </div>
      <div className={classes.frame77}>
        <div className={classes.frame76}>
          <EssentialsHome
            className={classes.essentialsHome}
            swap={{
              vector: <VectorIcon4 className={classes.icon4} />,
            }}
          />
          <div className={classes.home}>Home</div>
        </div>
        <div className={classes.frame75}>
          <Event_note_black_24dp1
            swap={{
              vector: <VectorIcon5 className={classes.icon5} />,
            }}
          />
          <div className={classes.reportSymtpoms}>Symptoms</div>
        </div>
        <div className={classes.frame74}>
          <Report
            swap={{
              group: <GroupIcon className={classes.icon6} />,
            }}
          />
          <div className={classes.getInformation}>Get Information</div>
        </div>
        <div className={classes.frame73}>
          <Medicine
            swap={{
              group: <GroupIcon2 className={classes.icon7} />,
            }}
          />
          <div className={classes.assessment}>Assessment</div>
        </div>
      </div>
      <div className={classes.rectangle73}></div>
      <div className={classes.profilePic}></div>
    </div>
  );
});

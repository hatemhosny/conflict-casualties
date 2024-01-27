import { loadData, race } from 'racing-bars';

const options = {
  selector: '#race',
  dataShape: 'wide',
  title: 'Palestinian Casualties',
  subTitle: 'data.techforpalestine.org',
  dateCounter: 'DD MMM YYYY',
  tickDuration: 500,
  labelsPosition: 'outside',
  fixedScale: true,
  fixedOrder: ['Injured', 'Killed', 'Children Killed', 'Women Killed', 'Medicals Killed', 'Press Killed', ''],
  colorMap: {
    'Injured': '#b94d4d',
    'Killed': '#000',
    'Children Killed': '#4db9b2',
    'Women Killed': '#a9a9a9',
    'Medicals Killed': '#ba0603',
    'Press Killed': '#1858bf',
  }
};

loadData('https://data.techforpalestine.org/api/v2/casualties_daily.min.json').then((data) => {
  data = data.map((d) => ({
    date: d.report_date,
    "Injured": d.ext_injured_cum,
    "Killed": d.ext_killed_cum,
    "Children Killed": d.ext_killed_children_cum,
    "Women Killed": d.ext_killed_women_cum,
    "Medicals Killed": d.ext_med_killed_cum,
    "Press Killed": d.ext_press_killed_cum,
  }));
  race(data, options);
});

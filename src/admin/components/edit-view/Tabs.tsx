import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import styles from '../../styles/app.module.scss';

const ResponsiveTabs = (props: any) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const scrollableTabs = !isDesktop && props.tabs.length > 3;

  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  return (
    <Tabs
      orientation={
        props?.orientation
          ? props.orientation
          : isDesktop
            ? 'vertical'
            : 'horizontal'
      }
      value={props.value}
      onChange={(e, value) => props.setNewValue(value)}
      sx={{
        borderRight: 1,
        borderColor: 'divider',
        borderBottom: '1px solid #dddddd',
        backgroundColor: 'white',
        marginLeft: 3,
        marginRight: 3,
      }}
      className={styles.verticalTabs}
      variant={scrollableTabs ? 'scrollable' : 'fullWidth'}
      scrollButtons={scrollableTabs}
      allowScrollButtonsMobile={scrollableTabs}
    >
      {props.tabs.map((tab: any, index: number) => {
        return <Tab label={tab.name} {...a11yProps(0)} key={index} />;
      })}
    </Tabs>
  );
};

export default ResponsiveTabs;

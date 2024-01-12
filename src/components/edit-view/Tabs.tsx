import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import styles from "../../styles/app.module.scss";

const ResponsiveTabs = (props: any) => {

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    
    function a11yProps(index: number) {
        return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
        };
    }
  
  return (
    <Tabs
        orientation={isDesktop ? 'vertical' : 'horizontal'}
        value={props.value}
        onChange={(e, value) => props.setNewValue(value)}
        sx={{ borderRight: 1, borderColor: 'divider' }}
        className={styles.verticalTabs}
        >
            {
                props.tabs.map(
                    (tab: any, index: number) => {
                        return (
                            <Tab label={tab.name} {...a11yProps(0)} key={index}/>
                        );
                    }
                )
            }
    </Tabs>
  )
}

export default ResponsiveTabs
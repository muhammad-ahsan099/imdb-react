import React, { useState } from 'react';
// import { useLocation, useHistory } from 'react-router-dom';
// import Billing from '../../assets/svgs/Billing.svg'
// import Calendar from '../../assets/svgs/Calendar.svg'
// import Members from '../../assets/svgs/Members.svg'
// import Service from '../../assets/svgs/Service.svg'
// import Setting from '../../assets/svgs/Setting.svg'
// import VPN from '../../assets/svgs/VPN.svg'
// import ServiceIntegration from '../../assets/svgs/ServiceIntegration.svg'
// import BillingWhite from '../../assets/svgs/BillingWhite.svg'
// import CalendarWhite from '../../assets/svgs/CalendarWhite.svg'
// import MembersWhite from '../../assets/svgs/MembersWhite.svg'
// import ServiceWhite from '../../assets/svgs/ServiceWhite.svg'
// import SettingWhite from '../../assets/svgs/SettingWhite.svg'
// import VPNWhite from '../../assets/svgs/VPNWhite.svg'
// import ServiceIntegrationWhite from '../../assets/svgs/ServiceIntegrationWhite.svg'

export const UseDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [selectValue, setSelectValue] = React.useState('omarfarukuiux.50');
  const [selectOpen, setSelectOpen] = React.useState(false);

  const menuItems = [
    {
      text: 'Service',
      // icon: Service,
      // iconWhite: ServiceWhite,      
      path: '/',
    },
    {
      text: 'Events',
      // icon: Calendar,
      // iconWhite: CalendarWhite,      
      path: '/events'
    },
    {
      text: 'Members',
      // icon: Members,
      // iconWhite: MembersWhite,      
      path: '/members'
    },
    {
      text: 'VPC',
      // icon: VPN,
      // iconWhite: VPNWhite,      
      path: '/vpc'
    },
    {
      text: 'Service Integrations',
      // icon: ServiceIntegration,
      // iconWhite: ServiceIntegrationWhite,      
      path: '/service-integration'
    },
    {
      text: 'Billing',
      // icon: Billing,
      // iconWhite: BillingWhite,      
      path: '/billing'
    },

    {
      text: 'Settings',
      // icon: Setting,
      // iconWhite: SettingWhite,      
      path: '/setting'
    },
  ];
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleClose = () => {
    selectOpen(false);
  };

  const handleOpen = () => {
    selectOpen(true);
  };

  return [{
    menuItems,
    mobileOpen,
    isMobileMenuOpen,
    mobileMoreAnchorEl,
    selectValue,
    selectOpen,
    handleDrawerToggle,
    handleMobileMenuClose,
    handleMobileMenuOpen,
    handleChange,
    handleClose,
    handleOpen,
  }]
}

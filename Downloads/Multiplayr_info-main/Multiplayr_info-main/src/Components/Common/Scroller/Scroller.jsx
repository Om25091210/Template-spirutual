import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroller = () => {
  const {pathname} = useLocation();

  const ScrollerAct = () => {
      document.body.scrollTo({top:0 ,left:0,behavior:"auto"});
      return null; // Make sure to return something from the component
  }

  useEffect(() => {
    ScrollerAct();
  }, [pathname]);

  return (
    null
  )
}

export default Scroller;

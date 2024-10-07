import React from 'react';

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[1600px]  mx-auto  px-3 ${className}`}>
        {children}
    </div>
  )
}
// px-3
export default Container;
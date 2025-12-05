import  {React, memo } from 'react';
import Style from './ContentWrapper.module.scss';
export const ContentWrapper = memo(({children}) => {
    return (
        <div className={Style['content-wrapper']}>
            {children}
        </div>
    );
});

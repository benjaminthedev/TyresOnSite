import React from 'react'
import {Helmet} from "react-helmet";

const BookOnline = () => {
    return (
        <div className="book__online mt-2">
        <Helmet>
            {/* <script type="text/javascript" src="//tyresonsite-embed.tyresurf.co.uk/js/embed.js"></script> */}
            
        </Helmet>
        <h1 className="text-center">Book Online</h1>
             <div className="header-border-small hideMobile"></div> 

        {/* <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://tyresonsite-embed.tyresurf.co.uk' data-origin='https://tyresonsite-embed.tyresurf.co.uk' id='ts-embed' width='100%' height='' scrolling='no' style='overflow:hidden;' frameborder='0' ></iframe>"}} /> */}
        <p className="text-center mt-3">Online Booking Coming Soon.</p>
            
            {/* <script type="text/javascript" src="//tyresonsite-embed.tyresurf.co.uk/js/embed.js"></script><iframe src="https://tyresonsite-embed.tyresurf.co.uk" data-origin="https://tyresonsite-embed.tyresurf.co.uk" id="ts-embed" width="100%" height="" scrolling="no" style="overflow:hidden;" frameborder="0"></iframe> */}
        </div>
    )
}

export default BookOnline

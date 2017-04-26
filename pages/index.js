import React from 'react';
import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <title>A title</title>
      <link rel="stylesheet" href="/static/main.css"></link>
    </Head>
    <div>
      <div className="louisville">
        <img src="/static/logo.png"></img><br/>
        <span className="cityname">
          <span className="louis">
            LOUIS<br/>
          </span>
          <span className="ville">
            VILLE<br/>
          </span>
        </span>
      </div>
      <br/>
      <div className="dsa">
        DSA
      </div>
      <div className="words">
        <span className="dem">
          Democratic<br/>
        </span>
        <span className="soc">
          Socialists<br/>
        </span>
        <span className="amer">
          of America<br/>
        </span>
      </div>
    </div>
  </div>

)

import React, { Component } from 'react';

import Items from '../items';
import NekoPic from './nekopic';

export default class HomePage extends Component {

  render() {
    return (
      <div>
        <div className="kv">
          <h1 className="main_title">NEKO</h1>
        </div>

        <div className="section">
          <h2 className="sec_title">All NEKO</h2>
          <div className="links">
            {Items.map((item) => {
              return <NekoPic key={item.id} name={item.name} id={item.id} />;
            })}
          </div>
        </div>
      </div>

    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';

function ProjectList({projects}) {
  const l = Math.ceil(projects.length/3);
  const first = projects.filter((item, index) => index < l);
  const second = projects.filter((item, index) => index >= l && index < 2*l - 1);
  const third =  projects.filter((item, index) => index >= 2*l - 1);
  return (
    <div className="img-content">
      <div className="columns">
        {first.map((item, index) => <div key={index} className="img-container"><img src={item.img} alt="" className="image"></img></div>)}
      </div>
      <div className="columns">
        {second.map((item, index) => <div key={index} className="img-container"><img src={item.img} alt="" className="image"></img></div>)}
      </div>
      <div className="columns">
        {third.map((item, index) => <div key={index} className="img-container"><img src={item.img} alt="" className="image"></img></div>)}
      </div>
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
}
  
export default ProjectList;
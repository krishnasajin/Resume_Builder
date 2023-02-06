import React, { useState } from "react";

import InputControl from "../InputControl/InputControl";

import styles from './Editor.module.css'

function Editor(props) {
    const sections = props.sections;

    const [activeSectionKey,setActiveSectionKey]= useState(
      Object.keys(sections)[0]
    );
    
  const workExpBody= ( 
  <div className={styles.detail}>
    < div className={styles.row}>
      <InputControl label="Title"
      placeholder="Enter title eg.  developer"
      />
      <InputControl label="Company Name"
      placeholder="Enter company name eg. amazon"
      />
    </div>
  <div className={styles.row}>
    <InputControl label ="Certified Link"
    placeholder="Enter certificate link"
    />
    <InputControl label="Enter the loccation"
    placeholder="Enter location eg. remote"/>
  </div>
  </div>
  );

  const projectBody =(
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label ="Title" placeholder="Enter title eg: Chat"/>
    </div>
    </div>
  )



  return (
    <div className={styles.container}>
        <div className={styles.header}>
          {Object.keys(sections)?.map((key)=> (
          <div 
          className={`${styles.sections}${
            activeSectionKey ===  key ? styles.active : ""
          }`}
             key={key}
             onClick={() => setActiveSectionKey(key)}
             >
            {sections[key]}
            </div>
          ))}
        </div>
        <div className={styles.body}>
          <InputControl label = "Title" placeholder="Enter section title"/>
        </div>
    </div>
  );
}

export default Editor;
import React, { useState, useRef, useEffect } from "react";
import styles from "./reactAppContainerDemo.module.css";
import AppContainer from "react-app-container";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import {ReactComponent as Logo}  from '../icons/logo.svg';
// use the component in your app!

const jsonEditorCodeDisabledRoute = `import React from 'react';
import ReactAppContainer from 'react-app-container';

const designConfig = {
  sideBarMenu: [
    {
      iconName: "home",
      label: "Home",
    },
    {
      iconName: "dashboard",
      label: "Dashboard",
    },
    {
      iconName: "apps",
      label: "Applications",
    },
    {
      iconName: "mail",
      label: "Mail",
      subMenuItemList: [
        {
          label: "Send Mail",
          iconName: "post_add",
        },
        {
          label: "List Mail",
          iconName: "post_add",
        },
      ],
    },
    {
      iconComp: <h1>U</h1>,
      label: "Users",
      onClick: () => {
        alert("Users Clicked");
      },
    },
    {
      iconName: "settings",
      label: "Settings",
    },
  ],
  headerMenu: [
    {
      iconName: "room",
    },
    {
      iconName: "language",
      label: "Language",
      subMenuItemList: [
        {
          iconComp: <h4>TR</h4>,
          label: "Turkish",
          onClick: () => {
            alert("Turkish Clicked");
        },
        },
        {
          iconComp: <h4>FR</h4>,
          label: "French",
          onClick: () => {
            alert("English Clicked");
        },
        },
      ],
    },
  ],
  headerLeftContent: (
    <h5
      style={{
        color: "white",
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: "1px",
        padding:'5px'
      }}
    >
      {" "}
      Here is Header Left Content Key. You can add what you want as
      Component
    </h5>
  ),
  sideBarHeaderContent : (
    <h3 style={{fontFamily :'monospace'}}>
      Container & Your Logo
    </h3>
  )
}

const App = (props) => {

  return (
    <ReactAppContainer 
      designConfig = {designConfig} />
  )

}
    
export default App;
`;

const ReactAppContainerDemo = (props) => {
  const aceEditorRef = useRef(null)
  const [dynamicStyleHeader, setDynamicStyleHeader] = useState({});
  const setHeaderBackgroundInterval = () => {
    setInterval(() => {
      var randomColorText = Math.floor(Math.random()*16777215).toString(16);
      var randomColorBackground = Math.floor(Math.random()*16777215).toString(16);
      
      setDynamicStyleHeader({
        color : "#"+randomColorText,
        backgroundColor :"#"+ randomColorBackground
      })
    },5000)
  }

  useEffect(() => {
    setHeaderBackgroundInterval();
    if(aceEditorRef && aceEditorRef.current)
      aceEditorRef.current.editor.session.foldAll();
  },[])
  return (
    <div className={styles.container}>
      <div style={dynamicStyleHeader} className={styles.headerContainer}>
        <div className={styles.headerText}>
          <p>React App Container</p>
        </div>
      </div>
      <div className={styles.jsonContainer}>
        <div style={{ marginBottom: "10px" }} className={styles.subHeaderText}>
          Code
        </div>
        <div className={styles.jsonEditorContainer}>
          <AceEditor
            ref={aceEditorRef}
            placeholder="Placeholder Text"
            mode="javascript"
            readOnly={true}                        
            value={jsonEditorCodeDisabledRoute}
            style={{ width: "100%", height: "100%" }}
            theme="monokai"
            editorProps={{ $blockScrolling: true }}
          />
        </div>
      </div>
      <div className={styles.optionsContainer}>
          <div
            style={{ marginBottom: "10px" }}
            className={styles.subHeaderText}
          >
            Configurations
          </div>
          <div>
            <label
              style={{ marginRight: "10px" }}
              htmlFor="isEnableRoutesChck"              
            >
              Enable/Disable Routes
            </label>
            <input id="isEnableRoutesChck" type="checkBox" />
          </div>
      </div>
      <div className={styles.mainContainer}>
        <AppContainer
          designConfig={{
            sideBarMenu: [
              {
                iconName: "home",
                label: "Home",
              },
              {
                iconName: "dashboard",
                label: "Dashboard",
              },
              {
                iconName: "apps",
                label: "Applications",
              },
              {
                iconName: "mail",
                label: "Mail",
                subMenuItemList: [
                  {
                    label: "Send Mail",
                    iconName: "post_add",
                  },
                  {
                    label: "List Mail",
                    iconName: "post_add",
                  },
                ],
              },
              {
                iconComp: <h1>U</h1>,
                label: "Users",
                onClick: () => {
                  alert("Users Clicked");
                },
              },
              {
                iconName: "settings",
                label: "Settings",
              },
            ],
            headerMenu: [
              {
                iconName: "room",
              },
              {
                iconName: "language",
                label: "Language",
                subMenuItemList: [
                  {
                    iconComp: <h4>TR</h4>,
                    label: "Turkish",
                    onClick: () => {
                      alert("Turkish Clicked");
                  },
                  },
                  {
                    iconComp: <h4>FR</h4>,
                    label: "French",
                    onClick: () => {
                      alert("English Clicked");
                  },
                  },
                ],
              },
            ],
            headerLeftContent: (
              <h5
                style={{
                  color: "white",
                  borderStyle: "solid",
                  borderColor: "white",
                  borderWidth: "1px",
                  padding:'5px'
                }}
              >
                {" "}
                Here is Header Left Content Key. You can add what you want as
                Component
              </h5>
            ),
            sideBarHeaderContent : (
              <h3 style={{fontFamily :'monospace'}}>
                Container & Your Logo
              </h3>
            )
          }}
        >
          <NoRouterVersion />
        </AppContainer>
      </div>
    </div>
  );
};

const HomeRoute = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1> Home Route </h1>
    </div>
  );
};

const AppsRoute = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1> Application Route </h1>
    </div>
  );
};

const SettingsRoute = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1> Settings Route </h1>
    </div>
  );
};

const NoRouterVersion = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>
        <h1>This is No Router Version,</h1>
        You can use only design, without adding routes to the component props.{" "}
        <br></br>
        <h5>You will see above the component code and design config. </h5>
      </p>
    </div>
  );
};

// routes={[
//   {
//     component : <HomeRoute />,
//     key : 'home',
//     label : 'Home Page',
//     path :'/react-app-container/home',
//   },
//   {
//     component : <AppsRoute />,
//     key : 'app',
//     label : 'Applications Page',
//     path :'/react-app-container/applications',
//   },
//   {
//     component : <SettingsRoute />,
//     key :'settings',
//     label :'Settings Page',
//     path  :'/react-app-container/settings'
//   }
// ]}

export default ReactAppContainerDemo;

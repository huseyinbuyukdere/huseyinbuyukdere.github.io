import React, { useState, useRef, useEffect } from "react";
import styles from "./reactAppContainerDemo.module.css";
import AppContainer from "react-app-container";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import {MarkDownForDemo} from './reactAppContainerConstants'
import ReactMarkdown from 'react-markdown'
// use the component in your app!

const jsonEditorCodeDisabledRoute = `import React from 'react';
import ReactAppContainer from 'react-app-container';


const NoRouterVersionContent = () => {
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
        <h3>
          You can see the router version by changing disable/enable option above
        </h3>
      </p>
    </div>
  );
};

const DesignConfig = {
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
      designConfig = {DesignConfig}>
      <NoRouterVersionContent />
    </ReactAppContainer>
  )

}

export default App;
`;

const jsonEditorCodeEnabledRoute = `import React from 'react';
import ReactAppContainer from 'react-app-container';


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

const DesignConfig = {
  sideBarMenu: [
    {
      iconName: "home",
      label: "Home",
      routeKey :"Home"
    },
    {
      iconName: "dashboard",
      label: "Dashboard",
    },
    {
      iconName: "apps",
      label: "Applications",
      routeKey :"Apps"
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
      routeKey :'Settings'
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
        padding: "5px",
      }}
    >
      {" "}
      Here is Header Left Content Key. You can add what you want as
      Component
    </h5>
  ),
  sideBarHeaderContent: (
    <h3 style={{ fontFamily: "monospace" }}>Container & Your Logo</h3>
  ),
} 

const Routes = [{
  component :(<HomeRoute />),
  key : 'Home',
  label : 'Home Page',
  path :'/react-app-container/'                        
},
{
  component : (<AppsRoute />),
  key :'Apps',
  label : 'Application',
  path :'/react-app-container/Apps'
},
{
  component :(<SettingsRoute />),
  key :'Settings',
  label :'Settings',
  path : '/react-app-container/Settings'
}]



const App = (props) => {

  return (
    <ReactAppContainer 
      designConfig = {DesignConfig}
      routes={Routes}>
      <NoRouterVersionContent />
    </ReactAppContainer>
  )

}

export default App;
`;



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

const SendMailRoute = () => {
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
      <h1> Send Mail Route </h1>
    </div>
  )
}

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
        <h3>
          You can see the router version by changing disable/enable option above
        </h3>
      </p>
    </div>
  );
};


const DesignConfig = {
  sideBarMenu: [
    {
      iconName: "home",
      label: "Home",
      routeKey :"Home"
    },
    {
      iconName: "dashboard",
      label: "Dashboard",
    },
    {
      iconName: "apps",
      label: "Applications",
      routeKey :"Apps"
    },
    {
      iconName: "mail",
      label: "Mail",
      subMenuItemList: [
        {
          label: "Send Mail",
          iconName: "post_add",
          routeKey :'SendMail'
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
      routeKey :'Settings'
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
        padding: "5px",
      }}
    >
      {" "}
      Here is Header Left Content Key. You can add what you want as
      Component
    </h5>
  ),
  sideBarHeaderContent: (
    <h3 style={{ fontFamily: "monospace" }}>Container & Your Logo</h3>
  ),
} 

const Routes = [{
  component :(<HomeRoute />),
  key : 'Home',
  label : 'Home Page',
  path :'/react-app-container/'                        
},
{
  component : (<AppsRoute />),
  key :'Apps',
  label : 'Application',
  path :'/react-app-container/Apps'
},
{
  component :(<SettingsRoute />),
  key :'Settings',
  label :'Settings',
  path : '/react-app-container/Settings'
},
{
  component :(<SendMailRoute />),
  key :'SendMail',
  label :'Send Mail Page',
  path : '/react-app-container/SendMail'
}]



const ReactAppContainerDemo = (props) => {
  const aceEditorRef = useRef(null);
  const [dynamicStyleHeader, setDynamicStyleHeader] = useState({});
  const [isEnabledRoutes, setIsEnabledRoutes] = useState(false);

  const setHeaderBackgroundInterval = () => {
    setInterval(() => {
      var randomColorText = Math.floor(Math.random() * 16777215).toString(16);
      var randomColorBackground = Math.floor(Math.random() * 16777215).toString(
        16
      );

      setDynamicStyleHeader({
        color: "#" + randomColorText,
        backgroundColor: "#" + randomColorBackground,
      });
    }, 5000);
  };

  useEffect(() => {
    setHeaderBackgroundInterval();
    if (aceEditorRef && aceEditorRef.current)
      aceEditorRef.current.editor.session.foldAll();
  }, []);

  useEffect(() => {
    if (aceEditorRef && aceEditorRef.current)
        aceEditorRef.current.editor.session.foldAll();
  }, [isEnabledRoutes])

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
            value={isEnabledRoutes ? jsonEditorCodeEnabledRoute : jsonEditorCodeDisabledRoute}
            style={{ width: "100%", height: "100%" }}
            theme="monokai"
            editorProps={{ $blockScrolling: true }}
          />
        </div>
      </div>
      <div className={styles.optionsContainer}>
        <div style={{ marginBottom: "10px" }} className={styles.subHeaderText}>
          Configurations
        </div>
        <div style={{overflowY :'scroll', height :'100%'}}>
                              
          <label style={{ marginRight: "10px" }} htmlFor="isEnableRoutesChck">
            Enable/Disable Routes
          </label>
          <input
            id="isEnableRoutesChck"
            type="checkBox"
            onChange={(event) => {              
              setIsEnabledRoutes(event.target.checked);
            }}
          />
        </div>
        <ReactMarkdown source={MarkDownForDemo} />
      </div>
      <div className={styles.mainContainer}>
        <AppContainer
          designConfig={DesignConfig}
          routes={isEnabledRoutes && Routes}
        >
          <NoRouterVersion />
        </AppContainer>
      </div>
    </div>
  );
};
export default ReactAppContainerDemo;

import React, { useState } from 'react'
import styles from './reactAppContainerDemo.module.css';
import ReactJson from 'react-json-view'
import AppContainer from 'react-app-container';

// use the component in your app!

const defaultConfig = {

}

const ReactAppContainerDemo = (props) => {

    const [designConfig, setDesignConfig] = useState(defaultConfig)

    return (
        <div className={styles.container} >
            <div className={styles.headerContainer}>
                Header
            </div>
            <div className={styles.optionsContainer}>
                <ReactJson theme="monokai" src={designConfig} onEdit={setDesignConfig} />
            </div>
            <div className={styles.mainContainer}>
                <AppContainer designConfig={{sideBarMenu : [
                    {iconName :'home',
                    label:'Home'},
                    {
                        iconName :'api',
                        label :'Mail'
                    }
                ]}} />
            </div>

        </div>
    )
}


export default ReactAppContainerDemo;
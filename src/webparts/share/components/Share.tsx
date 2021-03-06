import * as React from 'react';
import styles from './Share.module.scss';
import { IShareProps } from './IShareProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Share extends React.Component<IShareProps, {}> {
  public render(): React.ReactElement<IShareProps> {
    return (
      <div className={ styles.share }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint Mohan!!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

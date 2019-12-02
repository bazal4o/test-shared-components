import * as React from 'react'
export interface ExampleComponentProps extends React.Props<ExampleComponent> {
    text: string;
}
declare class ExampleComponent extends React.Component<ExampleComponentProps, any> {

}

declare module 'test-shared-components'

export default ExampleComponentProps



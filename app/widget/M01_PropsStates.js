import React from 'react';
import { Text, View } from 'react-native';

export class M01_PropsStates extends React.Component {
    constructor(props) {
        super(props);
        this.state={logat:false};
    }
    canviarLog = () =>{
        if(this.state.logat){
            this.setState({logat:false})
        }
        else {
            this.setState({logat:true})
        }
    }
    render() {

        let missatge = this.state.logat?'Usuari anònim':this.props.missatge; //fem servir l'estat per a mostrar un o un altre missatge
        return (
            <View >
                <Text onPress={this.canviarLog} >{missatge}</Text>
            </View>
        );

    }
}
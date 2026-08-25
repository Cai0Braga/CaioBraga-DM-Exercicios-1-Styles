import { StyleSheet, Text, View, SafeAreaView,ScrollView,KeyboardAvoidingView, Platform
} from 'react-native';

import { Card } from 'react-native-paper';
import {useState} from 'react';


function MeuCard({ titulo, subtitulo, desing}) {
  return (
    <Card style={desing}>
      <Card.Title
        title={titulo}
        subtitle={subtitulo}
        titleStyle={styles.tituloCard}
        subtitleStyle={styles.subtituloCard}
        titleNumberOfLines={2}
      />
    </Card>
  );
}






export default function App() {


 
  return (

   

    <SafeAreaView>

    <KeyboardAvoidingView
     
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style= {styles.container}> 


   <View style = {styles.grupo1}>
    
    <MeuCard
       titulo="Contas a pagar"
       subtitulo="Agua, luz, Gas"
       desing ={styles.card1}
       
    />

    <MeuCard
       titulo="Contas a Receber"
       subtitulo="Aluguel(Maria,Pedro)"
       desing={styles.card2}
    />
      
      <MeuCard
       titulo="Investimentos"
       subtitulo="+ R$ 3000"
       desing={styles.card3}
       
    />

    <MeuCard
       titulo="Saldo disponivel"
       subtitulo="R$ 25.000"
       desing={styles.card4}
    />


      </View>


      
      </ScrollView>
      
    
    </KeyboardAvoidingView> 
      
  </SafeAreaView>


  );
 
}

const styles = StyleSheet.create({

  container :{
     
       


  },

   grupo1: {
     flexDirection: "row",
     flexWrap: 'wrap',
     gap: 15,
     left: 10
     
     

   },

   card1:{
        paddingRight: 30,
        borderWidth: 4,
        marginTop: 40,
        bottom: 25,
        backgroundColor: '#800000',
        borderColor: 'red',
        borderRadius: 15,
        flex: 1,
        minWidth: 200

   },

   card2:{
        paddingRight: 30,
        borderWidth:4,
        marginTop: 40,
        bottom: 25,
        backgroundColor: '#B8860B',
        borderColor: 'gold',
        borderRadius: 15,
        flex: 1,
        minWidth: 200
   },


   card3:{
        paddingRight: 30,
        borderWidth:4,
        backgroundColor: 'darkgreen',
        borderColor: 'lightgreen',
        borderRadius: 15,
        flex: 1,
        minWidth: 200
   },


   card4:{
        paddingRight: 30,
        borderWidth:4,
        backgroundColor: 'darkgreen',
        borderColor: 'lightgreen',
        borderRadius: 15,
        flex: 1,
        minWidth: 200

   },

   tituloCard:{
     color: "white",
     fontWeight: 'bold'

   }

      
  

   


});




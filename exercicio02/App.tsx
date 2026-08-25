import { StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView, FlatList} from 'react-native';

import { FAB } from 'react-native-paper';
import {useState} from 'react';


type contatos = {foto: string; id: string; nome: string };

const Contatos: contatos[] = [
  {foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3Iw-cDZFQwh-3rNZFSfXaAaOOiH8w9Pv5-IpDTi2wss40VgtCUs_GXWb&s=10', id: '1', nome: 'Camila' },
  {foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnl5L77hqyrzjnrOF73J7Jz-Mjgnug9oGBU8clWeefpnPt69B-Lkc-D1P&s=10', id: '2', nome: 'Raphael' },
  { foto: 'https://img.magnific.com/fotos-premium/png-circulo-foto-de-perfil-adesivo-mulher-de-negocios-fundo-transparente_53876-945863.jpg',id: '3', nome: 'Amanda' },
  {foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJaPGcRey7SeIjA8v53Nk4atXIKiGSajdsOqzy6wkfg&s=10', id: '4', nome: 'Caio' },
  { foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSdWjxT1UsbBF6MboH0YQ8lx3F5hp-7nE4B28tsXJMdYJPPbNeQNFKuE&s=10',id: '5', nome: 'Thiago' },
   {foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3Iw-cDZFQwh-3rNZFSfXaAaOOiH8w9Pv5-IpDTi2wss40VgtCUs_GXWb&s=10', id: '1', nome: 'Camila' },
  {foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnl5L77hqyrzjnrOF73J7Jz-Mjgnug9oGBU8clWeefpnPt69B-Lkc-D1P&s=10', id: '2', nome: 'Raphael' },
  { foto: 'https://img.magnific.com/fotos-premium/png-circulo-foto-de-perfil-adesivo-mulher-de-negocios-fundo-transparente_53876-945863.jpg',id: '3', nome: 'Amanda' },
  {foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJaPGcRey7SeIjA8v53Nk4atXIKiGSajdsOqzy6wkfg&s=10', id: '4', nome: 'Caio' },
  { foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSdWjxT1UsbBF6MboH0YQ8lx3F5hp-7nE4B28tsXJMdYJPPbNeQNFKuE&s=10',id: '5', nome: 'Thiago' },
   {foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3Iw-cDZFQwh-3rNZFSfXaAaOOiH8w9Pv5-IpDTi2wss40VgtCUs_GXWb&s=10', id: '1', nome: 'Camila' },
  {foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnl5L77hqyrzjnrOF73J7Jz-Mjgnug9oGBU8clWeefpnPt69B-Lkc-D1P&s=10', id: '2', nome: 'Raphael' },
  { foto: 'https://img.magnific.com/fotos-premium/png-circulo-foto-de-perfil-adesivo-mulher-de-negocios-fundo-transparente_53876-945863.jpg',id: '3', nome: 'Amanda' },
  {foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJaPGcRey7SeIjA8v53Nk4atXIKiGSajdsOqzy6wkfg&s=10', id: '4', nome: 'Caio' },
  { foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSdWjxT1UsbBF6MboH0YQ8lx3F5hp-7nE4B28tsXJMdYJPPbNeQNFKuE&s=10',id: '5', nome: 'Thiago' },
   {foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3Iw-cDZFQwh-3rNZFSfXaAaOOiH8w9Pv5-IpDTi2wss40VgtCUs_GXWb&s=10', id: '1', nome: 'Camila' },
  {foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnl5L77hqyrzjnrOF73J7Jz-Mjgnug9oGBU8clWeefpnPt69B-Lkc-D1P&s=10', id: '2', nome: 'Raphael' },
  { foto: 'https://img.magnific.com/fotos-premium/png-circulo-foto-de-perfil-adesivo-mulher-de-negocios-fundo-transparente_53876-945863.jpg',id: '3', nome: 'Amanda' },
  {foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJaPGcRey7SeIjA8v53Nk4atXIKiGSajdsOqzy6wkfg&s=10', id: '4', nome: 'Caio' },
  { foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSdWjxT1UsbBF6MboH0YQ8lx3F5hp-7nE4B28tsXJMdYJPPbNeQNFKuE&s=10',id: '5', nome: 'Thiago' },

];

function renderContatos({ item }: { item: contatos }) {
  return (
    <View style = {styles.container}>
      <Image  source = {{uri: item.foto}}  style = {styles.fotos}/>
      <Text style = {styles.contatos}>{item.nome}</Text>
    </View>
  );
}

export default function App() {

  return (

    <SafeAreaView>
     
      <FAB icon="plus" onPress = {() => alert ('Voce curtiu esse perfil')} style = {styles.fab} />
     
      <FlatList
        data={Contatos}
        keyExtractor={(item) => item.id}
        renderItem={renderContatos}
      />

  
  </SafeAreaView>


  );
 
}

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      borderStyle:'solid',
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: '#2F4F4F'

    },


    contatos: {

      paddingVertical: 25,
      fontFamily: 'arial',
      top: 5,
      color: "white"
  
   },

    fotos: {

      width: 60,
      height: 60,
      margin: 10,
       borderRadius: 100

   },

   fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },

});




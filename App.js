import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import Swipe_list from './src/Swipe_list';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/AntDesign';

export default function App() {
  const onPress = () => {
    console.log('Filtres');
  }

  const data = [
    {id:1, name: "Carrefour", date: "08 Avril 2021"},
    {id:2, name: "Auchan", date: "06 Avril 2021"},
    {id:3, name: "Promod", date: "03 Avril 2021"},
    {id:4, name: "H&M", date: "01 Avril 2021"},
    {id:5, name: "FNAC", date: "31 Mars 2021"},
    {id:6, name: "Carrefour", date: "27 Mars 2021"},
    {id:7, name: "Monoprix", date: "25 Mars 2021"},
    {id:8, name: "Carrefour", date: "22 Mars 2021"},
  ]

  const months = [
    {id:1, name: "Avril 2021"},
    {id:2, name: "Mars 2021"},
    ]

  return (
      <NativeBaseProvider>
        <View style={styles.backgroundColor}>
          <View style={styles.container}>
              <Text style={styles.head}>
                Mes tickets
              </Text>
              <View style={styles.containerIcon}>
                <Icon4 name="qrcode" size={30} color='#2cab8b'/>
              </View>
          </View>
          <View style={styles.containerBouton}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.buttonText}>{'Filtres     >'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text numberOfLines={1} style={styles.buttonText}>{'Trie par date     >'}</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.list}>
            {months.map(month => (
              <React.Fragment key={`month-${month.id}`}>
                <View style={styles.months}>
                  <Text style={styles.monthsText}>{month.name}</Text>
                </View>
                {data
                  .filter(item => item.date.includes(month.name.split(' ')[0]))
                  .map(item => (
                    <Swipe_list key={`data-${item.id}`} name={item.name} date={item.date} />
                  ))}
              </React.Fragment>
            ))}
          </ScrollView>
            <View style={styles.containerNavbar}>
              <TouchableOpacity style={styles.buttonNavbar} onPress={onPress}>
                <Icon4 name="cloudo" size={30} />
                <Text style={styles.textNavbar}>{'Empreinte'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonNavbar} onPress={onPress}>
                <Icon name="ticket" size={30} color='#2cab8b'/>
                <Text style={[styles.textNavbar, styles.handled]}>{'Tickets'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonNavbar} onPress={onPress}>
                <Icon2 name="local-offer" size={30} />
                <Text style={styles.textNavbar}>{'Offres'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonNavbar} onPress={onPress}>
                <Icon3 name="account-circle-outline" size={30} />
                <Text style={styles.textNavbar}>{'Profil'}</Text>
              </TouchableOpacity>
            </View>
        </View>
      </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: '#2cab8b',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  handled: {
    color: '#2cab8b',
    fontWeight: 'bold',
  },
  containerIcon: {
    position: 'absolute',
    right: 20,
    top: 55,
    overflow: 'visible',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  textNavbar: {
    fontSize: 12,
    borderColor: 'black',
  },
  buttonNavbar: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ebebeb',
    elevation: 2, // Ajoute une ombre
    shadowColor: 'black', // Couleur de l'ombre
    shadowOffset: { width: 0, height: -2 }, // Décalage de l'ombre (vers le haut)
    shadowOpacity: 0.2, // Opacité de l'ombre
    shadowRadius: 2, // Rayon de l'ombre
  },
  containerNavbar: {
    flex: 0.15,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  containerBouton: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  months: {
    backgroundColor: '#b2ebdd',
    flex: 0.05,
  },
  monthsText: {
    color: '#2cab8b',
    fontWeight: 'bold',
    padding: 10,
  },
  list: {
    flex: 0.8,
  },
  button: {
    width: 150, // Modifier la largeur du bouton
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    borderRadius: 90,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
  },
  head: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  backgroundColor: {
    backgroundColor: '#f0f0f0',
    flex: 1,
  }
});

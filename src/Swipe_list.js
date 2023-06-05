import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Swipe_list(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const data = [
        {id:1, name:'Knacki Horta 350g', quantity: 1, co2: 5.1, price: 3.65},
        {id:2, name:'Chavroux 150g', quantity: 1, co2: 1, price: 2.23},
        {id:3, name:'confiture fraise 320g', quantity: 1, co2: 0.5, price: 3.90},
        {id:4, name:'Harrys pain 500g', quantity: 1, co2: 1.1, price: 1.50},
        {id:5, name:'Spagetti Barilla 500g', quantity: 1, co2: 0.9, price: 2.87},
    ];

        const names = data.map(item => item.name);
        const quantities = data.map(item => item.quantity);
        const co2Values = data.map(item => item.co2);
        const prices = data.map(item => item.price);
        const totalQuantity = quantities.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const totalCO2 = co2Values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const totalPrice = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    const toggleAccordion = () => {
      setIsExpanded(!isExpanded);
    };

    return (
        <TouchableOpacity onPress={toggleAccordion} style={[styles.container, isExpanded && styles.expandedContainer]}>
            <View >
                <View style={styles.wrapColumn}>
                    <View style={styles.column}>
                        <Text style={styles.head}>{props.name}</Text>
                        <Text style={styles.subtitle}>{props.date}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.kgco}>{totalCO2} kg CO2</Text>
                    </View>
                    <View style={styles.column}>
                        <Text>{totalPrice.toFixed(2)} €</Text>
                    </View>
                </View>
        
                {isExpanded && (
                <View>
                    <View style={styles.containerTable}>
                        <View style={[styles.columnTable, styles.firstColumn]}>
                            <Text style={styles.text}>Article</Text>
                            {names.map((name, index) => (
                                <Text numberOfLines={1} style={styles.textTable} key={index}>{name}</Text>
                            ))}
                            <Text style={styles.textResult}>Total Payé</Text>
                        </View>
                        <View style={styles.columnTable}>
                            <Text style={styles.text}>Qté</Text>
                            {quantities.map((quantity, index) => (
                                <Text style={styles.textTable} key={index}>{quantity}</Text>
                            ))}
                            <Text style={[styles.text, styles.padding]}>{totalQuantity}</Text>
                        </View>
                        <View style={styles.columnTable}>
                            <Text style={styles.text}>Co2</Text>
                            {co2Values.map((co2, index) => (
                                <Text style={[styles.textTable, styles.bold]} key={index}>{co2}kg</Text>
                            ))}
                            <Text style={styles.textResult}>{totalCO2.toFixed(2)}kg</Text>
                        </View>
                        <View style={styles.columnTable}>
                            <Text style={styles.text}>Prix</Text>
                            {prices.map((price, index) => (
                                <Text style={styles.textTable} key={index}>{price}€</Text>
                            ))}
                            <Text style={styles.textResult}>{totalPrice.toFixed(2)}€</Text>
                        </View>
                    </View>
                    <Text style={styles.link}>Voir le ticket complet</Text>
                </View>
                )}
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 0.12,
        borderRadius: 12,
        margin: 10,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    link: {
        textAlign: 'right',
        marginTop: 15,
        marginRight: '5%',
        fontSize: 13,
        textDecorationLine: 'underline',
        paddingBottom: 15,
    },
    padding: {
        paddingTop: 20,
    },
    expandedContainer: {
        flex: 0.35,
    },
    containerTable: {
        flexDirection: 'row',
    },  
    columnTable: {
        flex: 1,
        padding: 15,
        alignItems: 'left',
      },
    firstColumn: {
        flex: 2,
        marginLeft : 10,
      },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
      },
    bold: {
        fontWeight: 'bold',
    },
    wrapColumn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        width: '33%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },
    head: {
        fontSize: 15,
        color: '#2cab8b',
        fontWeight: 'bold',
    },
    kgco: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    subtitle: {
        textAlign: 'left',
        marginLeft: '5%',
        fontSize: 12,
    },
    textTable: {
        marginTop: 10,
        fontSize: 10,
    },
    textResult: {
        marginTop: 20,
        fontSize: 10,
        fontWeight: 'bold',
    },
});
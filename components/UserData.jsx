import { StyleSheet,View, Text } from "react-native"

const UserData = ({item}) => {
  return (
    <View style={styles.box}>
        <Text style={styles.item}>{item.id}</Text>
        <Text style={styles.item}>{item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    item : {
    fontSize : 24,
    color : 'orange',
    flex : 1,
    margin : 2,
    textAlign : 'center'
  },
  box : {
    flexDirection : 'row',
    borderWidth : 2,
    borderColor : 'pink',
    marginBottom : 10
  }
})

export default UserData;
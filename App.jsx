import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextComponent,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import AddTodo from "./Components/AddTodo";
import SandBox from "./Components/SandBox";

//Views, Text and Styles
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.boldText}>Hello, World!</Text>
//       </View>

//       <View style={styles.body}>
//         <Text>Lorem ipsum dolor sit amet.</Text>
//         <Text>Lorem ipsum dolor sit amet.</Text>
//         <Text>Lorem ipsum dolor sit amet. </Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   header: {
//     backgroundColor: "pink",
//     padding: 20,
//   },
//   boldText: {
//     fontWeight: "bold",
//   },
//   body: {
//     backgroundColor: "yellow",
//     padding: 20,
//     marginTop: 10,
//   },
// });

//Using state
// export default function App() {
//   const [name, setName] = useState("John Doe");
//   const [person, setPerson] = useState({
//     name: "Mario",
//     age: 40,
//   });

//   const clickHandler = () => {
//     setName("Chun-li");
//     setPerson({
//       name: "Luigi",
//       age: 45,
//     });

// alert("Who are you?");
//   };

//   return (
//     <View style={styles.container}>
//       <Text>My name is {name} </Text>
//       <Text>
//         His name is {person.name} and his age is {person.age}{" "}
//       </Text>
//       <View style={styles.buttonContainer}>
//         <Button title="update state" onPress={clickHandler} />
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   buttonContainer: {
//     marginTop: 20,
//   },
// });

//Text inputs
// export default function App() {
//   const [name, setName] = useState("John Doe");
//   const [age, setAge] = useState("30");

//   const handleNameChange = (val) => {
//     setName(val);
//   };
//   const handleAgeChange = (val) => {
//     setAge(val);
//   };
//   return (
//     <View style={styles.container}>
//       <Text>Enter name:</Text>
//       <TextInput
//       multiline={true}
//         placeholder="e.g. John Doe"
//         style={styles.input}
//         onChangeText={handleNameChange}
//       />

//       <Text>Enter age:</Text>
//       <TextInput
//       keyboardType="numeric"
//       multiline={true}
//         placeholder="e.g. 99"
//         style={styles.input}
//         onChangeText={handleAgeChange}
//       />

//       <Text>
//         {" "}
//         name:{name}, age: {age}{" "}
//       </Text>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: "#777",
//     padding: 8,
//     margin: 10,
//     width: 200,
//   },
// });

//Lists & ScrollView & FlatList & Touchable
// export default function App() {
//   const [people, setPeople] = useState([
//     { name: "Mario", id: "1" },
//     { name: "Luigi", id: "2" },
//     { name: "Yoshi", id: "3" },
//     { name: "Bowser", id: "4" },
//     { name: "Peach", id: "5" },
//     { name: "Toad", id: "6" },
//     { name: "Wario", id: "7" },
//   ]);

//   const pressHandler = (id) => {
//     console.log(id);
//     setPeople((prevPeople) => {
//       return prevPeople.filter((person) => person.id != id);
//     });
//   };
//   return (
//     <View style={styles.container}>
//       {/* <ScrollView>
//         {people.map((person) => (
//           <View key={person.id}>
//             <Text style={styles.item}>{person.name}</Text>
//           </View>
//         ))}
//       </ScrollView> */}

//       <FlatList
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         data={people}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => pressHandler(item.id)}>
//             <Text style={styles.item}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },

//   item: {
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: "pink",
//     fontSize: 24,
//     marginHorizontal: 10,
//     marginTop: 24,
//   },
// });

//Todo App

export default function App() {
  const [todo, setTodo] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodo((prevTodo) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodo];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be longer than 3 characters", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    //<SandBox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed keyboard");
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />

          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    // backgroundColor: "pink",
    padding: 40,
    flex: 1,
  },
  list: {
    // padding: 40,
    flex: 1,
    // backgroundColor: "yellow",
    marginTop: 20,
  },
});

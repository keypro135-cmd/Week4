
import { SafeAreaView, Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  const gradePoints = {
    'F': 0,
    'D': 1.5,
    'C': 2,
    'C+': 2.75,
    'B': 3,
    'B+': 3.5,
    'A': 4
  };

  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');
  const [mobileApps, setMobileApps] = useState('D');
  const [digitalMarketing, setDigitalMarketing] = useState('D');
  const [ooad, setOoad] = useState('D');
  const [financialManagement, setFinancialManagement] = useState('D');

  var gpa = 0;
  var credits = 5;
  var totalPossibleCredits = 30;
  var totalGradeScores = 0;

  function clickMe() {
    alert("this is the click me button");

    totalGradeScores = totalGradeScores + gradePoints[sswd] * credits;
    totalGradeScores = totalGradeScores + gradePoints[ob] * credits;
    totalGradeScores = totalGradeScores + gradePoints[mobileApps] * credits;
    totalGradeScores = totalGradeScores + gradePoints[digitalMarketing] * credits;
    totalGradeScores = totalGradeScores + gradePoints[ooad] * credits;
    totalGradeScores = totalGradeScores + gradePoints[financialManagement] * credits;

    gpa = totalGradeScores / totalPossibleCredits;

    alert("Your GPA is: " + gpa);
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: "5%"
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: "5%",
      marginRight: "5%",
      marginBottom: "5%"
    },
    label: {
      width: "65%",
      fontSize: 16
    },
    textInput: {
      width: "35%",
      borderWidth: 1,
      borderColor: "gray",
      padding: "2%"
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{
          fontWeight: "bold",
          fontSize: 24,
          textAlign: "center",
          marginTop: "5%",
          marginBottom: "10%"
        }}>
          GPA Calculator
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Maths</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          value={sswd}
          onChangeText={setSswd}
          autoCapitalize="characters"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Organisational Behaviour
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          value={ob}
          onChangeText={setOb}
          autoCapitalize="characters"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>MobileApps</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          value={mobileApps}
          onChangeText={setMobileApps}
          autoCapitalize="characters"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Digital Marketing</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          value={digitalMarketing}
          onChangeText={setDigitalMarketing}
          autoCapitalize="characters"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>OOAD</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          value={ooad}
          onChangeText={setOoad}
          autoCapitalize="characters"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Financial Management
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          value={financialManagement}
          onChangeText={setFinancialManagement}
          autoCapitalize="characters"
        />
      </View>

      <View>
        <Button title="submit" onPress={clickMe} />
      </View>
    </SafeAreaView>
  );
}

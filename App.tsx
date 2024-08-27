import { Text } from "react-native";
import CompanyData from "./components/CompanyData";

const App = () => {
    return (
        <>
            <Text>This is Root App Component</Text>
            <CompanyData/>
            <Text>...</Text>
            <CompanyData/>
            <Text>...</Text>
            <CompanyData/>
            <Text>...</Text>
            <UserData/>
            <Text>...</Text>
            <UserData/>
            <Text>...</Text>
            <UserData/>
        </>
    )
}

const UserData = () => {
    return (
        <>
            <Text>Name - Taha Ansari</Text>
            <Text>Gender - Male</Text>
            <Text>Age - 32</Text>
        </>
        
    )
}




export default App;
import { Dimensions, ImageBackground, View, StyleSheet } from 'react-native';
import SvgLogo from '../../assets/images/SvgLogo';

const LoginBackground = require('../../assets/images/login-bg.jpg')

export const LoginLayout = ({ children }) => {
    const HEIGHT_SCREEN = Dimensions.get('screen').height;
    return (
        <>
            <View style={{ flex: 1, height: HEIGHT_SCREEN }}>
                <ImageBackground source={LoginBackground} resizeMode="cover" style={styles.container} width={"100%"}>
                    <View style={styles.icon}>
                        <SvgLogo style={styles.icon} />
                    </View>
                    {children}
                </ImageBackground>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 20,
        justifyContent: 'center',
        flex: 1,
    },
    icon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        marginBottom: 40,
        marginVertical: 'auto',
    },
})
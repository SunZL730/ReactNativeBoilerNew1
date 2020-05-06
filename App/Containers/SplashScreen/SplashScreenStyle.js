import { StyleSheet, Dimensions } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
const { width, height } = Dimensions.get("window")

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.MainColor,
    flex: 1,
    paddingHorizontal: 20
  },
  carouselView: {
    alignItems: 'center',
  },
  logoView: {
    alignItems: 'center',
  },
  logo: {
    marginTop: 100,
    height: 100,
    width: 100,
  },
  text: {
    ...Fonts.regular,
    textAlign: 'center',
    color: Colors.white,
    paddingHorizontal: 50,
    marginTop: 20
  },
  userBoard: {
    height: 80,
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
    flexDirection: "row",
    marginBottom: 14,
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: "space-between"
  },
  userBoard1: {
    alignItems: 'center',
    flexDirection: "row",
  },
  userIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    padding: 10,
    backgroundColor: Colors.GrayLine
  },
  userInfoView: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    ...Fonts.body,
    color: Colors.Black,
  },
  labelTitle: {
    ...Fonts.small,
    color: Colors.WarningErrorColor,
  },
  userInfoText: {
    ...Fonts.label,
    color: Colors.LabelGreyColor,
  },
  chatView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PrimaryColor,
    height: 24,
    width: 80,
    borderRadius: 12,
  },
  chatText: {
    ...Fonts.chat,
    textAlign: 'center',
    color: Colors.white,
  },
  signup: {
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PrimaryColor,
    height: 50,
    borderRadius: 25,
    marginBottom: 50,
    marginTop: 20
  },
  signupText: {
    ...Fonts.large,
    textAlign: 'center',
    color: Colors.white,
  }
})

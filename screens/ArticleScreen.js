import { StyleSheet, SafeAreaView, Text} from 'react-native';
import { WebView } from 'react-native-webview';
import { ClipButton } from '../components/ClipButton';
import { useDispatch, useSelector } from 'react-redux';
import { addClip, deleteClip } from "../store/userSlice"

export const ArticleScreen = ( {route} ) => {
  const { article } = route.params;
  const dispatch = useDispatch();
  const clips = useSelector((state) => state.user.clips)
  const isCliped = clips.some((clip) => clip.url === article.url)

  const onPressClip = () => {
    // もしクリップ済みであれば削除
    if(isCliped) {
      dispatch(deleteClip(article));
    }else{
      dispatch(addClip(article));
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={onPressClip} enabled={isCliped} />
      <WebView source={{ uri: article.url}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
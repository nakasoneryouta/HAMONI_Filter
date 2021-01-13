import React from 'react';
import { KeyboardAvoidingView ,Image ,Text, ListRenderItemInfo} from 'react-native';
import { Asset } from 'expo-media-library';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import { View, Icon } from 'native-base';
import styles from './styles'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeNavigatorParamList } from '../../@types';
import { RouteProp } from '@react-navigation/native';
import { Header } from '../../components/atoms';
import images from '../../configs/images';

type NavigationProp = StackNavigationProp<
  HomeNavigatorParamList,
  'SelectEffect'
>;
type NativeRouteProp = RouteProp<HomeNavigatorParamList, 'SelectEffect'>;

interface Props {
  navigation: NavigationProp;
}

const component: React.FC<Props> = ({ navigation }) => {

	const [state, setState] = React.useState<{
		assets: Asset[];
		endCursor: string;
		hasNextPage: boolean;
	  }>({
		assets: [],
		endCursor: '',
		hasNextPage: true,
	  });

	const [selectedImages, setSelectedImages] = React.useState<Asset[]>([])
	const [topImage, setTopImage] = React.useState<Asset>()


	const getAssetsAsync = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

		if (status !== 'granted') {
			alert('Sorry, we need camera roll permissions to make this work!');
		}

		MediaLibrary.getAssetsAsync().then(data => {
			setState(data);
		})
	}

	const getNextAssets = async () => {
		const options = {
			after: state.endCursor
		}

		MediaLibrary.getAssetsAsync(options).then(data => {
			setState(prev => {
			return {
				assets: [...prev.assets, ...data.assets],
				endCursor: data.endCursor,
				hasNextPage: data.hasNextPage
			}
			});
		})
	}

	React.useEffect(() => {
		getAssetsAsync();
	}, [])


	const pressImage = (item: Asset) => {

		const isSelected = selectedImages.some((asset) => asset.id == item.id)

		if (isSelected) {
			const selected = selectedImages.filter((asset) => asset.id != item.id)
			setSelectedImages(selected)
			const uri = item.uri;
			// onChangeSelected?.(selected);
			// editPost((post)=>({items:post.items?.filter((v)=>v.uri!=uri)}));
		} else {
			const selected = [...selectedImages, item];
			setSelectedImages(selected)
			setTopImage(item)
			// let postItem: PostItem = {
			// 	uri: item.uri
			// }
			// onChangeSelected?.(selected);
			// editPost((post)=>({items: post.items ? [...post.items, postItem]: [postItem]}));
		}
	}

	//写真を選択したときのaction
	const _renderItem = (item: ListRenderItemInfo<Asset>) => {

		const index = selectedImages.findIndex((asset) => asset.id == item.item.id)

		return (
			<TouchableOpacity onPress={() => pressImage(item.item)}>
				<Image style={index != -1 ? [styles.image,{opacity: 0.6}] :styles.image} source={item.item} />
				{index != -1 ?
					<View style={styles.numbericon}>
						<Text style = {styles.number_text}>{index + 1}</Text>
					</View>
					:
					<></>
				}
			</TouchableOpacity>
		)
	}

	return (
		<View style={{ flex: 1 }}>
			<Header
				title={"キャンセル"}
				right={{text: "次へ",onPress: () => navigation.navigate("MultiImageEditErea")}}
				left={{source: images.close,onPress: () => navigation.navigate("MultiImageEditErea")}}
			/>
			<View style={styles.topImageContainer}>
				<Image source={topImage ? topImage: state.assets[0]} style={styles.topImage} />
			</View>
			<FlatList
				data={state.assets}
				numColumns={4}
				keyExtractor={(_, index) => index.toString()}

				renderItem={_renderItem}
				onEndReached={() => getNextAssets()}
			/>
    	</View>
	  )

}

export default React.memo(component);
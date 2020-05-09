import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

    const AlbumDetail = ({Data}) => {

      const {title, artist, thumbnail_image, image, url} = Data;
      const {headerContent, thumbNailStyle, thumbNailContainer, imageStyle, ViewImage, TextStyle} = styles

     return(
        <Card>

         <CardItem>
           <View style={thumbNailContainer}>
            <Image style={thumbNailStyle} source ={{uri : thumbnail_image}}/>
           </View>
           <View style={headerContent}>
              <Text style={TextStyle}>{title}</Text>
              <Text>{artist}</Text>
            </View>
         </CardItem>

         <CardItem>
             <Image style ={imageStyle} source = {{uri : image}}/>
         </CardItem>

         <CardItem>
         <Button whenPressed={()=> Linking.openURL(url)} text={'Buy Now'}/>
         </CardItem>

        </Card>
      );
    };
 const styles = {
   headerContent : {
      flexDirection : 'column',
      justifyContent : 'space-around',
   },
   TextStyle : {
     fontSize :18
   },
   thumbNailStyle :{
     height:50,
      width:50,
   },
   thumbNailContainer : {
     justifyContent : 'center',
     alignItems : 'center',
     marginLeft : 10,
     marginRight : 10,
   },
   imageStyle :{
     height : 300,
     width : null,
     flex:1,
     borderColor : '#000',
     borderWidth : 2,
     borderRadius : 100,
   },
   ViewImage : {
     justifyContent : 'center',
     alignItems : 'center',
   }
 }
export default AlbumDetail;

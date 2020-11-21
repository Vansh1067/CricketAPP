import LocalizedStrings from 'react-native-localization';
import hn from './hn'
import en from './en'
const  strings = new LocalizedStrings({
    
    en,
    hn
   });

export default strings
























/* import I18n,{getLanguages} from 'react-native-i18n'

import en from './en'
import hn from './hn'


I18n.fallbacks=true
I18n.translations={
    en,
    hn
}

getLanguages()
.then((languages)=>{
            console.log('getLanguages',languages)
})
.catch((err)=>{console.log(err)})

export default I18n */
import { Assets } from 'react-native-ui-lib'
import colours from './colours'
import fonts from './fonts'

const loadImageAssets = () => {
  Assets.loadAssetsGroup('icons', {
    'rock': require('../../assets/images/rock.png'),
    'rock1': require('../../assets/images/rock02.png'),
    'paper': require('../../assets/images/paper.png'),
    'paper1': require('../../assets/images/paper02.png'),
    'scissors': require('../../assets/images/scissors.png'),
    'scissors1': require('../../assets/images/scissors02.png')
  })
}

export {
  colours,
  fonts,
  loadImageAssets
}

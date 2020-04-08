import { Text, View } from '@tarojs/components'
import EleButton from '@/genericpage/elements/ele-button'
import ServerImage from '@/server-image/server-image'
import classNames from 'classnames'

import './styles.scss'

function EleActionList({ list, customStyle, className }) {
  const rootClass = classNames('ele-action-list', className)

  return (
    <View className={rootClass} style={customStyle}>
      {list.map((it) => {
        const { customStyle: actionStyle = {}, id } = it
        return (
          <EleButton
            key={id}
            uiType={it.uiType}
            btnType={it.btnType}
            linkToUrl={it.linkToUrl}
            size='small'
            circle
            customStyle={{ ...actionStyle }}
            disabled={it.disabled}
            onClick={it.onClick}
          >
            <View className='ele-action-list-btn'>
              {it.imageUrl && (
                <View className='ele-action-list-btn-image'>
                  <ServerImage src={it.imageUrl} />
                </View>
              )}
              <Text> {it.title}</Text>
            </View>
          </EleButton>
        )
      })}
    </View>
  )
}

EleActionList.options = {
  addGlobalClass: true,
}

EleActionList.defaultProps = {
  list: [],
  className: null,
  customStyle: {},
}

export default EleActionList

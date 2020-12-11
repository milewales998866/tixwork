import React from 'react'
import { getExtMode, isNotEmpty } from '@/nice-router/nice-router-util'
import { useVisible } from '@/service/use-service'
import { View } from '@tarojs/components'
import { AtToast } from 'taro-ui'

import './styles.scss'

function ItemWrapper(props) {
  const { visible, show, close } = useVisible(false)

  const { bordered, clear, errors, value, onClear, inline, disabled, hiddenTail = false } = props
  const hasError = errors.length > 0
  const hasValue = isNotEmpty(value)
  // 没有disabled，没有错误，有值，显示清理btn，就展示
  const showClearAction = !disabled && !hasError && clear && hasValue

  const rootClass = getExtMode({ bordered, vertical: !inline }).classNames('item-wrapper')

  return (
    <View className={rootClass}>
      <View className='item-wrapper-children'>{props.children}</View>

      {inline && !hiddenTail && (
        <View className='item-wrapper-tail'>
          {showClearAction && (
            <View
              className='iconfont iconfont-close-circle item-wrapper-tail-clear'
              onClick={onClear}
              value='close-circle'
              size={20}
            />
          )}
          {hasError && <View className='iconfont iconfont-warning-circle item-wrapper-tail-alert' onClick={show} />}
        </View>
      )}

      {hasError && <AtToast text={errors[0]} onClose={close} duration={3000} isOpened={visible} />}
    </View>
  )
}

ItemWrapper.defaultProps = {
  errors: [],
  clear: false,
  bordered: true,
  value: null,
  inline: true,
  disabled: false,
}
export default ItemWrapper

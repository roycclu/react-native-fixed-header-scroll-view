import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';

const { bool, func, number, string } = React.PropTypes;

const window = Dimensions.get('window');

// Properties accepted by `FixedHeaderScrollView`.
const propTypes = {
  renderFixedHeader: func,
  contentBackgroundColor: string,
  contentContainerStyle: View.propTypes.style,
};

class FixedHeaderScrollView extends Component {
  constructor(props) {
    super(props);
    if (!props.renderFixedHeader) {
      console.warn('Property `renderFixedHeader` must be set.');
    }
    this._bodyOffset = 0;
  }

  render() {
    const {
      renderFixedHeader,
      contentBackgroundColor,
      contentContainerStyle,
      children,
    } = this.props;

    const fixedHeader = this._renderFixedHeader(renderFixedHeader, {});

    const bodyComponent = this._wrapChildren(children, {});

    return (
      <View>
        {bodyComponent}
        {fixedHeader}
      </View>
    );
  }

  _renderFixedHeader(renderFixedHeader) {
    return (
      <View
        style={[
          {
            position: 'absolute',
            top: 0,
            width: Dimensions.get('window').width,
          },
        ]}
        onLayout={e => {
          const { nativeEvent: { layout: { height } } } = e;
          if (this._bodyOffset !== height) {
            this._bodyComponent.setNativeProps({
              style: { marginTop: height },
            });
            this._bodyOffset = height;
          }
        }}
      >
        {renderFixedHeader()}
      </View>
    );
  }

  _wrapChildren(children, { contentBackgroundColor, contentContainerStyle }) {
    const containerStyles = [{ backgroundColor: contentBackgroundColor }];

    if (contentContainerStyle) containerStyles.push(contentContainerStyle);

    return (
      <View style={containerStyles} ref={ref => (this._bodyComponent = ref)}>
        {children}
      </View>
    );
  }
}

FixedHeaderScrollView.propTypes = propTypes;

FixedHeaderScrollView.defaultProps = {
  renderFixedHeader: null,
  contentContainerStyle: null,
  contentBackgroundColor: '#FFF',
};

module.exports = FixedHeaderScrollView;

# react-native-fixed-header-scroll-view

A `<FixedHeaderScrollView>` wrapper that

- Takes a ScrollView-like component
- Takes a header to fix to the top of the ScrollView
- Works on iOS and Android

## Add it to your project

iOS and Android

run `yarn add react-native-fixed-header-scroll-view`

or

run `npm install react-native-fixed-header-scroll-view --save`

Then:

- Whenever you want to use it within React code you can: `import
FixedHeaderScrollView from 'react-native-fixed-header-scroll-view';`

## Demo

## Basic Usage

```
import FixedHeaderScrollView from 'react-native-fixed-header-scroll-view';

//Inside of a component's render() method:
render() {
  return (
    <FixedHeaderScrollView
      renderFixedHeader={() => (
        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>I'm a fixed header</Text>
        </View>
      )}
    >
      <View style={{ height: 1500 }}>
        <Text>Scroll Me</Text>
      </View>
    </FixedHeaderScrollView>
  )
}
```

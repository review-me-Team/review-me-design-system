# Review Me Design System

This is a shared component library incorporating Review Me's design system. Before getting started, please refer to the Storybook link below.

[storybook](https://657865daa80aa78e381921ae-bnstoadwwv.chromatic.com/?path=/story/button--default)

## Installation

npm

```bash
npm i review-me-design-system
```

yarn

```bash
yarn add review-me-design-system
```

## Getting Started

1. Wrap your application with the ReviewMeProvider provided by `review-me-design-system`

   ```javascript
   import { ReviewMeProvider } from 'review-me-design-system';

   <ReviewMeProvider>
     <App />
   </ReviewMeProvider>;
   ```

2. Import components from review-me-design-system and use the imported components

   ```javascript
   import { Icon, Button } from 'review-me-design-system';

   const Component = () => {
     return (
       <>
         <div>component</div>
         <Icon iconName="bookMark" />
         <Button variant="default" size="s">
           button
         </Button>
       </>
     );
   };
   ```

## Links

[npm](https://www.npmjs.com/package/review-me-design-system)

[storybook](https://657865daa80aa78e381921ae-mpvoixwyhf.chromatic.com/?path=/docs/button--docs)

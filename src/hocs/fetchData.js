// import React, {Component} from 'react';

// export default () => {
//   return class WrappedComponent extends Component {
//     static async getInitialProps (context) {
//       let props
//       if (typeof Page.getInitialProps === 'function') {
//         props = await Page.getInitialProps(context)
//       }

//       // Always update the current time on page load/transition because the
//       // <IntlProvider> will be a new instance even with pushState routing.
//       const now = Date.now()

//       return {...props, locale, messages, now}
//     }

//     render () {
//       const {locale, messages, now, ...props} = this.props
//       return (
//         <IntlProvider locale={locale} messages={messages} initialNow={now}>
//           <IntlPage {...props} />
//         </IntlProvider>
//       )
//     }
//   }
// }
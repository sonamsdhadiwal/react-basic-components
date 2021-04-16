// import React from 'react';
// import AccordionSection from './accordion-section';
// import PropTypes from 'prop-types';

// class Accordion extends React.Component {
//     static propTypes = {
//         allowMultipleOpen: PropTypes.bool,
//         children: PropTypes.instanceOf(Object).isRequired,
//       };

//       static defaultProps = {
//         allowMultipleOpen: false,
//       };
    
//     constructor(props) {
//         const openSections = {};
//         super(props);

//         this.state = { openSections };
//         this.props.children.forEach(child => {
//             if (child.props.isOpen) {
//               openSections[child.props.label] = true;
//             }
//         });
//     }

//     onClick = label => {
//         const { props: { allowMultipleOpen }, state: { openSections } } = this;
    
//         const isOpen = !!openSections[label];
    
//         if (allowMultipleOpen) {
//           this.setState({
//             openSections: {
//               ...openSections,
//               [label]: !isOpen
//             }
//           });
//         } else {
//           this.setState({
//             openSections: {
//               [label]: !isOpen
//             }
//           });
//         }
//       };
    

//     render(){
//         const { 
//             onClick,
//             props: { children },
//             state: { openSections },
//           } = this;
      
//         return(
//             <div style={{ border: "2px solid #008f68" }}>
//         {children.map(child => (
//           <AccordionSection
//             isOpen={!!openSections[child.props.label]}
//             label={child.props.label}
//             onClick={onClick}
//           >
//             {child.props.children}
//           </AccordionSection>
//         ))}
//       </div>
//     );
//     }
// }

// export default Accordion;
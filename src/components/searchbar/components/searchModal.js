// import React from 'react'
// import styled from 'styled-components/macro'

// import {
//   CollapsibleGroup,
//   CollapsibleGroupModal,
//   FilteredInput,
//   LocationWrapper,
//   Wrapper,
//   Label,
//   ModalCheckbox
// } from '../searchStyles'

// import { IconButton, MobileSearchButton, Button } from '../../button'

// import { ReactComponent as Search } from '../../assets/desktop/icon-white-search.svg'
// import { ReactComponent as Filter } from '../../assets/mobile/icon-filter.svg'
// import checkmark from '../../assets/desktop/icon-check.svg'
// import { ReactComponent as Location } from '../../assets/desktop/icon-location.svg'
// import { AppContext } from '../../../contexts'

// const MobileButtonContainer = styled.div`
//   width: 12rem;
//   height: 4.8rem;
//   margin-right: 1.6rem;
//   ${({ theme: { theme } }) => theme.mixin.flex('space-between', 'center')};
// `

// const Container = styled.div`
//   width: 100%;
//   max-width: 32.7rem;
//   height: 21.7rem;
//   border-radius: 6px;
//   background-color: ${({ theme: { theme, mode } }) => theme[mode].background.secondary};
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: 7.2rem 1fr;
//   overflow: hidden;
//   z-index: 10;

//   & > *:not(:last-child) {
//     border-bottom: 1px solid rgba(110, 128, 152, 0.2);
//   }

//   ${({ theme: { theme } }) => theme.mixin.absoluteCenter()};
// `

// export function MobileFilterButtons({ setShowModal }) {
//   return (
//     <MobileButtonContainer>
//       <IconButton onClick={() => setShowModal(true)}>
//         <Filter width={20} height={20} />
//       </IconButton>
//       <MobileSearchButton>
//         <Search width={24} height={20} />
//       </MobileSearchButton>
//     </MobileButtonContainer>
//   )
// }

// export function SearchModal({ checked, onChange }) {
//   const { showModal } = React.useContext(AppContext)
//   return showModal ? (
//     <Container>
//       <CollapsibleGroup>
//         <FilteredInput id="location-input-modal" placeholder=" " />
//         <LocationWrapper>
//           <Location />
//           <Label htmlFor="location-input" text>
//             Filter by location...
//           </Label>
//         </LocationWrapper>
//       </CollapsibleGroup>
//       <CollapsibleGroupModal>
//         <Wrapper>
//           {/* <ModalCheckbox
//             checked={checked}
//             onChange={onChange}
//             name="checked"
//             type="checkbox"
//             svg={checkmark}
//           /> */}
//           <Label bold>Full Time Only</Label>
//         </Wrapper>
//         <Button onClick={() => console.log('filtered click')} fullWidth>
//           Search
//         </Button>
//       </CollapsibleGroupModal>
//     </Container>
//   ) : null
// }

export const flex = (justify = 'center', align = 'center', direction = 'row') => `
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`

export const absoluteCenter = () => `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

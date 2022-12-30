import {useState} from 'react'

import {Container, Paragraph, Button, Image} from './styledComponents'

const Unlock = () => {
  const [cls, setCls] = useState(true)

  const ParaSet = cls ? 'Your Device is Locked' : 'Your Device is UnLocked'
  const ImgSet = cls
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png '
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png '
  const BtnText = cls ? 'Unlock' : 'Lock'
  const altText = cls ? 'lock' : 'unlock'

  const onChange = () => {
    setCls(prevState => !prevState)
  }

  return (
    <Container>
      <Image alt={altText} src={ImgSet} />
      <Paragraph>{ParaSet}</Paragraph>
      <Button onClick={onChange}>{BtnText}</Button>
    </Container>
  )
}
export default Unlock

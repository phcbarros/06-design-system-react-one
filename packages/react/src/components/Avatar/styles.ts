import * as Avatar from '@radix-ui/react-avatar'
import {styled} from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$12',
  height: '$12',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
  objectFit: 'cover',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$white',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})

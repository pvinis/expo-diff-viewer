import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { Link } from './Markdown'
import { HTMLMotionProps, motion, useAnimation } from 'framer-motion'
import type { Theme } from '../../theme'

const TROUBLESHOOTING_GUIDES = [
  {
    title: 'Xcode 12.5',
    href: 'https://github.com/facebook/react-native/issues/31480',
  },
  {
    title: 'Apple Silicon (M1)',
    href: 'https://github.com/facebook/react-native/issues/31941',
  },
]

const Container = styled(motion.div)<HTMLMotionProps<'div'>>`
  width: 250px;
`

interface ContentProps extends HTMLMotionProps<'div'> {
  theme?: Theme
}
const Content = styled(motion.div)<ContentProps>`
  h4 {
    border-bottom: 1px solid ${({ theme }) => theme.border};
    padding-bottom: 6px;
  }
`

const ListContainer = styled.ul`
  padding-left: 13px;
  margin-bottom: 0;
  list-style: disc;
`

const TroubleshootingGuides = ({
  isTooltipOpen,
}: {
  isTooltipOpen: boolean
}) => {
  const willHaveAnimation = useRef(isTooltipOpen)

  const containerAnimation = useAnimation()

  return (
    <Container
      // @ts-ignore-next-line
      willHaveAnimation={willHaveAnimation.current}
      animate={containerAnimation}
    >
      <Content>
        <h4>Troubleshooting guides</h4>
        <ListContainer>
          {TROUBLESHOOTING_GUIDES.map(({ title, href }) => (
            <li key={href}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ListContainer>
      </Content>
    </Container>
  )
}

export { TroubleshootingGuides }

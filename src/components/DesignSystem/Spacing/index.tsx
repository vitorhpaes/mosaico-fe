import styled, { SpacingKey } from 'styled-components'
import { space, SpaceProps, flexbox, FlexboxProps } from 'styled-system'

interface SystemSpacingProps {
    m?: SpacingKey
    margin?: SpacingKey
    p?: SpacingKey
    padding?: SpacingKey

    mx?: SpacingKey
    marginX?: SpacingKey
    my?: SpacingKey
    marginY?: SpacingKey

    mt?: SpacingKey
    marginTop?: SpacingKey
    mb?: SpacingKey
    marginBottom?: SpacingKey
    ml?: SpacingKey
    marginLeft?: SpacingKey
    mr?: SpacingKey
    marginRight?: SpacingKey

    px?: SpacingKey
    paddingX?: SpacingKey
    py?: SpacingKey
    paddingY?: SpacingKey

    pt?: SpacingKey
    paddingTop?: SpacingKey
    pb?: SpacingKey
    paddingBottom?: SpacingKey
    pl?: SpacingKey
    paddingLeft?: SpacingKey
    pr?: SpacingKey
    paddingRight?: SpacingKey
}

const Spacing = styled.div<SystemSpacingProps & SpaceProps & FlexboxProps>(
    space,
    {
        display: 'flex',
    },
    flexbox
)

export default Spacing

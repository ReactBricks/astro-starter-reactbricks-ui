import { types } from 'react-bricks/astro'
import blockNames from '../../blockNames'
import type { LayoutProps } from '../../LayoutSideProps'
import {
  containerWidthSideGroup,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import Video from '../../shared/components/Video'

interface SingleColumnVideoProps extends LayoutProps {
  videoType: 'file' | 'streaming'
  platform: 'youtube' | 'vimeo'
  videoId: string
  videoFile: types.IFileSource
}

const SingleColumnVideo: types.Brick<SingleColumnVideoProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  videoType,
  platform,
  videoId,
  videoFile,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        {videoType === 'streaming' ? (
          <Video type="streaming" platform={platform} videoId={videoId} />
        ) : (
          <Video type="file" videoFile={videoFile} />
        )}
      </Container>
    </Section>
  )
}

SingleColumnVideo.schema = {
  name: blockNames.Video,
  label: 'Video',
  category: 'single column / blog',
  tags: ['blog', 'video'],
  previewImageUrl: `/bricks-preview-images/${blockNames.Video}.png`,
  // Defaults when a new brick is added
  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    videoType: 'streaming',
    platform: 'youtube',
    videoId: 'L4NGrMRTY3M',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      groupName: 'Video type',
      defaultOpen: true,
      props: [
        {
          name: 'videoType',
          label: 'Video type',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              {
                value: 'file',
                label: 'File (.mp4)',
              },
              {
                value: 'streaming',
                label: 'YouTube or Vimeo',
              },
            ],
          },
        },
      ],
    },
    {
      groupName: 'Video source',
      defaultOpen: true,
      //show: ({ videoType }) => videoType === 'streaming',
      props: [
        {
          name: 'platform',
          label: 'Video platform',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'youtube', label: 'YouTube' },
              { value: 'vimeo', label: 'Vimeo' },
            ],
          },
        },
        {
          name: 'videoId',
          label: 'Video ID (i.e. "L4NGrMRTY3M")',
          type: types.SideEditPropType.Text,
        },
      ],
    },
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],
}

export default SingleColumnVideo

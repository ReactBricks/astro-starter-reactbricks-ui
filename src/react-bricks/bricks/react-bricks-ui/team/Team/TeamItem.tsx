import classNames from 'classnames'
import { Image, Plain, Text, types } from 'react-bricks/astro'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import blockNames from '../../blockNames'
import { textColors } from '../../colors'
import type { LayoutProps } from '../../LayoutSideProps'
import { avatars } from '../../shared/defaultImages'

export interface TeamItemProps extends LayoutProps {
  twitter?: string
  github?: string
  linkedin?: string
  picture: types.IImageSource
  memberName: types.TextValue
  jobTitle: types.TextValue
}

const TeamItem: types.Brick<TeamItemProps> = ({
  twitter,
  github,
  linkedin,
  picture,
  memberName,
  jobTitle,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        propName="picture"
        source={picture}
        alt={
          typeof memberName === 'string'
            ? memberName
            : Plain.serialize(memberName)
        }
        aspectRatio={1}
        imageClassName={classNames(
          'block w-[72px] h-[72px] object-contain rounded-full mb-1'
        )}
      />

      <Text
        propName="memberName"
        value={memberName}
        renderBlock={(props) => (
          <div
            className={classNames(
              'text-sm font-bold text-center min-w-[70px]',
              textColors.GRAY_800
            )}
          >
            {props.children}
          </div>
        )}
        placeholder="Name..."
      />
      <Text
        propName="jobTitle"
        value={jobTitle}
        renderBlock={(props) => (
          <div className="text-xs text-center text-gray-500 dark:text-white/70 min-w-[70px]">
            {props.children}
          </div>
        )}
        placeholder="Role..."
      />

      {(twitter || linkedin || github) && (
        <div className="flex flex-row justify-center space-x-2 mt-2">
          {twitter && (
            <div className="hover:text-sky-500 hover:-translate-y-px transition-all ease-out duration-150 text-gray-400 dark:text-gray-400 dark:hover:text-gray-200">
              <a
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          )}
          {linkedin && (
            <div className="hover:text-sky-500 hover:-translate-y-px transition-all ease-out duration-150 text-gray-400 dark:text-gray-400 dark:hover:text-gray-200">
              <a
                href={`https://linkedin.com/${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          )}
          {github && (
            <div className="hover:text-sky-500 hover:-translate-y-px transition-all ease-out duration-150 text-gray-400 dark:text-gray-400 dark:hover:text-gray-200">
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

TeamItem.schema = {
  name: blockNames.TeamItem,
  label: 'Member',
  category: 'team',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Team/TeamItem.tsx',

  getDefaultProps: () => ({
    memberName: 'Matteo Frana',
    jobTitle: 'Founder and CEO',
    twitter: 'matfrana',
    github: '',
    linkedin: '',
    picture: avatars.MATTEO_FRANA,
  }),
  sideEditProps: [
    {
      groupName: 'Social Links',
      defaultOpen: true,
      props: [
        {
          name: 'twitter',
          label: 'Twitter UserName',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'linkedin',
          label: 'Linkedin UserName',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'github',
          label: 'Github UserName',
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
}

export default TeamItem

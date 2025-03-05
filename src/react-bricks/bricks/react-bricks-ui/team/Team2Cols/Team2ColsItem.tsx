import classNames from 'classnames'
import { Image, Plain, Text, types } from 'react-bricks/astro'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import blockNames from '../../blockNames'
import { textColors } from '../../colors'
import { avatars } from '../../shared/defaultImages'

interface Team2ColsItemProps {
  twitter?: string
  linkedin?: string
  github?: string
  picture: types.IImageSource
  memberName: types.TextValue
  jobTitle: types.TextValue
}

const Team2ColsItem: types.Brick<Team2ColsItemProps> = ({
  twitter,
  linkedin,
  github,
  picture,
  memberName,
  jobTitle,
}) => {
  return (
    <li className="flex space-x-4">
      <Image
        propName="picture"
        source={picture}
        alt={
          typeof memberName === 'string'
            ? memberName
            : Plain.serialize(memberName)
        }
        aspectRatio={1}
        imageClassName="rounded-full w-12 h-12 object-contain"
      />

      <div className="ml-3 dark:text-gray-200 min-w-[90px]">
        <Text
          propName="memberName"
          value={memberName}
          renderBlock={(props) => (
            <div className={`font-bold ${textColors.GRAY_800}`}>
              {props.children}
            </div>
          )}
          placeholder="Name..."
        />
        <Text
          propName="jobTitle"
          value={jobTitle}
          renderBlock={(props) => (
            <div className={`${textColors.GRAY_600} mb-2`}>
              {props.children}
            </div>
          )}
          placeholder="Job title..."
        />
        <div className="flex flex-row items-center space-x-2">
          {twitter && (
            <div>
              <a
                className={classNames(
                  'hover:text-sky-600 transition-all ease-out duration-150 hover:-translate-y-0.5',
                  textColors.GRAY_400
                )}
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          )}
          {linkedin && (
            <div>
              <a
                className={classNames(
                  'hover:text-sky-600 transition-all ease-out duration-150 hover:-translate-y-0.5',
                  textColors.GRAY_400
                )}
                href={`https://linkedin.com/${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          )}
          {github && (
            <div>
              <a
                className={classNames(
                  'hover:text-sky-600 transition-all ease-out duration-150 hover:-translate-y-0.5',
                  textColors.GRAY_400
                )}
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

Team2ColsItem.schema = {
  name: blockNames.Team2ColsItem,
  label: 'Member',
  category: 'team',
  hideFromAddMenu: true,
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    title: 'Thick as a brick',
    memberName: 'Alvin Payne',
    jobTitle: 'Frontend Developer',
    twitter: 'alvin_payne',
    linkedin: 'alvin_payne',
    picture: avatars.AVATAR_MALE,
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
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
}

export default Team2ColsItem

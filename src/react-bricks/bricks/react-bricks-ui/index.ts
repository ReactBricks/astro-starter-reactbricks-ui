import { types } from 'react-bricks/astro'

// LAYOUT
import Footer from './layout/Footer'
import FooterColumn from './layout/FooterColumn'
import FooterLink from './layout/FooterLink'
import Header from './layout/Header'
import HeaderMenuItem from './layout/HeaderMenuItem'
import HeaderMenuSubItem from './layout/HeaderMenuSubItem'

// SHARED
import Badge from './shared/bricks/Badge'
import BulletListItem from './shared/bricks/BulletListItem'
import Button from './shared/bricks/Button'

// MAIN CONTENT SECTIONS
import Card from './mainContent/Cards/Card'
import Cards from './mainContent/Cards/Cards'
import FeatureCallout from './mainContent/FeatureCallout/FeatureCallout'
import FeatureItem from './mainContent/Features/FeatureItem'
import Features from './mainContent/Features/Features'
import LinkCard from './mainContent/LinkCards/LinkCard'
import LinkCards from './mainContent/LinkCards/LinkCards'
import TextMedia from './mainContent/TextMedia/TextMedia'
import TextMediaLogo from './mainContent/TextMedia/TextMediaLogo'

// HERO UNITS
import HeroUnit from './heroSections/HeroUnit/HeroUnit'
import HeroUnit2 from './heroSections/HeroUnit2/HeroUnit2'
import ImageCarousel from './heroSections/ImageCarousel/ImageCarousel'
import ImageCarouselItem from './heroSections/ImageCarousel/ImageCarouselItem'

// CALL TO ACTION
import CallToAction from './cta/CallToAction/CallToAction'
import NewsletterHero from './cta/NewsletterHero/NewsletterHero'
import NewsletterSubscribe from './cta/NewsletterSubscribe/NewsletterSubscribe'

// SEPARATORS
import HorizontalRule from './separators/HorizontalRule/HorizontalRule'
import Spacer from './separators/Spacer/Spacer'

// TEAM
import Team from './team/Team/Team'
import TeamItem from './team/Team/TeamItem'
import Team2Cols from './team/Team2Cols/Team2Cols'
import Team2ColsItem from './team/Team2Cols/Team2ColsItem'

// TESTIMONIAL
import Testimonial from './testimonials/Testimonial/Testimonial'
import Testimonial3Cols from './testimonials/Testimonial3Cols/Testimonial3Cols'
import Testimonial3ColsItem from './testimonials/Testimonial3Cols/Testimonial3ColsItem'

// LOGO SECTIONS
import Customer from './logos/Customers/CustomerItem'
import Customers from './logos/Customers/Customers'
import LogoGrid from './logos/LogoGrid/LogoGrid'
import LogoGridItem from './logos/LogoGrid/LogoGridItem'
import SmallLogoGrid from './logos/SmallLogoGrid/SmallLogoGrid'
import SmallLogoGridItem from './logos/SmallLogoGrid/SmallLogoGridItem'

// FAQ
import Faqs from './Faq/Faq'
import Faqs2cols from './Faq/Faq2cols'
import Faq from './Faq/FaqItem'

// CONTACT
import ContactsForm from './contacts/ContactsForm/ContactsForm'
import FormBuilder from './contacts/FormBuilder/FormBuilder'
import FormCheckbox from './contacts/FormBuilder/FormCheckbox'
import FormInput from './contacts/FormBuilder/FormInput'
import FormRadiobuttons from './contacts/FormBuilder/FormRadiobuttons'
import FormSelect from './contacts/FormBuilder/FormSelect'
import FormSingleRadio from './contacts/FormBuilder/FormSingleRadio'
import FormTextarea from './contacts/FormBuilder/FormTextarea'
import Office from './contacts/Offices/Office'
import Offices from './contacts/Offices/Offices'

// PRICING
import PlanFeature from './pricing/PlanFeature'
import Pricing from './pricing/Pricing'
import PricingPlan from './pricing/PricingPlan'

// SINGLE COLUMN
import BigImage from './singleColumnContent/BigImage/BigImage'
import BlogTitle from './singleColumnContent/BlogTitle/BlogTitle'
import Paragraph from './singleColumnContent/Paragraph/Paragraph'
import Table from './singleColumnContent/Table/Table'
import TableCell from './singleColumnContent/Table/TableCell'
import TableRow from './singleColumnContent/Table/TableRow'
import Title from './singleColumnContent/Title/Title'
import Tweet from './singleColumnContent/Tweet/Tweet'
import TweetLight from './singleColumnContent/Tweet/TweetLight'
import Video from './singleColumnContent/Video/Video'

// DOCUMENTS
import Document from './Documents/Document'
import Documents from './Documents/Documents'

// Theme structure
const allBricks: types.Theme = {
  themeName: 'React Bricks UI',
  categories: [
    {
      categoryName: 'Main content',
      bricks: [
        TextMedia,
        TextMediaLogo,
        Features,
        FeatureItem,
        FeatureCallout,
        Cards,
        Card,
        LinkCards,
        LinkCard,
      ],
    },
    {
      categoryName: 'Hero sections',
      bricks: [HeroUnit, HeroUnit2, ImageCarousel, ImageCarouselItem],
    },
    {
      categoryName: 'Call to action',
      bricks: [CallToAction, NewsletterHero, NewsletterSubscribe],
    },
    {
      categoryName: 'Separators',
      bricks: [Spacer, HorizontalRule],
    },
    {
      categoryName: 'Team',
      bricks: [Team, TeamItem, Team2Cols, Team2ColsItem],
    },
    {
      categoryName: 'Testimonial',
      bricks: [Testimonial, Testimonial3Cols, Testimonial3ColsItem],
    },
    {
      categoryName: 'Logo sections',
      bricks: [
        Customers,
        Customer,
        LogoGrid,
        LogoGridItem,
        SmallLogoGrid,
        SmallLogoGridItem,
      ],
    },
    {
      categoryName: 'FAQ',
      bricks: [Faqs, Faq, Faqs2cols],
    },
    {
      categoryName: 'Contact',
      bricks: [
        Offices,
        Office,
        ContactsForm,
        FormBuilder,
        FormInput,
        FormTextarea,
        FormSelect,
        FormCheckbox,
        FormRadiobuttons,
        FormSingleRadio,
      ],
    },
    {
      categoryName: 'Pricing',
      bricks: [Pricing, PricingPlan, PlanFeature],
    },
    {
      categoryName: 'Single column / Blog',
      bricks: [
        Title,
        Paragraph,
        BigImage,
        Video,
        Table,
        TableRow,
        TableCell,
        Tweet,
        TweetLight,
        BlogTitle,
      ],
    },
    {
      categoryName: 'Documents',
      bricks: [Documents, Document],
    },
    {
      categoryName: 'Layout',
      bricks: [
        Header,
        HeaderMenuItem,
        HeaderMenuSubItem,
        Footer,
        FooterColumn,
        FooterLink,
      ],
    },
    {
      categoryName: 'Shared',
      bricks: [Badge, BulletListItem, Button],
    },
  ],
}

// Single bricks
export {
  Badge, BigImage, BulletListItem, Button, CallToAction, Card, Cards, ContactsForm, Customer, Customers, Document, Documents, Faq, Faqs, Faqs2cols, FeatureCallout, FeatureItem, Features, Footer,
  FooterColumn,
  FooterLink, FormBuilder,
  FormCheckbox,
  FormInput, FormRadiobuttons, FormSelect, FormSingleRadio,
  FormTextarea, Header,
  HeaderMenuItem,
  HeaderMenuSubItem, HeroUnit,
  HeroUnit2, HorizontalRule, ImageCarousel,
  ImageCarouselItem, LinkCard, LinkCards, LogoGrid,
  LogoGridItem, NewsletterHero,
  NewsletterSubscribe, Office, Offices, Paragraph, PlanFeature, Pricing,
  PricingPlan, SmallLogoGrid,
  SmallLogoGridItem, Spacer, Table, TableCell, TableRow, Team, Team2Cols,
  Team2ColsItem, TeamItem, Testimonial,
  Testimonial3Cols,
  Testimonial3ColsItem, TextMedia,
  TextMediaLogo,
  Title, Tweet,
  TweetLight, Video
}

export default allBricks

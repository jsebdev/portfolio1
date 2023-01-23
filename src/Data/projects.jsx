import { DeploymentCustomLinks } from 'ui/components/projectsDescriptions/DeploymentCustomLinks';
import { CHATBOT_NUFI_POST, MAIMOVIES_POST, projectPostTypes, WORK } from 'ui/helpers/constants';
import { SecondaryButtonS } from 'ui/styledComponents/ButtonsStyled';

export const projectList = [
  {
    id: 'MaiMovies',
    thumbnail: 'mai_movies.jpg',
    name: 'MaiMovies',
    projectPostType: projectPostTypes.post,
    DescriptionComponent: DeploymentCustomLinks,
    descriptionComponentProps: {
      descriptionText:
        'Mobile app that allows you to create and organize lists of movies and tv shows.',
      customLinks: [
        {
          href: 'https://github.com/jsebdev/MaiMovies',
          button: <SecondaryButtonS>Code</SecondaryButtonS>
        },
        // {
        //   href: "soon-to-be-available",
        //   button: <GooglePlayButtonS />
        // }
      ]
    },
    postLocation: `/${WORK}/${MAIMOVIES_POST}`,
    featured: true
  },
  {
    id: 'port-ecommerce',
    thumbnail: 'ecommerce.png',
    name: 'Port-ecommerce',
    projectPostType: projectPostTypes.deployment,
    DescriptionComponent: DeploymentCustomLinks,
    descriptionComponentProps: {
      descriptionText:
        'E-commerce website for massive online store. It is a full stack project, built with Nextjs, Redux, Django, Graphql, Postgres.',
      customLinks: [
        {
          href: 'https://github.com/jsebdev/E-commerce-graphql-nextjs',
          button: <SecondaryButtonS>Front Code</SecondaryButtonS>
        },
        {
          href: 'https://github.com/jsebdev/E-commerce-graphql-django',
          button: <SecondaryButtonS>Back Code</SecondaryButtonS>
        }
      ]
    },
    deploymentUrl: 'https://port-ecommerce.shop/',
    featured: true
  },
  {
    id: 'booking-experience',
    thumbnail: 'booking_experience.png',
    name: 'Booking experience',
    projectPostType: projectPostTypes.deployment,
    DescriptionComponent: DeploymentCustomLinks,
    descriptionComponentProps: {
      descriptionText:
        'Simulating booking experience with Next.js and Redux. Avoid bookings overlapping and theme responds to machine preference changes.',
      customLinks: [
        {
          href: "https://github.com/jsebdev/booking_experience",
          button: <SecondaryButtonS>Code</SecondaryButtonS>
        },
        {

          href: "https://youtu.be/LWFh4IbhSmI",
          button: <SecondaryButtonS>Video</SecondaryButtonS>
        }
      ]
    },
    deploymentUrl: 'https://booking-experience.netlify.app/',
    featured: true
  },
  {
    id: 'nufi_chatbot',
    thumbnail: 'chatbot.jpg',
    name: 'Background check chatbot',
    projectPostType: projectPostTypes.post,
    postLocation: `/${WORK}/${CHATBOT_NUFI_POST}`,
    descriptionText:
      'Whatsapp chatbot that allows verifying the identity of individuals in under 8 minutes.',
    featured: true
  },
  {
    id: 'order_manager',
    thumbnail: 'order_manager.PNG',
    name: 'Order Manager',
    projectPostType: projectPostTypes.deployment,
    DescriptionComponent: DeploymentCustomLinks,
    descriptionComponentProps: {
      descriptionText:
        'Web app for handling orders creation, deletion, shipping and searches for retail companies',
      customLinks: [
        {
          href: 'https://github.com/jsebdev/Order_Manager_frontend',
          button: <SecondaryButtonS>Front Code</SecondaryButtonS>
        },
        {
          href: 'https://github.com/jsebdev/Order_Manager_api',
          button: <SecondaryButtonS>Back Code</SecondaryButtonS>
        }
      ]
    },
    deploymentUrl: 'https://jsebdev.github.io/Order_Manager_frontend',
    featured: false
  },
];

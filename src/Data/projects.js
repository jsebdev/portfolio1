import { DeploymentCustomLinks } from 'ui/components/projectsDescriptions/DeploymentCustomLinks';
import { CHATBOT_NUFI_POST, MAIMOVIES_POST, projectPostTypes, WORK } from 'ui/helpers/constants';

export const projectList = [
  {
    id: 'Mai Movies',
    thumbnail: 'mai_movies.jpg',
    name: 'Mai Movies',
    projectPostType: projectPostTypes.post,
    DescriptionComponent: DeploymentCustomLinks,
    descriptionComponentProps: {
      descriptionText:
        'Mobile app that allows you to create and organize lists of movies and tv shows.',
      customLinks: {
        "Code": 'https://github.com/jsebdev/MaiMovies',
      }
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
      customLinks: {
        "Front code": 'https://github.com/jsebdev/E-commerce-graphql-nextjs',
        "Back code": 'https://github.com/jsebdev/E-commerce-graphql-django',
      }
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
      customLinks: {
        Code: "https://github.com/jsebdev/booking_experience",
        Video: "https://youtu.be/LWFh4IbhSmI"
      }
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
      customLinks: {
        "Front code": 'https://github.com/jsebdev/Order_Manager_frontend',
        "Back code": 'https://github.com/jsebdev/Order_Manager_api',
      }
    },
    deploymentUrl: 'https://jsebdev.github.io/Order_Manager_frontend',
    featured: false
  },
];

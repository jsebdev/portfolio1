import { BasicDeploymentDescription } from 'ui/components/BasicDeploymentDescription';
import { CHATBOT_NUFI, projectPostTypes, WORK } from 'ui/helpers/constants';

export const projectList = [
  {
    id: 'port-ecommerce',
    thumbnail: 'ecommerce.png',
    name: 'Port-ecommerce',
    projectPostType: projectPostTypes.deployment,
    DescriptionComponent: BasicDeploymentDescription,
    descriptionComponentProps: {
      descriptionText:
        'E-commerce website for massive online store. It is a full stack project, built with Nextjs, Redux, Django, Graphql, Postgres.',
      frontUrl: 'https://github.com/jsebdev/E-commerce-graphql-nextjs',
      backUrl: 'https://github.com/jsebdev/E-commerce-graphql-django',
    },
    deploymentUrl: 'https://port-ecommerce.shop/',
  },
  {
    id: 'order_manager',
    thumbnail: 'order_manager.PNG',
    name: 'Order Manager',
    projectPostType: projectPostTypes.deployment,
    DescriptionComponent: BasicDeploymentDescription,
    descriptionComponentProps: {
      descriptionText:
        'Web app for handling orders creation, deletion, shipping and searches for retail companies',
      frontUrl: 'https://github.com/jsebdev/Order_Manager_frontend',
      backUrl: 'https://github.com/jsebdev/Order_Manager_api',
    },
    deploymentUrl: 'https://jsebdev.github.io/Order_Manager_frontend',
  },
  {
    id: 'nufi_chatbot',
    thumbnail: 'chatbot.jpg',
    name: 'Background check chatbot',
    projectPostType: projectPostTypes.post,
    postLocation: `/${WORK}/${CHATBOT_NUFI}`,
    descriptionText:
      'Whatsapp chatbot that allows verifying the identity of individuals in under 8 minutes.',
  }
];

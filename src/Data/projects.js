import { OrderManagerDescription } from 'ui/components/OrderManagerDescription';
import { CHATBOT_NUFI, projectPostTypes, WORK } from 'ui/helpers/constants';

export const projectList = [
  {
    id: 'order_manager',
    thumbnail: 'order_manager.PNG',
    name: 'Order Manager',
    projectPostType: projectPostTypes.deployment,
    DescriptionComponent: OrderManagerDescription,
    descriptionComponentProps: {
      descriptionText:
        'Web app for for handling orders creation, deletion, shipping and searches for retail companies',
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

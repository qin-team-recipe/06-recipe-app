import { SITE_TITLE } from '../_constants/meta';
import { isString } from './typeGuards';

export const getPageTitle = (title?: string): string => {
  if (isString(title)) {
    return `${title} - ${SITE_TITLE}`;
  }
  return SITE_TITLE;
};

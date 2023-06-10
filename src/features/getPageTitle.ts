const SITE_TITLE = "My Next Template";

export const getPageTitle = (title?: string): string => {
  if (title) {
    return `${title} - ${SITE_TITLE}`;
  }
  return SITE_TITLE;
};

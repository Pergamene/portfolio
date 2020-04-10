import { makeStyles } from '@material-ui/core/styles';

import { DARK, DARK_PAGE, LIGHT } from './colors';

export const useStyles = makeStyles({
  // GLOBALS
  pageContainer: {
    minHeight: props => props.matchS ? 'calc(100vh - 189px)' : 'calc(100vh - 100px)',
    backgroundColor: props => props.darkMode ? DARK_PAGE : '',
    color: props => props.darkMode ? LIGHT : DARK,
    transition: '1s ease-out',
    transitionProperty: 'background, color',
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1200px',
    margin: '0 auto',
    alignItems: 'center',
  },
  h1: {
    fontSize: props => props.matchL ? '8vw' : '80px',
    fontWeight: '300',
    margin: props => props.matchM ? '8vw 0 0' : '20vh 0 0',
  },

  // NAV BAR
  navBar: {
    borderBottom: props => props.darkMode ? `1px solid ${DARK}` : '1px solid #ddd',
    boxShadow: props => props.darkMode ? 'none' : '0px 2px 15px -8px rgba(0, 0, 0, 0.42)',
    height: props => props.matchS ? '' : '100px',
    backgroundColor: props => props.darkMode ? DARK : LIGHT,
    transition: 'all 1s ease-out',
  },
  navContainer: {
    display: 'flex',
    flexDirection: props => props.matchS ? 'column' : 'row',
    maxWidth: '1200px',
    margin: '0 auto',
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    padding: props => props.matchS ? '10px 0 0 0' : '10px',
    marginTop: props => props.matchS ? '0' : '4px',
    cursor: 'pointer',
  },
  linksContainer: {
    display: 'flex',
    flexDirection: props => props.matchS ? 'column' : 'row',
    height: '100%',
    flex: '1',
    alignItems: props => props.matchS ? 'center' : '',
  },
  toggle: {
    padding: '10px',
  },
  sun: {
    color: LIGHT,
    position: 'relative',
    left: '24px',
    opacity: '0',
    transition: 'opacity 0.3s ease-out',
  },
  moon: {
    color: DARK,
    transform: 'rotate(30deg)',
    position: 'relative',
    opacity: '0',
    transition: 'opacity 0.3s ease-out',
  },
  visible: {
    transition: 'opacity 1s ease-out',
    opacity: '100',
  },

  // NAV ITEM
  linkContainer: {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  activeLink: {
    borderBottom: props => `4px solid ${props.darkMode ? LIGHT : DARK}`,
    paddingTop: props => `${props.matchS ? '0' : '4px'}`,
    transition: 'all 0.3s ease-out, border-color 1s ease-out',
  },
  link: {
    padding: props => props.matches ? '5px' : '20px',
    color: props => props.darkMode ? LIGHT : DARK,
    // borderRight: props => (props.last || props.matches) ? 'none' : `2px solid ${props.darkMode ? LIGHT : DARK }`,
    transition: 'all 1s ease-out',
  },

  // LANDING
  landingP: {
    fontWeight: '500',
    fontSize: props => props.matchL ? '16px' : '18px',
    margin: '0',
    padding: '0 20px',
    textAlign: 'justify',
  },

  // BIO
  profileContainer: {
    display: 'flex',
    flexDirection: props => props.matchM ? 'column' : 'row',
    maxWidth: '100%',
    padding: props => props.matchM ? '8vw 20px 0' : '20vh 20px 0',
    alignItems: 'center',
  },
  profile: {
    display: 'flex',
    borderRight: props => props.matchM ? 'none' : `2px solid ${props.darkMode ? LIGHT : DARK }`,
    paddingRight: props => props.matchM ? '0' : '20px',
    marginRight: props => props.matchM ? '0' : '20px',
    transition: 'border 1s ease-out',
  },
  image: {
    borderRadius: '150px',
  },
  bioH2: {
    fontSize: '36px',
    margin: '0',
    fontWeight: '300',
  },
  bioH3: {
    margin: '0',
    fontWeight: '300',
  },
  bioP: {
    margin: '0 0 10px',
    textAlign: props => props.matchM ? 'center' : 'left',
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: props => props.matchM ? 'center' : 'start',
    width: '80vw',
  },
  mediaLinks: {
    color: 'inherit',
    textDecoration: 'none',
    padding: '0 0 10px 0',
  },
  icons: {
    display: 'flex',
    paddingBottom: props => props.matchM ? '20px' : '0',
    color: 'inherit',
    textDecoration: 'none',
    padding: '0 10px 10px 0',
  },
  icon: {
    padding: '0 8px 10px 0',
  },
  bioButton: {
    color: 'inherit',
    textDecoration: 'none',
    padding: '7px',
    border: props => `2px solid ${props.darkMode ? LIGHT : DARK }`,
    transition: 'border 1s ease-out',
    borderRadius: '20px',
    margin: '0 10px 10px 0',
  },

  // PROJECTS
  projectsH2: {
    fontSize: '36px',
    margin: '20px',
    fontWeight: '300',
  },

  // PROJECT
  projectContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    width: '100%',
    padding: '0 20px 20px',
    marginBottom: '20px',
    boxSizing: 'border-box',
  },
  projectH3: {
    margin: '0',
    fontSize: '28px',
    fontWeight: '300',
  },
  info: {
    display: 'flex',
    margin: '5px 0',
  },
  date: {
    paddingRight: '10px',
    margin: '0',
    borderRight: props => `2px solid ${props.darkMode ? LIGHT : DARK }`,
    transition: 'border 1s ease-out',
  },
  stack: {
    paddingLeft: '10px',
    margin: '0',
  },
  projectLinks: {
    display: 'flex',
    margin: '5px 0',
  },
  projectButton: {
    color: 'inherit',
    textDecoration: 'none',
    padding: '15px',
    border: props => `2px solid ${props.darkMode ? LIGHT : DARK }`,
    transition: 'border 1s ease-out',
    borderRadius: '20px',
    marginLeft: '10px',
  },
  projectLink: {
    width: '127px',
  },
  repo: {
    width: '80px',
  },
  description: {
    margin: '5px 0 0',
  },
  bullets: {
    margin: '0',
  },
});

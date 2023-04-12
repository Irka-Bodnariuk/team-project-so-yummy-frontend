export const baseTheme = {
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fontSizes: {
    xxs: 10,
    xs: 12,
    s: 14,
    sm: 16,
    m: 18,
    l: 20,
    xl: 24,
    authxl: 28,
    xxl: 32,
    sectXl: 44,
    xxxl: 48,
  },

  fontWeights: {
    body: 400,
    subtitle: 500,
    title: 600,
    bold: 700,
  },

  colors: {
    accentColor: '#8BAA36',
    secondaryTextColor: '#FAFAFA',

    button: {
      mainTextColor: '#FAFAFA',
      mainHoverTextColor: '#22252A',
      secondaryHoverText: '#8BAA36',
      primaryBg: '#8BAA36',
      secondaryBg: '#22252A',
      primaryCancelBg: '#D9D9D9',
      secondaryCancelBg: '#FFFFFF',
    },

    form: {
      inputBorder: '#FFFFFF',
      inputError: '#E74A3B',
      inputConfirm: '#3CBC81',
      inputWarning: '#F6C23E',
      formBackground: '#2a2c36',
      formIcon: '#FAFAFA',
    },

    modes: {
      light: {
        background: '#FAFAFA',
        secondaryBg: '#EBF3D4',
        headerText: '#23262A',
        heroText: '#22252A',
        primaryText: '#3E4462',
        heroForm: '#F0F0F0',
        sectionTitle: '#001833',
        footerBg: '#22252A',
        footerText: '#FAFAFA',
        footerBgButton: "#8baa36",
        footerIcons: "#8BAA36",
        therms: '#22252A',
        profileAvatarBg: '#D9D9D9',
        recipieDescMain: '#23262A',
        recipieDescSecondary: '#7E7E7E',
        shoppingItemImageBg: '#ebf3d4',
        notFoundPageText: '#000000',
        backdropColor: 'rgba(255, 255, 255, 0.4)',
      },
      dark: {
        background: '#1E1F28',
        secondaryBg: '#2A2C36',
        headerText: '#FAFAFA',
        heroText: '#FAFAFA',
        primaryText: '#FAFAFA',
        heroForm: 'rgba(250, 250, 250, 0.5)',
        sectionTitle: '#FAFAFA',
        footerBg: '#8BAA36',
        footerText: '#FAFAFA',
        footerBgButton: "#22252A",
        footerIcons: "#FAFAFA",
        therms: '#22252A',
        profileAvatarBg: '#D9D9D9',
        recipieDescMain: 'rgba(250, 250, 250, 0.6)',
        recipieDescSecondary: 'rgba(250, 250, 250, 0.6)',
        shoppingItemImageBg: '#2A2C36',
        notFoundPageText: '#FAFAFA',
        backdropColor: 'rgba(0, 0, 0, 0.5);',
      },
    },
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },

  radii: {
    none: '0',
    nodrmal: '8px',
    round: '50%',
  },

  device: {
    mobile: `(min-width: 375px)`,
    tablet: `(min-width: 768px)`,
    desktop: `(min-width: 1440px)`,
  },
};

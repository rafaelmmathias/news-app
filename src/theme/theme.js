import * as tokens from 'design-tokens';

const theme = {
  borderStyles: {
    'border-style-01': 'solid'
  },
  breakpoints: ['40em', '52em', '64em', '65em'],
  borderWidths: {
    'border-width-none': tokens.BORDER_WIDTH_NONE,
    'border-width-hairline': tokens.BORDER_WIDTH_HAIRLINE,
    'border-width-thin': tokens.BORDER_WIDTH_THIN,
    'border-width-thick': tokens.BORDER_WIDTH_THICK,
    'border-width-heavy': tokens.BORDER_WIDTH_HEAVY
  },
  colors: {
    'color-brand-primary-01': tokens.COLOR_BRAND_PRIMARY_01,
    'color-brand-primary-02': tokens.COLOR_BRAND_PRIMARY_02,
    'color-brand-primary-03': tokens.COLOR_BRAND_PRIMARY_03,
    'color-brand-primary-04': tokens.COLOR_BRAND_PRIMARY_04,
    'color-brand-primary-05': tokens.COLOR_BRAND_PRIMARY_05,
    'color-neutral-01': tokens.COLOR_NEUTRAL_01,
    'color-neutral-02': tokens.COLOR_NEUTRAL_02,
    'color-neutral-03': tokens.COLOR_NEUTRAL_03,
    'color-neutral-04': tokens.COLOR_NEUTRAL_04,
    'color-neutral-05': tokens.COLOR_NEUTRAL_05,
    'color-neutral-06': '#f5f5f5'
  },
  fonts: {
    'font-family-highlight': 'Archivo'
  },
  fontSizes: {
    'font-size-xxxs': tokens.FONT_SIZE_XXXS,
    'font-size-xxs': tokens.FONT_SIZE_XXS,
    'font-size-xs': tokens.FONT_SIZE_XS,
    'font-size-sm': tokens.FONT_SIZE_SM,
    'font-size-md': tokens.FONT_SIZE_MD,
    'font-size-lg': tokens.FONT_SIZE_LG,
    'font-size-xl': tokens.FONT_SIZE_XL,
    'font-size-xxl': tokens.FONT_SIZE_XXL,
    'font-size-xxxl': tokens.FONT_SIZE_XXXL,
    'font-size-display': tokens.FONT_SIZE_DISPLAY,
    'font-size-giant': tokens.FONT_SIZE_GIANT
  },
  fontWeights: {
    'font-weight-bold': tokens.FONT_WEIGHT_BOLD,
    'font-weight-medium': tokens.FONT_WEIGHT_MEDIUM,
    'font-weight-regular': tokens.FONT_WEIGHT_REGULAR
  },
  lineHeights: {
    'line-height-tight': tokens.LINE_HEIGHT_TIGHT,
    'line-height-medium': tokens.LINE_HEIGHT_MEDIUM,
    'line-height-distant': tokens.LINE_HEIGHT_DISTANT,
    'line-height-superdistant': tokens.LINE_HEIGHT_SUPERDISTANT
  },
  radii: {
    'border-radius-none': tokens.BORDER_RADIUS_NONE,
    'border-radius-sm': tokens.BORDER_RADIUS_SM,
    'border-radius-md': tokens.BORDER_RADIUS_MD,
    'border-radius-lg': tokens.BORDER_RADIUS_LG,
    'border-radius-pill': tokens.BORDER_RADIUS_PILL,
    'border-radius-circular': tokens.BORDER_RADIUS_CIRCULAR
  },
  sizes: {
    'size-general-full': '100%',
    'size-general-sm': '200px',
    'size-general-md': '350px',
    'size-general-lg': '600px'
  },
  shadows: {
    'shadow-level-01-x': tokens.SHADOW_LEVEL_1_X,
    'shadow-level-01-y': tokens.SHADOW_LEVEL_1_Y,
    'shadow-level-01-b': tokens.SHADOW_LEVEL_1_B,
    'shadow-level-01-stack': tokens.SHADOW_LEVEL_1_STACK,
    'shadow-level-02-x': tokens.SHADOW_LEVEL_2_X,
    'shadow-level-02-y': tokens.SHADOW_LEVEL_2_Y,
    'shadow-level-02-b': tokens.SHADOW_LEVEL_2_B,
    'shadow-level-02-stack': tokens.SHADOW_LEVEL_2_STACK,
    'shadow-level-03-x': tokens.SHADOW_LEVEL_3_X,
    'shadow-level-03-y': tokens.SHADOW_LEVEL_3_Y,
    'shadow-level-03-b': tokens.SHADOW_LEVEL_3_B,
    'shadow-level-03-stack': tokens.SHADOW_LEVEL_3_STACK,
    'shadow-level-04-x': tokens.SHADOW_LEVEL_4_X,
    'shadow-level-04-y': tokens.SHADOW_LEVEL_4_Y,
    'shadow-level-04-b': tokens.SHADOW_LEVEL_4_B,
    'shadow-level-04-stack': tokens.SHADOW_LEVEL_4_STACK
  },
  space: {
    'spacing-stack-quarck': tokens.SPACING_STACK_QUARCK,
    'spacing-stack-nano': tokens.SPACING_STACK_NANO,
    'spacing-stack-xxxs': tokens.SPACING_STACK_XXXS,
    'spacing-stack-xxs': tokens.SPACING_STACK_XXS,
    'spacing-stack-xs': tokens.SPACING_STACK_XS,
    'spacing-stack-sm': tokens.SPACING_STACK_SM,
    'spacing-stack-md': tokens.SPACING_STACK_MD,
    'spacing-stack-lg': tokens.SPACING_STACK_LG,
    'spacing-stack-xl': tokens.SPACING_STACK_XL,
    'spacing-stack-xxl': tokens.SPACING_STACK_XXL,
    'spacing-stack-xxxl': tokens.SPACING_STACK_XXXL,
    'spacing-stack-huge': tokens.SPACING_STACK_HUGE,
    'spacing-stack-giant': tokens.SPACING_STACK_GIANT,

    'spacing-inset-quarck': tokens.SPACING_INSET_QUARCK,
    'spacing-inset-nano': tokens.SPACING_INSET_NANO,
    'spacing-inset-xs': tokens.SPACING_INSET_XS,
    'spacing-inset-sm': tokens.SPACING_INSET_SM,
    'spacing-inset-md': tokens.SPACING_INSET_MD,
    'spacing-inset-lg': tokens.SPACING_INSET_LG,

    'spacing-squish-quarck-v': tokens.SPACING_SQUISH_QUARCK_V,
    'spacing-squish-quarck-h': tokens.SPACING_SQUISH_QUARCK_H,
    'spacing-squish-quarck': tokens.SPACING_SQUISH_QUARCK_STACK,
    'spacing-squish-nano-v': tokens.SPACING_SQUISH_NANO_V,
    'spacing-squish-nano-h': tokens.SPACING_SQUISH_NANO_H,
    'spacing-squish-nano': tokens.SPACING_SQUISH_NANO_STACK,
    'spacing-squish-xs-v': tokens.SPACING_SQUISH_XS_V,
    'spacing-squish-xs-h': tokens.SPACING_SQUISH_XS_H,
    'spacing-squish-xs': tokens.SPACING_SQUISH_XS_STACK,
    'spacing-squish-sm-v': tokens.SPACING_SQUISH_SM_V,
    'spacing-squish-sm-h': tokens.SPACING_SQUISH_SM_H,
    'spacing-squish-sm': tokens.SPACING_SQUISH_SM_STACK,

    'spacing-inline-quarck': tokens.SPACING_INLINE_QUARCK,
    'spacing-inline-nano': tokens.SPACING_INLINE_NANO,
    'spacing-inline-xxxs': tokens.SPACING_INLINE_XXXS,
    'spacing-inline-xxs': tokens.SPACING_INLINE_XXS,
    'spacing-inline-xs': tokens.SPACING_INLINE_XS,
    'spacing-inline-sm': tokens.SPACING_INLINE_SM,
    'spacing-inline-md': tokens.SPACING_INLINE_MD,
    'spacing-inline-lg': tokens.SPACING_INLINE_LG,
    'spacing-inline-xl': tokens.SPACING_INLINE_XL
  }
};

export default theme;

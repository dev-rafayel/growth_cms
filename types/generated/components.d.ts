import type { Schema, Struct } from '@strapi/strapi';

export interface LandingPageAuctionRow extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_auction_rows';
  info: {
    displayName: 'Auction Row';
  };
  attributes: {
    limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<8>;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    source: Schema.Attribute.Enumeration<['ending_soon', 'newest']>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingPageCategoryGrid extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_category_grids';
  info: {
    displayName: 'Category Grid';
  };
  attributes: {
    limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<6>;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingPageCtaBand extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_cta_bands';
  info: {
    displayName: 'Cta Band';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingPageFaq extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    items: Schema.Attribute.Component<'landing-page.faq-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingPageFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_faq_items';
  info: {
    displayName: 'Faq item';
  };
  attributes: {
    answer: Schema.Attribute.String & Schema.Attribute.Required;
    question: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LandingPageHero extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'landing-page.auction-row': LandingPageAuctionRow;
      'landing-page.category-grid': LandingPageCategoryGrid;
      'landing-page.cta-band': LandingPageCtaBand;
      'landing-page.faq': LandingPageFaq;
      'landing-page.faq-item': LandingPageFaqItem;
      'landing-page.hero': LandingPageHero;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}

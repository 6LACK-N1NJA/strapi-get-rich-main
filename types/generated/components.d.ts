import type { Schema, Attribute } from '@strapi/strapi';

export interface ComparisonComponentsFilterConfig extends Schema.Component {
  collectionName: 'components_comparison_components_filter_configs';
  info: {
    displayName: 'filterConfig';
  };
  attributes: {
    title: Attribute.String;
    filterFieldName: Attribute.String;
  };
}

export interface ComparisonComponentsRankConfig extends Schema.Component {
  collectionName: 'components_comparison_components_rank_configs';
  info: {
    displayName: 'RankConfig';
  };
  attributes: {
    rankedFieldName: Attribute.String;
    tiltle: Attribute.String;
    rankingRule: Attribute.Enumeration<['asc, desc']>;
  };
}

export interface ComparisonComponentsSelectedFilters extends Schema.Component {
  collectionName: 'components_comparison_components_selected_filters';
  info: {
    displayName: 'SelectedFilters';
  };
  attributes: {
    fieldName: Attribute.String;
    selectedValues: Attribute.Component<'shared.field-name', true>;
  };
}

export interface SharedFieldName extends Schema.Component {
  collectionName: 'components_shared_field_names';
  info: {
    displayName: 'fieldName';
  };
  attributes: {
    fieldName: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'comparison-components.filter-config': ComparisonComponentsFilterConfig;
      'comparison-components.rank-config': ComparisonComponentsRankConfig;
      'comparison-components.selected-filters': ComparisonComponentsSelectedFilters;
      'shared.field-name': SharedFieldName;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}

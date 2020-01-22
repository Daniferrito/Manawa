import React from 'react';
import {
  withTranslation,
  Trans,
  Translation,
  I18nextProvider,
  initReactI18next,
  setDefaults,
  getDefaults,
  setI18n,
  getI18n,
} from 'react-i18next';
import { TFunction } from 'i18next';

const staticTranslation = (k: TFunction) => k;

const useMock = [staticTranslation, {}];
(useMock as any).t = staticTranslation;
(useMock as any).i18n = {};

module.exports = {
  useTranslation: () => useMock,

  // mock if needed
  withTranslation,
  Trans,
  Translation,
  I18nextProvider,
  initReactI18next,
  setDefaults,
  getDefaults,
  setI18n,
  getI18n,
};

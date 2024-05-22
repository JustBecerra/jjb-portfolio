'use client';
import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { TechnologiesCards } from '../TechnologiesCards';
import { useTranslations } from 'next-intl';
import { TechnologiesList } from '@/misc';
import PortfolioContext from '@/context/provider';

export default function Technologies() {
  const { technologiesRef } = useContext(PortfolioContext);
  const t = useTranslations('technologies');
  const frontendTechnologies = TechnologiesList.filter((tech) => tech.area === 'frontend');
  const backendTechnologies = TechnologiesList.filter((tech) => tech.area === 'backend');
  return (
    <Box
      sx={{
        width: '80%',
        height: '40%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        my: '12rem',
      }}
      ref={technologiesRef}
    >
      <TechnologiesCards technologies={frontendTechnologies} title={t('frontendtech')} />
      <TechnologiesCards technologies={backendTechnologies} title={t('backendtech')} />
    </Box>
  );
}

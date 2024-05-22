'use client';
import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Button, Drawer, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Toolbar } from '@mui/material';
import Image from 'next/image';
import britishflag from '../../../public/britishflag.png';
import spanishflag from '../../../public/spanishflag.png';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import PortfolioContext from '@/context/provider';

export const Navbar = () => {
  const { informationRef, technologiesRef, projectsRef, contactRef } = useContext(PortfolioContext);
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [isMounted, setIsMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const currentLocale = useLocale();
  const toggleDrawer = (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }

    setOpen(inOpen);
  };

  const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  React.useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const t = useTranslations('navbar');
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    router.replace(event.target.value);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'transparent' }}>
      <Toolbar disableGutters>
        {windowWidth > 1000 ? (
          <Box
            sx={{
              ml: '3%',
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              gapX: '2rem',
              alignItems: 'center',
            }}
          >
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel
                sx={{
                  color: 'white',
                  '&.Mui-focused': {
                    color: 'white !important',
                  },
                }}
              >
                {t('language')}
              </InputLabel>
              <Select
                onChange={handleChange}
                value={currentLocale}
                label="Language"
                sx={{
                  '&& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  color: 'white',
                }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="es">Español</MenuItem>
              </Select>
            </FormControl>
            <Image src={currentLocale === 'en' ? britishflag : spanishflag} alt="" width={38} height={30} />
            <Button
              sx={{
                color: 'white',
                fontWeight: 'normal',
                textTransform: 'none',
              }}
              onClick={() => scrollToComponent(informationRef)}
            >
              {t('homenavbar')}
            </Button>
            <Button
              sx={{
                color: 'white',
                fontWeight: 'normal',
                textTransform: 'none',
              }}
              onClick={() => scrollToComponent(technologiesRef)}
            >
              {t('technologiesnavbar')}
            </Button>
            <Button
              sx={{
                color: 'white',
                fontWeight: 'normal',
                textTransform: 'none',
              }}
              onClick={() => scrollToComponent(projectsRef)}
            >
              {t('projectsnavbar')}
            </Button>
            <Button
              sx={{
                color: 'white',
                fontWeight: 'normal',
                textTransform: 'none',
              }}
              onClick={() => scrollToComponent(contactRef)}
            >
              {t('contactnavbar')}
            </Button>
          </Box>
        ) : (
          isMounted && (
            <>
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'black',
                    height: '100%',
                    gap: '1rem',
                  }}
                >
                  <Select
                    onChange={handleChange}
                    value={currentLocale}
                    label="Language"
                    sx={{
                      '&& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                      },
                      color: 'white',
                    }}
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Español</MenuItem>
                  </Select>
                  <Button
                    sx={{
                      color: 'white',
                      fontWeight: 'normal',
                      textTransform: 'none',
                    }}
                    onClick={() => scrollToComponent(informationRef)}
                  >
                    {t('homenavbar')}
                  </Button>
                  <Button
                    sx={{
                      color: 'white',
                      fontWeight: 'normal',
                      textTransform: 'none',
                    }}
                    onClick={() => scrollToComponent(technologiesRef)}
                  >
                    {t('technologiesnavbar')}
                  </Button>
                  <Button
                    sx={{
                      color: 'white',
                      fontWeight: 'normal',
                      textTransform: 'none',
                    }}
                    onClick={() => scrollToComponent(projectsRef)}
                  >
                    {t('projectsnavbar')}
                  </Button>
                  <Button
                    sx={{
                      color: 'white',
                      fontWeight: 'normal',
                      textTransform: 'none',
                    }}
                    onClick={() => scrollToComponent(contactRef)}
                  >
                    {t('contactnavbar')}
                  </Button>
                </Box>
              </Drawer>
            </>
          )
        )}
      </Toolbar>
    </AppBar>
  );
};

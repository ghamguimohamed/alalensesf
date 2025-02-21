import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Map, Clock } from 'lucide-react';

type Category = 'landscapes' | 'morocco' | 'animals' | 'sports' | 'art';

interface ImageMetadata {
  camera: string;
  lens: string;
  aperture: string;
  shutterSpeed: string;
  iso: string;
  location: string;
  date: string;
}

interface GalleryImage {
  id: number;
  url: string;
  category: Category;
  alt: string;
  metadata: ImageMetadata;
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'landscapes', label: 'Landscapes' },
  { id: 'morocco', label: 'Morocco' },
  { id: 'animals', label: 'Animals' },
  { id: 'sports', label: 'Sports' },
  { id: 'art', label: 'Art' }
];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
   {
    id: 1,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-005236.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDA1MjM2LnBuZyIsImlhdCI6MTc0MDEwNDAzNiwiZXhwIjo0ODkzNzA0MDM2fQ.FP-j2-e0oMa743-g3xZ8WarrHKV5V8IIDT7dFgozQDU',
    category: 'art',
    alt: 'cit1',
    metadata: {
      camera: 'alalenses',
      lens: 'Semblant dEcrivaine',
      aperture: '_',
      shutterSpeed: '_',
      iso: '',
      location: '',
      date: '2024-07-08'
    }
  },
  {
    id: 2,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-005341.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDA1MzQxLnBuZyIsImlhdCI6MTc0MDEwNDE2MywiZXhwIjo0ODkzNzA0MTYzfQ.RUqUdcmzpitfG8blTZDezVyIB80UN3Pqc7llAI1hqWo',
    category: 'morocco',
    alt: 'Moroccan street market',
    metadata: {
      camera: 'alalenses',
      lens: 'Semblant decrivaine',
      aperture: '_',
      shutterSpeed: '_',
      iso: '',
      location: '',
      date: '2024-07-08'
    }
  },
  {
    id: 3,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-005454.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDA1NDU0LnBuZyIsImlhdCI6MTc0MDEwNDIyNiwiZXhwIjo0ODkzNzA0MjI2fQ.PeMnaAo6kit2Rd3hg0w_z1oRZy2eb87EXlVkpyBgM3c',
    category: 'landscapes',
    alt: 'ISO 100',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5',
      aperture: 'f/5.6',
      shutterSpeed: '1/200',
      iso: '100',
      location: '',
      date: '2024-07-08'
    }
  },
  {
    id: 4,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-005544.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDA1NTQ0LnBuZyIsImlhdCI6MTc0MDEwNDM1NiwiZXhwIjo0ODkzNzA0MzU2fQ.02ODI9iHsvedOAuN5-aCn0A3RLLYsU2CMj78E5GnwBQ',
    category: 'sports',
    alt: 'ISO 400',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.6',
      aperture: 'f/5.6',
      shutterSpeed: '1/200',
      iso: '400',
      location: '',
      date: '2024-08-08'
    }
  },
  {
    id: 5,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-005623.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDA1NjIzLnBuZyIsImlhdCI6MTc0MDEwNDQ3MywiZXhwIjo0ODkzNzA0NDczfQ.OkLUJ7QRSVculwP68ny0Zns1EdNWY-w8DIlqCUzTjig',
    category: 'animals',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.6',
      aperture: 'f/5.6',
      shutterSpeed: '1/200',
      iso: '400',
      location: '',
      date: '2024-08-08'
    }
  },
  {
    id: 6,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-005727.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDA1NzI3LnBuZyIsImlhdCI6MTc0MDEwNDUzNSwiZXhwIjo0ODkzNzA0NTM1fQ.H7bD9q7AaKdOGsBiCAJ2iCmXNTWSU1Q4RktwaHrpzKs',
    category: 'morocco',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/8.0',
      aperture: 'f/8.0',
      shutterSpeed: '1/125',
      iso: '800',
      location: '',
      date: '2024-08-08'
    }
  },
  {
    id: 7,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-005819.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDA1ODE5LnBuZyIsImlhdCI6MTc0MDEwNDYxNCwiZXhwIjo0ODkzNzA0NjE0fQ.KA5XaNTDGjvHH_DGivNjLpPYsujl4oHAeKaqloA-3dI',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.6',
      aperture: 'f/5.6',
      shutterSpeed: '1/200',
      iso: '100',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 8,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-005847.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDA1ODQ3LnBuZyIsImlhdCI6MTc0MDEwNDcyMSwiZXhwIjo0ODkzNzA0NzIxfQ.Rw8L1Q9KJxVhXz36B8hBHVER8IWYtTNlydRt9mhKxPk',
    category: 'morocco',
    alt: 'Palms',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/4.6',
      aperture: 'f/4.6',
      shutterSpeed: '1/200',
      iso: '200',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 9,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-005915.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDA1OTE1LnBuZyIsImlhdCI6MTc0MDEwNDgzMiwiZXhwIjo0ODkzNzA0ODMyfQ.cEECb1DqE0hy24YavOGwt_q4KAj85WVeW6wymF5XWak',
    category: 'morocco',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/4.6',
      aperture: 'f/4.6',
      shutterSpeed: '1/200',
      iso: '200',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 10,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-005938.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDA1OTM4LnBuZyIsImlhdCI6MTc0MDEwNDkwNCwiZXhwIjo0ODkzNzA0OTA0fQ.0ncaIDoPxE5boXpjFLeGfIm3pcbZKnJlBVXMmvZtS7k',
    category: 'morocco',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/4.6',
      aperture: 'f/4.6',
      shutterSpeed: '1/200',
      iso: '200',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 11,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010015.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwMDE1LnBuZyIsImlhdCI6MTc0MDEwNDk0NiwiZXhwIjo0ODkzNzA0OTQ2fQ.BtJFgaPQ-BtjDLNDtVROMYGgyp1TETYksfwv2uWhVRE',
    category: 'morocco',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.6',
      aperture: 'f/5.6',
      shutterSpeed: '1/200',
      iso: '100',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 12,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010046.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwMDQ2LnBuZyIsImlhdCI6MTc0MDEwNTEwOSwiZXhwIjo0ODkzNzA1MTA5fQ.rbja8C80IKk48-v22tKunjX_VK3NH7do9adsbm3Z-8c',
    category: 'morocco',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.0',
      aperture: 'f/5.0',
      shutterSpeed: '1/200',
      iso: '800',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 13,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010111.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwMTExLnBuZyIsImlhdCI6MTc0MDEwNTE0NywiZXhwIjo0ODkzNzA1MTQ3fQ.NfYBjCfZeYlSSDuyVmTNN_sjVuRNoaIeN3NkDAWX7Bg',
    category: 'morocco',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.6',
      aperture: 'f/5.6',
      shutterSpeed: '1/125',
      iso: '200',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 14,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010136.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwMTM2LnBuZyIsImlhdCI6MTc0MDEwNTE4MSwiZXhwIjo0ODkzNzA1MTgxfQ.4MpBx24qkyfbqacQKhmTXsSCFKl8zbHwJXNvapR8UHY',
    category: 'morocco',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.0',
      aperture: 'f/5.0',
      shutterSpeed: '1/800',
      iso: '100',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 15,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010159.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwMTU5LnBuZyIsImlhdCI6MTc0MDEwNTIyMywiZXhwIjo0ODkzNzA1MjIzfQ.cIpE4MC0PgOSqbGjLg4XPZO0O_POKP8EQvk-De6F3tE',
    category: 'morocco',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.6',
      aperture: 'f/5.6',
      shutterSpeed: '1/200',
      iso: '100',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 16,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010219.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwMjE5LnBuZyIsImlhdCI6MTc0MDEwNTI1MiwiZXhwIjo0ODkzNzA1MjUyfQ.EWtB9oaASM3PomVlCn7mefzMDlejLfS_Lt1ZBPL3_lA',
    category: 'animals',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/4.6',
      aperture: 'f/4.6',
      shutterSpeed: '1/200',
      iso: '200',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 17,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010248.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwMjQ4LnBuZyIsImlhdCI6MTc0MDEwNTI4OSwiZXhwIjo0ODkzNzA1Mjg5fQ.cnBosnpvSwS969CfQnZ1XiHF9-da6aVmdYyvGSpNtUI',
    category: 'landscapes',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.6',
      aperture: 'f/5.6',
      shutterSpeed: '1/640',
      iso: '200',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 18,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010310.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwMzEwLnBuZyIsImlhdCI6MTc0MDEwNTMyOCwiZXhwIjo0ODkzNzA1MzI4fQ.t3-zaHfIQWeLGtfLSB5XO5yF8K_x3-jBcI8ypuGs3Cs',
    category: 'animals',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.6',
      aperture: 'f/5.6',
      shutterSpeed: '1/640',
      iso: '100',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 19,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010338.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwMzM4LnBuZyIsImlhdCI6MTc0MDEwNTM2MCwiZXhwIjo0ODkzNzA1MzYwfQ.NRlWE4e5G5dPItE90FllHUFkY7zyWP2feXEa1iCF_0Q',
    category: 'landscapes',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.6',
      aperture: 'f/5.6',
      shutterSpeed: '1/640',
      iso: '200',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 20,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010406.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwNDA2LnBuZyIsImlhdCI6MTc0MDEwNTM5NywiZXhwIjoyNDY3NjM2Nzc5N30.zsYXEI268Ss8jXr4VCPtOuEPTaukolGnFncLaWRM6jA',
    category: 'landscapes',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/4.6',
      aperture: 'f/4.6',
      shutterSpeed: '1/200',
      iso: '200',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 21,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010438.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwNDM4LnBuZyIsImlhdCI6MTc0MDEwNTQyOSwiZXhwIjo2MjQ1MTc0MjI5fQ.vUJkhcW35XvXItnLEVdz4oA9RwswCcji33SgX72XP_I',
    category: 'landscapes',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.6',
      aperture: 'f/5.6',
      shutterSpeed: '1/320',
      iso: '100',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 23,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010528.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwNTI4LnBuZyIsImlhdCI6MTc0MDEwNTU2NCwiZXhwIjo2NDQ1MDE3NTY0fQ.DZXoBSQLPNSPMekobjhZPAr25HJo8JV6y6sYn6GzkCg',
    category: 'landscapes',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.0',
      aperture: 'f/5.0',
      shutterSpeed: '1/500',
      iso: '100',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 24,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010558.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwNTU4LnBuZyIsImlhdCI6MTc0MDEwNTU4MywiZXhwIjoxMTk1MTU0ODc4M30.r1vV973zNvHSJHSd5wMfa4Hej84kYNxtjT7sDPe-5wE',
    category: 'landscapes',
    alt: '',
    metadata: {
      camera: 'Iphone 14',
      lens: 'f/4.6',
      aperture: 'f/4.6',
      shutterSpeed: '1/200',
      iso: '200',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 25,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010623.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwNjIzLnBuZyIsImlhdCI6MTc0MDEwNTYwMCwiZXhwIjo0MDk1ODAxNjAwfQ.0Nuv9_zS8OGr5EtJQKy3Bu67F6hcxflLYH6VWuK3Too',
    category: 'landscapes',
    alt: '',
    metadata: {
      camera: 'Iphone 14',
      lens: 'f/4.6',
      aperture: 'f/4.6',
      shutterSpeed: '1/200',
      iso: '200',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 26,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010654.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwNjU0LnBuZyIsImlhdCI6MTc0MDEwNTYxOSwiZXhwIjoyNTk3OTM5MjMyMTl9.pN7RpxLqJIj9lacVdsIup1rXzL0mBVmz-M5swtA74qM',
    category: 'landscapes',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/8.0',
      aperture: 'f/8.0',
      shutterSpeed: '1/250',
      iso: '100',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 27,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010731.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwNzMxLnBuZyIsImlhdCI6MTc0MDEwNTYzOCwiZXhwIjo5MDQ4MjQ5NjM4fQ.GZphBU1wBm8lmk5TZB3F3OPAHDkfmz9nI1Vo8W8aopM',
    category: 'landscapes',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/4.6',
      aperture: 'f/4.6',
      shutterSpeed: '1/200',
      iso: '200',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 28,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010757.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwNzU3LnBuZyIsImlhdCI6MTc0MDEwNTY1OCwiZXhwIjo4MjA3NDkxMjU4fQ.2z7nQd9bUaqA5Kin9dqJ6yLT8kKgWau4xyC4Nx4Ax6k',
    category: 'landscapes',
    alt: '',
    metadata: {
      camera: 'IPHONE 14',
      lens: '',
      aperture: '',
      shutterSpeed: '1/500',
      iso: '100',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 29,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010815.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwODE1LnBuZyIsImlhdCI6MTc0MDEwNTY4MCwiZXhwIjo1OTM0MDQ4MDgwfQ.vU-ugII7vj8VQ41ZDycaX88EgJuh9tQxaArYkSI00UQ',
    category: 'animals',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.6',
      aperture: 'f/5.6',
      shutterSpeed: '1/200',
      iso: '100',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 30,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-010905.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDEwOTA1LnBuZyIsImlhdCI6MTc0MDEwNTcwMSwiZXhwIjo4NDY2NjkxMzAxfQ.GPbFs3bSW2KHMs-wq0N0cyUHywJWQgVuW4frEiYWgts',
    category: 'sports',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5',
      aperture: 'f/5',
      shutterSpeed: '1/500',
      iso: '5000',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 31,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-011006.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDExMDA2LnBuZyIsImlhdCI6MTc0MDEwNTcyNCwiZXhwIjo5MDQ2NjA4MTI0fQ.EESm7jDef9QJRfxXIVwJ9zj-KR12NPxkyzrY-UuyeK0',
    category: 'sports',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.6',
      aperture: 'f/5.6',
      shutterSpeed: '1/200',
      iso: '500',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 32,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-011033.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDExMDMzLnBuZyIsImlhdCI6MTc0MDEwNTc0NywiZXhwIjo5MDQ0NzkzNzQ3fQ.AQMmqHDj1yc59_-SRE7F5BHYMPwGbd2cduFAbmwu9lE',
    category: 'landscapes',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.6',
      aperture: 'f/5.6',
      shutterSpeed: '1/200',
      iso: '100',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 33,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-011102.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDExMTAyLnBuZyIsImlhdCI6MTc0MDEwNTc2NSwiZXhwIjo5MDU0Mjk3NzY1fQ.azYdK0PXfcvY4IgFYKDPnrfCfWDGUp4rt8Pwi31-jnw',
    category: 'landscapes',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/5.0',
      aperture: 'f/5.0',
      shutterSpeed: '1/100',
      iso: '800',
      location: 'UM6P',
      date: '2024-08-08'
    }
  },
   {
    id: 34,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-011133.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDExMTMzLnBuZyIsImlhdCI6MTc0MDEwNTc4MSwiZXhwIjo4MjA2NzEzNzgxfQ.V6sjA9XOgonV-RW0H8RqlZO6T62hO-CejU5xRMO8jGU',
    category: 'art',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/4.6',
      aperture: 'f/4.6',
      shutterSpeed: '1/200',
      iso: '200',
      location: 'Morocco',
      date: '2024-08-08'
    }
  },
   {
    id: 35,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-011209.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDExMjA5LnBuZyIsImlhdCI6MTc0MDEwNTgwMCwiZXhwIjo5MzA0MDgwMjAwfQ.YrM6ikDzw8XHOD7P11eXJyJsEtgzSQJ97AH7Gga-zyM',
    category: 'landscapes',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/4.0',
      aperture: 'f/4.0',
      shutterSpeed: '1/80',
      iso: '640',
      location: 'Morocco, Oukaimden',
      date: '2024-08-08'
    }
  },
   {
    id: 36,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-011307.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDExMzA3LnBuZyIsImlhdCI6MTc0MDEwNTgxNiwiZXhwIjo5NDIwMDI5MDE2fQ.KGLYviKXDs319RcDsgnccZsFLER8aSBHmD21mvkLkpU',
    category: 'landscapes',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/4.6',
      aperture: 'f/4.6',
      shutterSpeed: '1/200',
      iso: '200',
      location: 'Morocco,Oukaimden',
      date: '2024-08-08'
    }
  },
   {
    id: 37,
    url: 'https://vmawxhpkyeqskpzzvaiz.supabase.co/storage/v1/object/sign/gallery/gallery/capture-d-ecran-2025-02-21-011333.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2dhbGxlcnkvY2FwdHVyZS1kLWVjcmFuLTIwMjUtMDItMjEtMDExMzMzLnBuZyIsImlhdCI6MTc0MDEwNTgzOCwiZXhwIjo5MzMwMDAwMjM4fQ.rFC3Krgw050GD_7kw5zt5MiEIei2T7jAVg8Iz6LZExw',
    category: 'landscapes',
    alt: '',
    metadata: {
      camera: 'Canon EOS 250D',
      lens: 'f/4.0',
      aperture: 'f/4.0',
      shutterSpeed: '1/60',
      iso: '400',
      location: 'Morocco,Ourika',
      date: '2024-08-08'
    }
  }
];


  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          Gallery
        </motion.h1>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map(image => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-semibold mb-1">{image.metadata.camera}</p>
                  <p className="text-xs">{image.metadata.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;

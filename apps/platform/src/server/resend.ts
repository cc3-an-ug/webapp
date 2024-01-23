import { Resend } from 'resend';

import { ResendConfig } from '@/config/resend';

export const resend = new Resend(ResendConfig.key);

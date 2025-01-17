import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG } from '../utils/constants';

export const supabase = createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.KEY);

import { createClient } from '@supabase/supabase-js';
const URL = 'Your URL Here';
const API_KEY = 'Your API Key Here';
export const supabase = createClient(URL, API_KEY);
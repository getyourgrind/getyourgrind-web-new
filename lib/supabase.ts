
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kqwbqdknrsexkawsiggf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtxd2JxZGtucnNleGthd3NpZ2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2Nzk5OTEsImV4cCI6MjA4MDI1NTk5MX0.fvhf7u6Y5sR8DQPd0KhzRF3Qa9S4n0K5ywSv2zuYvZk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

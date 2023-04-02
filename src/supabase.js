import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bmszcufyewgdfcewoeai.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtc3pjdWZ5ZXdnZGZjZXdvZWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAzODgzNTMsImV4cCI6MTk5NTk2NDM1M30.-GcMG_KM7qPktuR--gWqAQqJyLkdSPftJXnNFUg1uoY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

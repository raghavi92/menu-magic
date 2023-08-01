import { SupabaseClient, createClient } from "@supabase/supabase-js";

const supabase  = () => {
    return createClient("https://dlixdnamwuncjfceowuu.supabase.co", process.env.SUPABASE_KEY);
};


export default supabase;
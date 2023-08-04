import { SupabaseClient, createClient } from "@supabase/supabase-js";

const supabase  = () => {
    return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_KEY);
};


export default supabase;
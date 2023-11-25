import { createClient } from "@supabase/supabase-js";

export default function supabaseHandler(req, res) {
    if (res.database) {
        console.log("Supabase instance is already running");
    } else {
        console.log("Supabase instance is initializing");
        const supabase = createClient(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_ANON_KEY
        );
res
    }
    res.end();
}


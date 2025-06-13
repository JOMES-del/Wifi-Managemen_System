import { createClient } from '@supabase/supabase-js'

// Get environment variables with fallbacks for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://example.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

// Check if we have valid configuration
if (!supabaseUrl || supabaseUrl === 'your_supabase_project_url') {
  console.error('Missing or invalid VITE_SUPABASE_URL. Please set it in your .env file.')
}

if (!supabaseAnonKey || supabaseAnonKey === 'your_supabase_anon_key') {
  console.error('Missing or invalid VITE_SUPABASE_ANON_KEY. Please set it in your .env file.')
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  users: {
    id: string
    full_name: string
    phone_number: string
    email: string
    created_at: string
    updated_at: string
  }
  data_plans: {
    id: string
    name: string
    duration_hours: number
    price_ksh: number
    description: string
    is_active: boolean
    created_at: string
  }
  user_sessions: {
    id: string
    user_id: string
    plan_id: string
    mac_address: string
    ip_address: string
    start_time: string
    end_time: string
    is_active: boolean
    created_at: string
  }
  payments: {
    id: string
    user_id: string
    session_id: string
    amount_ksh: number
    mpesa_transaction_id: string
    phone_number: string
    status: 'pending' | 'completed' | 'failed'
    created_at: string
    updated_at: string
  }
}

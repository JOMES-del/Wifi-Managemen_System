# WiFi Management System

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Wifi-Managemen_System
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Environment Configuration

Copy the `.env.example` file to create a new `.env` file:
```bash
cp .env.example .env
```

Then edit the `.env` file and replace the placeholder values with your actual credentials:

#### Supabase Configuration
You need to set up a Supabase project and add your credentials to the `.env` file:
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

You can find these values in your Supabase project dashboard under Project Settings > API.

#### M-Pesa Configuration (if applicable)
If you're using M-Pesa integration, update the following:
- `MPESA_CONSUMER_KEY`
- `MPESA_CONSUMER_SECRET`
- `MPESA_BUSINESS_SHORT_CODE`
- `MPESA_PASSKEY`
- `MPESA_CALLBACK_URL`

#### Router Configuration
Update the router credentials:
- `ROUTER_IP`
- `ROUTER_USERNAME`
- `ROUTER_PASSWORD`

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

## Troubleshooting

### "supabaseUrl is required" Error
If you see this error, it means your Supabase credentials are not properly configured. Make sure:
1. You have a `.env` file in the project root
2. The `.env` file contains valid `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` values
3. The values are not the placeholder values from the example file

## License
[Add license information here]
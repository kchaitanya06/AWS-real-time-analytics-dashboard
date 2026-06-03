
# Cloud-Based Data Analytics Dashboard Architecture

┌─────────────────────┐
│     React Frontend  │
│  Dashboard & Charts │
└──────────┬──────────┘
           │ Axios API Calls
           ▼
┌─────────────────────┐
│  Express Backend    │
│   REST APIs         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Controllers Layer   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Data Layer          │
│ Mock Analytics Data │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Future AWS Services │
├─────────────────────┤
│ AWS Kinesis         │
│ AWS Lambda          │
│ Amazon Redshift     │
└─────────────────────┘
# Dr. You - A Health Care Center

## Overview
This project is like having a doctor by your side 24/7 for quick checkups. I developed a web application using machine learning powered flask backend and next frontend to take symptoms as input and delivers recommendations based on sophisticated model predictions. After testing various models for accuracy like RandomForest, GradientBoosting, KNeighbors, and MultinomialNB, I chose to train the final model using SVC. The system integrates diverse datasets covering medicines, diets, exercises, and disease descriptions to offer comprehensive recommendations tailored to predicted ailments. It’s better than Google telling you that you have cancer for a minor cough.

## Technologies Used
- **Frontend**: Next.js for a responsive user interface deployed on Vercel.
- **Backend**: Flask for API endpoints, hosted externally.
- **Machine Learning**: Support Vector Machine (SVM) model trained on a medical dataset for accurate predictions.

## Features
- **Disease Prediction**: Predicts possible diseases from symptoms entered by the user.
- **Comprehensive Recommendations**: Provides relevant medications, dietary suggestions, precautions, and workout tips.
- **Error Handling**: Improved error feedback for cases where symptoms are invalid or missing.
- **Modern UI**: A clean, user-friendly Next.js interface with modals for displaying detailed recommendations.
- **Real-Time Communication**: Deployed backend accessible via environment-configured API endpoints.

## Usage
1. **Enter Symptoms**: Type in symptoms separated by commas (e.g., "itching, cough").
2. **Get Prediction**: Click on "Predict" to receive a possible disease diagnosis along with additional recommendations.
3. **View Details**: Use buttons to open modals with more information on the predicted disease, medications, precautions, workouts, and diets.

## Development Setup
1. Clone this repository.
2. **Backend Setup**:
   - Install Python dependencies:
     ```bash
     pip install -r requirements.txt
     ```
3. **Frontend Setup**:
   - Install Node.js dependencies:
     ```bash
     npm install
     ```
   - Run the Next.js frontend locally:
     ```bash
     npm run dev
     ```

## Deployment
1. **Backend**: Deploy the Flask API on a platform like Render, Railway, or Heroku.
2. **Frontend**: Deploy the Next.js app on Vercel. Vercel will automatically load `.env.local` configurations.


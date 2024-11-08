## Overview
This project is like having a doctor by your side 24/7 for quick checkups. I developed a web application using machine learning powered flask backend and next frontend to take symptoms as input and delivers recommendations based on sophisticated model predictions. The system integrates diverse datasets covering medicines, diets, exercises, and disease descriptions to offer comprehensive recommendations tailored to predicted ailments. It’s better than Google telling you that you have cancer for a minor cough.


You can view the website [here](https://dr-you.vercel.app/).Please note that the api is deployed on the free tier in Render which delays requests by 50 seconds,so feel free to spam click on that predict button.All good things take time xd or you can always see the demo below.


## Demo
![image](https://github.com/user-attachments/assets/982f482f-8c45-4cc8-9cb4-0bf9794eb18c)

![image](https://github.com/user-attachments/assets/30b983a4-d9a5-4c09-8a55-06141226a1a3)

![image](https://github.com/user-attachments/assets/3e397d2e-7f75-4f90-af79-86d5b8a5064f)



## Technologies Used
- **Frontend**: Next.js for a responsive user interface deployed on Vercel.
- **Backend**: Flask for API endpoints, hosted on render.
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



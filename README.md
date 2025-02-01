# Quiz Master

Quiz Master is a React-based quiz application that allows users to take a quiz consisting of 10 questions and view their results upon completion.

## Features

- Fetches quiz questions dynamically from an API.
- Supports multiple-choice questions.
- Displays real-time progress during the quiz.
- Provides instant feedback on selected answers.
- Shows a final result with a detailed summary.

## Technologies Used

- **React 18**: Frontend framework.
- **React Router**: Client-side routing.
- **Axios**: API fetching.
- **Tailwind CSS**: Styling.
- **Framer Motion**: Animations.
- **React Hot Toast**: Notifications.
- **React Loader Spinner**: Loading indicators.
- **React Confetti**: Celebration animation.
- **Howler.js**: Sound management.

---

## Folder Structure

```
Quiz-Master/
│── node_modules/
│── public/
│── src/
│   ├── assets/               # Static assets (images, icons, etc.)
│   ├── components/           # Reusable UI components
│   │   ├── features/
│   │   │   ├── quiz/         # Quiz-related components
│   │   │   ├── result/       # Result page components
│   │   ├── shared/           # Common shared components
│   ├── hooks/
│   │   ├── useQuery.js       # Custom hook for API fetching
│   ├── layouts/
│   │   ├── HomeLayout.jsx    # Layout for home page
│   │   ├── QuizLayout.jsx    # Layout for quiz page
│   │   ├── ResultLayout.jsx  # Layout for result page
│   ├── pages/                # Main pages
│   │   ├── Home.jsx
│   │   ├── Quiz.jsx
│   │   ├── QuizHome.jsx
│   │   ├── Result.jsx
│   │   ├── ResultDetail.jsx
│   │   ├── NotFound.jsx
│   ├── services/             # API service functions (future improvement)
│   ├── utils/                # Utility functions (buildResponse.js, getResult.js)
│   ├── wrappers/
│   ├── App.js                # Main app component
│   ├── index.js              # Entry point
│   ├── index.css             # Global styles
│   ├── main.jsx              # Main component wrapper
│── .gitignore
│── package.json
│── tailwind.config.js
│── vite.config.js
│── README.md
```

---

## API Endpoint

The quiz data is fetched from:

```
https://api.jsonserve.com/Uw5CrX
```

It returns an array of 10 questions, each containing:

- `id`: Unique identifier
- `description`: Question text
- `options`: Array of possible answers
- `correctOptionId`: ID of the correct answer

Example response:

```json
{
  "questions": [
    {
      "id": 1,
      "description": "What is the capital of France?",
      "options": [
        { "id": 1, "description": "Berlin" },
        { "id": 2, "description": "Madrid" },
        { "id": 3, "description": "Paris" },
        { "id": 4, "description": "Rome" }
      ]
    }
  ]
}
```

---

## Installation & Setup

### 1. Clone the repository

```sh
git clone https://github.com/your-username/quiz-master.git
cd quiz-master
```

### 2. Install dependencies

```sh
npm install
```

### 3. Run the development server

```sh
npm run dev
```

The application will be available at `http://localhost:5173/`

### 4. Build for production

```sh
npm run build
```

### 5. Preview production build

```sh
npm run preview
```

---

## Custom Hook: `useQuery.js`

Handles API fetching with loading and error states.

```js
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useQuery = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url, options);
      setData(response.data?.questions || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useQuery;
```

---

## Project Screenshots

Here are different pages of the project

### 1. Home Page
![Screenshot 2025-02-01 214534](https://github.com/user-attachments/assets/f81894c6-5c52-4c32-9cc4-f35c9d40b224)


### 2. Quiz Landing Page
![Screenshot 2025-02-01 214543](https://github.com/user-attachments/assets/9e65d0e8-c9c7-4324-9d94-d2424b1d4ee2)
![Screenshot 2025-02-01 214554](https://github.com/user-attachments/assets/77413229-9b3c-40e1-a15e-c9e3aabda7d3)


### 3. Quiz Page
![Screenshot 2025-02-01 214607](https://github.com/user-attachments/assets/b300fa7f-be7a-495e-9e4d-7f5a48076ec0)


### 4. Result Page
![Screenshot 2025-02-01 214637](https://github.com/user-attachments/assets/0f69ad7e-df64-4023-b423-37dc4810ce86)


### 5. Result Detail Page
![Screenshot 2025-02-01 214650](https://github.com/user-attachments/assets/80ab98b0-d4f7-49a6-9829-0546021cd746)


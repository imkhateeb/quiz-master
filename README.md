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

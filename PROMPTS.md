# Prompts Used with ChatGPT Assistance

### Basic Functionality of React Redux with Redux Toolkit
Prompt:
```
With React + Vite with Typescript project setup, what is the basic setup redux with redux toolkit and implements its usage like dispatch method including with payload?
```

Summary:
    
ChatGPT provides a simple and detailed guide on how to implement Redux with Redux Toolkit using `counter` as an example. It also outline the best coding practice such as the coding implementation, and structuring it into files and folders like `store.ts` and `counterSlice.ts` as well as where to store the files. This is only to speed up the process of initialization rather than going through the documentation.


However, I did my own improvisation on the implementation where I see fit and comfortable for developers in general. I structure it as the following as an example:

```css
src/
├── ... Other folders
├── store/
│   ├── features/
│   │   └── counterSlice.ts
│   └── store.ts
├── App.tsx
├── main.tsx
└── ... Other files
```

### Basic Implementation of React Router Dom
```
In React + Vite with Typescript project, how to implement a basic routing with react-router-dom with simple but detailed explanation. Please include steps for url parameters, query paramaters and nested routes, including handling Not Found route.
```

Summary:

Using ChatGPT, I follow the steps provided with a simple setup of `react-router-dom` to the project including project structuring, app wrapper, and the page navigation implementation with handling "Not Found" route.

Project Structuring:
```css
src/
├─ ... Other folders
├─ pages/
│  ├─ Home.tsx
│  └── ... Other page file ...
├─ App.tsx
├─ main.tsx
└── ... Other files
```

### Flagging viewport/dimensions for mobile and desktop view
```
With React + Vite with Typescript project, and using the latest version of Chakra UI, 3.28.1, how to create flag states for mobile and desktop view to control what to render?
```

ChatGPT suggest using `useBreakpointValue` from Chakra UI, and make a custom hook as follows:
```tsx
// useResponsiveFlags.ts
import { useBreakpointValue } from "@chakra-ui/react";

export function useResponsiveFlags() {
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;
  const isDesktop = useBreakpointValue({ base: false, md: true }) ?? false;

  return { isMobile, isDesktop };
}

```

### Project Structuring
```
Can you help me suggest proper ways to structure a React + Vite with TypeScript project, since I will be using Chakra UI, Redux with Redux Toolkit, routing, custom hooks, and API functions using axios.
```

It's important to structure project early on for better code readability and code usability. I used the suggestion given by ChatGPT as reference according to my coding implementation, which is as follows:
```bash
src/
├── app/
│   ├── store.ts                # Redux store configuration
│   └── hooks.ts                # Typed Redux hooks (useAppDispatch, useAppSelector)
│
├── assets/                     # Static assets (images, icons, fonts)
│
├── components/                 # Reusable UI components (buttons, forms, modals)
│   ├── common/
│   └── layout/
│
├── features/                   # Redux slices + UI for specific domains
│   ├── auth/
│   │   ├── api.ts              # Axios calls for auth
│   │   ├── authSlice.ts        # Redux slice
│   │   ├── components/         # Feature-specific UI components
│   │   └── types.ts            # Type definitions for auth
│   ├── users/
│   │   ├── api.ts
│   │   ├── usersSlice.ts
│   │   └── types.ts
│   └── ...
│
├── hooks/                      # Custom reusable React hooks
│   ├── useResponsiveFlags.ts
│   ├── useAuth.ts
│   └── ...
│
├── pages/                      # Top-level route components (pages)
│   ├── Home/
│   │   └── HomePage.tsx
│   ├── Login/
│   │   └── LoginPage.tsx
│   ├── Dashboard/
│   │   └── DashboardPage.tsx
│   └── ...
│
├── routes/
│   └── AppRouter.tsx           # Central routing setup
│
├── services/
│   ├── apiClient.ts            # Axios base instance
│   ├── interceptors.ts         # Optional Axios interceptors (auth, logging)
│   └── ...
│
├── theme/
│   ├── index.ts                # Chakra theme customization
│   └── foundations/            # colors, typography, etc.
│
├── types/
│   └── global.d.ts             # Global/shared TypeScript types
│
├── utils/
│   ├── constants.ts
│   ├── helpers.ts
│   └── validators.ts
│
├── main.tsx                    # Entry point
└── App.tsx                     # Root component

```

### Just simple code I instantly asked ChatGPT of, and create helper functions for it.

- Array number sequence and create
```
Create a array number sequence in Typescript.
```

### Just asking ChatGPT to refine and analyse the idea of mine of handling objects/records with state
```
In a React + Vite with Typescript project, I need a solution for handling generic types. For example. I have an interface called Person and Student, and I want to create a state handler hook for this, something like useRecord<>. This is to achieve something like direct access to the fields and direct manipulation. For example.

interface Person { name: string, age: number }
interface Student { id: string, year: number }

const {name, age, set: setPerson } = useRecord<Person>();
const {id, year, set: setStudent } = useRecord<Student>();

setPerson({name, "Akmal"}); // update name
setPerson({name: "Akmal2", age: 20) // update name and age
setStudent({id: "001", year: 1}) // update id and year
setStudent({year: 2}) // update year and keep id value 

While making sure the typescript intelliSense works in VS code.

Please give an analysis of the code that will be given by you, in terms of resource, performance, and in general.
```

Used in `/src/hooks/useRecord.tsx`

### Quick help to create debounce helper function utility.
```
In React + Vite project with Typescript, help me create a debounce helper function that also accepts a generic type.
```

### Quick help to create a `scrollTo` helper function utility
```
In React + Vite project with Typescript, help me create a scroll to helper function that goes to specific element or location of the page when the function is called.
```
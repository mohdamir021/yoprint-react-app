# Prompts Used with ChatGPT Assistance

### Basic Functionality of React Redux with Redux Toolkit
Prompt:
```
With React + Vite with Typescript project setup, what is the basic setup redux with redux toolkit and implements its usage?
```

Summary:
    
ChatGPT provides a simple and detailed guide on how to implement Redux with Redux Toolkit using `counter` as an example. It also outline the best coding practice such as the coding implementation, and structuring it into files and folders like `store.ts` and `counterSlice.ts` as well as where to store the files. This is only to speed up the process of initialization rather than going through the documentation.


However, I did my own improvisation on the implementation where I see fit and comfortable for developers in general. I structure it as the following as an example:

```css
src/
├── store/
│   ├── features/
│   │   └── counterSlice.ts
│   └── store.ts
├── App.tsx
└── main.tsx   
```
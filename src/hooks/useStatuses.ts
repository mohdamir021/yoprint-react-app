import React, { useState } from 'react'

interface StatusType {
  isSuccess: boolean
  isLoading: boolean
  isError: boolean
  isEmpty: boolean
}


export default function useStatuses(initialValues?: Partial<StatusType>) {
  const [status, setStatuses] = useState<StatusType>({
    isSuccess: false,
    isLoading: true,
    isError: false,
    isEmpty: false,
    ...initialValues,
  });

  return {
    ...status,
    // methods
    setSuccess (isSuccess: boolean) {
      setStatuses(prev => ({...prev, isSuccess}))
    },
    setEmpty (isEmpty: boolean) {
      setStatuses(prev => ({...prev, isEmpty}))
    },
    setLoading (isLoading: boolean) {
      setStatuses(prev => ({...prev, isLoading}))
    },
    setError (isError: boolean) {
      setStatuses(prev => ({...prev, isError}))
    },
    catchError(error: unknown) {
      console.log(error);
      this.setError(true);
    }
  }
}

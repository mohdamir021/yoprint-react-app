import React, { useState } from "react";

interface StatusType {
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  isReFetching: boolean;
}

export default function useStatuses(initialValues?: Partial<StatusType>) {
  const [status, setStatuses] = useState<StatusType>({
    isSuccess: false,
    isLoading: true,
    isError: false,
    isEmpty: false,
    isReFetching: false,
    ...initialValues,
  });

  return {
    ...status,
    // methods
    setSuccess(isSuccess: boolean) {
      setStatuses((prev) => ({ ...prev, isSuccess }));
    },
    setEmpty(isEmpty: boolean) {
      setStatuses((prev) => ({ ...prev, isEmpty }));
    },
    setLoading(isLoading: boolean) {
      setStatuses((prev) => ({ ...prev, isLoading }));
    },
    setError(isError: boolean) {
      setStatuses((prev) => ({ ...prev, isError }));
    },
    setRefetching(isReFetching: boolean) {
      setStatuses((prev) => ({ ...prev, isReFetching }));
    },
    catchError(error: unknown) {
      console.log(error);
      this.setError(true);
    },
  };
}

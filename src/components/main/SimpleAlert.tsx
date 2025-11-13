import { Alert, AlertRootProps } from "@chakra-ui/react"


export default function SimpleAlert(props: {
  header: string; description: string; status: AlertRootProps["status"]
}) {
  const {header, description, status} = props;
  return (
    <Alert.Root status={status}>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>{header}</Alert.Title>
        <Alert.Description>
          {description}
        </Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}

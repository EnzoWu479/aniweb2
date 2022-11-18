import { Container, ToDisappear } from "./_logo";

interface Props {
  minimized?: boolean;
  size?: number;
  color?: string;
}

export default ({ minimized, size, color }: Props) => {
  return (
    <Container size={size} color={color}>
      R<ToDisappear minimized={minimized}>evengers</ToDisappear>O
      <ToDisappear minimized={minimized}>fc</ToDisappear>
    </Container>
  );
};

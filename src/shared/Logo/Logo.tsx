import { Container, ToDisappear } from "./_logo";

interface Props {
  minimized?: boolean;
  size?: number;
}

export default ({ minimized, size }: Props) => {
  return (
    <Container size={size}>
      A<ToDisappear minimized={minimized}>ni</ToDisappear>W
      <ToDisappear minimized={minimized}>eb</ToDisappear>
    </Container>
  );
};

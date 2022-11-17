import { Container, ToDisappear } from "./_logo";

interface Props {
  minimized?: boolean;
  size?: number;
}

export default ({ minimized, size }: Props) => {
  return (
    <Container size={size}>
      R<ToDisappear minimized={minimized}>evengers</ToDisappear>O
      <ToDisappear minimized={minimized}>fc</ToDisappear>
    </Container>
  );
};

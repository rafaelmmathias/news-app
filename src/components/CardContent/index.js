import Button from '../Button';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Shape from '../Shape';
import Subtitle from '../Subtitle';

const CardContent = ({
  title,
  subtitle,
  text,
  buttonText,
  actionButtonProps,
  ...props
}) => {
  return (
    <Shape {...props}>
      <Heading mb="spacing-stack-xxxs">{title}</Heading>
      <Subtitle as="h2" mb="spacing-stack-xxs">
        {subtitle}
      </Subtitle>
      <Paragraph mb="spacing-stack-sm">{text}</Paragraph>
      <Button {...actionButtonProps}>{buttonText}</Button>
    </Shape>
  );
};

export default CardContent;

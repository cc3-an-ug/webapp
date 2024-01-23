import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ForgotPasswordEmailProps = {
  email?: string;
  resetLink?: string;
};

export function ForgotPasswordEmail({
  email,
  resetLink,
}: ForgotPasswordEmailProps) {
  const previewText = `Restablecer contraseña para ${email}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src="https://github.com/cc3-an-ug.png"
                width="40"
                height="40"
                alt="Vercel"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              <strong>Restablecer contraseña</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hola <strong>{email}</strong>,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Recibimos una solicitud para restablecer la contraseña de tu
              cuenta.
            </Text>
            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                href={resetLink}
                className="rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
              >
                Restablecer contraseña
              </Button>
            </Section>
            <Text className="text-[14px] leading-[24px] text-black">
              o copia y pega este enlace en tu navegador:{' '}
              <Link href={resetLink} className="text-blue-600 no-underline">
                {resetLink}
              </Link>
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Si no solicitaste restablecer tu contraseña, puedes ignorar este
              correo. Si crees que alguien está intentando acceder a tu cuenta,
              puedes escribirnos a los canales correspondientes.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

ForgotPasswordEmail.PreviewProps = {
  email: 'andres.cv@galileo.edu',
  resetLink: 'https://vercel.com/teams/invite/foo',
} as ForgotPasswordEmailProps;

export default ForgotPasswordEmail;

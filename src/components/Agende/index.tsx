import styled, { useTheme } from 'styled-components'
import { TranslationObject } from '@/translation'
import React, { ChangeEvent, useEffect, useState } from 'react'
import Button from '../Button'
import PhoneIcon from '@/assets/icons/phone'
import WhatsappIcon from '@/assets/icons/whatsapp'
import Link from 'next/link'
import FacebookIcon from '@/assets/icons/facebook'
import InstagramIcon from '@/assets/icons/instagram'
import { useRouter } from 'next/navigation'

const Agende: React.FC<{ id: string, t: TranslationObject }> = ({ id, t }) => {
  const locationUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14611.33676329119!2d-46.5570809!3d-23.7176145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce41adc5e289bf%3A0xc2790d572c5f0aeb!2sENDODONTIA%20FACILITADA%20%7C%20Cl%C3%ADnica%20de%20Endodontia%20Microsc%C3%B3pica!5e0!3m2!1spt-BR!2sbr!4v1706285751833!5m2!1spt-BR!2sbr"
  const { color } = useTheme()
  const [fields, setFields] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [text, setText] = useState("")
  const router = useRouter()
  const number = 5511966717274

  function updateFields(e: ChangeEvent<HTMLInputElement>){
    const actor = e.target.name
    const value = e.target.value

    setFields(
      {...fields, [actor]:value}
    )
  }

  function handleSubmit() {
    let contactString = 'Olá, desejo marcar uma consulta. Meus dados são:';
  
    if (fields.name) {
      contactString += `\nNome: ${fields.name}`;
    }
  
    if (fields.phone) {
      contactString += `\nTelefone: ${fields.phone}`;
    }
  
    if (fields.email) {
      contactString += `\nE-mail: ${fields.email}`;
    }
  
    if (fields.message) {
      contactString += `\nMensagem: ${fields.message}`;
    }
  
    setText(contactString);
  }

  useEffect(() => {
    if (text) {
      const url = encodeURI(`https://api.whatsapp.com/send?phone=${number}&text=${text}`);
      router.push(url);
    }
  }, [text, router]);

  return (
    <Container id={id}>
      <TitleSection>
      <Title dangerouslySetInnerHTML={{ __html: t.schedule.title }} />
        <Subtitle>{t.schedule.description}</Subtitle>
      </TitleSection>
      <Content>
        <MapSection>
          <GoogleMap
            src={locationUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            height={200}
            style={{ border: "0" }}
            allowFullScreen={false}
          />
        </MapSection>
        <ContactSection>
          <FormSection>
            <Form>
              <input onChange={updateFields} name='name' maxLength={50} type="text" placeholder={t.form.fields.name} />
              <input onChange={updateFields} name='phone' maxLength={20} type="number" placeholder={t.form.fields.phone} />
              <input onChange={updateFields} name='email' maxLength={50} type="email" placeholder={t.form.fields.email} />
              <input onChange={updateFields} name='message' maxLength={500} type="text" placeholder={t.form.fields.message} />
            </Form>
            <SubmitButton onClickRun={handleSubmit} text={text}>{t.form.buttons.submit}</SubmitButton>
          </FormSection>
          <InformationSection>
            <Location>
              <h3>{t.footer.location.title}</h3>
              <p>{t.global.address}</p>
            </Location>
            <WorkingTime>
              <h3>{t.footer.working.title}</h3>
              {t.global.hour.map((item, index) => {
                return <p key={index}>{item}</p>
              })}
            </WorkingTime>
            <Contact>
              <Phones>
                <h3>{t.footer.contact.title}</h3>
                <div><PhoneIcon color={color.font[60]} /><p>{t.global.phone}</p></div>
                <div><WhatsappIcon color={color.font[60]} /><p>{t.global.whatsapp}</p></div>
              </Phones>
              <Social>
                <Link href={"https://www.facebook.com/endodontiafacilitada/"}><FacebookIcon color={color.font[60]} /></Link>
                <Link href={"https://www.instagram.com/endodontiafacilitada"}><InstagramIcon color={color.font[60]} /></Link>
                <Link href={"https://wa.link/5evhq7"}><WhatsappIcon color={color.font[60]} /></Link>
              </Social>
            </Contact>
          </InformationSection>
        </ContactSection>
      </Content>
    </Container>
  )
}

export default Agende


const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 32px;

`
const Content = styled.div`
background-color: ${({ theme }) => theme.color.background[30]};
box-shadow: 0px 0px 20px -5px #6d6d6d49;
padding: 32px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  gap: 16px;
  border-radius: 20px;

  @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
    padding: 16px;
  }
`
const MapSection = styled.div``
const GoogleMap = styled.iframe`
min-width: 100%;
border-radius: 12px;
`

const TitleSection = styled.div`
display: flex;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${({theme})=> theme.sizes.font.title.md};
  color: ${({theme})=> theme.color.font[60]};
  text-align: center;
  span{
  color: ${({theme})=> theme.color.font[10]};
}
`
const Subtitle = styled.p`
color: ${({ theme }) => theme.color.font[60]};
font-size: ${({ theme }) => theme.sizes.font.paragraph.md};
text-align: center;
`

const ContactSection = styled.div`
display: flex;
flex-direction: row;
gap: 10%;

@media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
  flex-direction: column-reverse;
    width: 100%;
    gap: 32px;
  }
`
const FormSection = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
  width: 45%;
  @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
    width: 100%;
  }
`
const Form = styled.form`
display: flex;
flex-direction: column;
gap: 8px;

input{
  padding: 16px;
  background-color: ${({ theme }) => theme.color.background[60]};
  border-radius: 4px;
  width: 100%;

  outline: 2px transparent;
  transition: all ease-in-out 0.2s;
  &:focus{
    outline: 2px ${({ theme }) => theme.color.background[10]};
  }
}
`
const InformationSection = styled.div`
display: flex;
flex-direction: column;
gap: 16px;

width: 45%;
@media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
    width: 100%;
  }
`
const SubmitButton = styled(Button)`

`

const ItemSection = styled.div`
display: flex;
flex-direction: column;
h3{
  font-weight: ${({ theme }) => theme.sizes.weights.bold};
  color: ${({theme})=> theme.color.font[10]}; 
}

div{
  display: flex;
  flex-direction: row;
}

`

const Location = styled(ItemSection)`
display: flex;
flex-direction: column;
gap: 8px;
`
const WorkingTime = styled(ItemSection)`
display: flex;
flex-direction: column;
gap: 8px;
`
const Contact = styled.div`
display: flex;
flex-direction: row;
gap: 8px;
justify-content: space-between;
align-items: flex-end;
`

const Phones = styled(ItemSection)`
display: flex;
flex-direction: column;
gap: 8px;
div{
  display: flex;
flex-direction: row;
gap: 8px;
}
`
const Social = styled.div`
  display: flex;
flex-direction: row;
gap: 8px;
div{
  height: 22px;
  width: 22px;
}
`
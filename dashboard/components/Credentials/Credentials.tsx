import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Modal from '../Modal'
import CredentialsForm from './CredentialsForm'

export default function Credentials() {
  const [isOpen, setIsOpen] = useState(false)

  const { isReady } = useRouter()

  useEffect(() => {
    if (!isReady) return
    setIsOpen(true)
    return () => setIsOpen(false)
  }, [isReady])

  return (
    <Modal isOpen={isOpen} onClose={() => undefined}>
      <Modal.Content>
        <Modal.Title id="credentials-title">Enter credentials</Modal.Title>
        <Modal.Description>
          Para visualizar seus dados analíticos no painel pré-criado, você precisa
          para especificar um token com acesso de leitura aos pipes e seu espaço de trabalho
          Hospedar.
        </Modal.Description>
        <CredentialsForm />
      </Modal.Content>
    </Modal>
  )
}

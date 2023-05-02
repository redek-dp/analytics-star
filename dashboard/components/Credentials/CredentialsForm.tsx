import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { SelectBox, SelectBoxItem, TextInput, Button } from '@tremor/react'

import { HostType } from '../../lib/types/credentials'
import { OptionType } from '../../lib/types/options'

const hostOptions: OptionType<HostType>[] = [
  { text: HostType.Eu, value: HostType.Eu },
  { text: HostType.Us, value: HostType.Us },
  { text: 'Other', value: HostType.Other },
]

export default function CredentialsForm() {
  const router = useRouter()
  const [hostType, setHostType] = useState<HostType>(hostOptions[0].value)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const credentials = Object.fromEntries(formData) as Record<string, string>
    const { token, hostName } = credentials
    if (!token || (hostType === HostType.Other && !hostName)) return
    const host = hostType === HostType.Other ? hostName : hostType
    const params = new URLSearchParams({ token, host })
    router.push({ pathname: router.pathname, search: params.toString() })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between h-full"
      aria-labelledby="credentials-title"
    >
      <div className="space-y-10">
        <div className="space-y-1">
          <label className="block text-sm font-normal text-neutral-64">
            Token
          </label>
          <TextInput
            name="token"
            placeholder="p.eyJ1IjogIjRkNTVkYWQ5LTUyZTctNDMzOC04ODA1LTJkM2QxYzcxODQxYSIsICJpZCI6ICJjYTQwMzQwYy1lODc4LTRhZDgtYjM4NC1kOWFjYzE1Mzc1MWIifQ.JqDial1Ejv572AFZtS6Ts2y50-U5MdcoLGXLCYmfiJU"
            value="p.eyJ1IjogIjRkNTVkYWQ5LTUyZTctNDMzOC04ODA1LTJkM2QxYzcxODQxYSIsICJpZCI6ICJjYTQwMzQwYy1lODc4LTRhZDgtYjM4NC1kOWFjYzE1Mzc1MWIifQ.JqDial1Ejv572AFZtS6Ts2y50-U5MdcoLGXLCYmfiJU"
          />
          <p className="text-xs text-secondaryLight">
            Copie o token chamado painel gerado com sua análise da web projeto.
          </p>
        </div>
        <div className="flex items-end gap-10">
          <div className="flex-1">
            <label className="block text-sm font-normal text-neutral-64 mb-1">
              Host
            </label>
            <SelectBox
              value={hostType}
              onValueChange={value => setHostType(value as HostType)}
            >
              {hostOptions.map(({ text, value }) => (
                <SelectBoxItem key={value} text={text} value={value} />
              ))}
            </SelectBox>
          </div>
          <div className="flex-1">
            {hostType === HostType.Other && (
              <>
                <label className="block text-sm font-normal text-neutral-64 mb-1">
                  Host name
                </label>
                <TextInput name="hostName" placeholder="Host name" />
              </>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" color="emerald">
            Ver painel
          </Button>
        </div>
      </div>
    </form>
  )
}

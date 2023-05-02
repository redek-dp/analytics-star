import { Popover } from '@headlessui/react'
import { DateRangePicker } from '@tremor/react'
import moment from 'moment'
import { QuestionIcon } from './Icons'

import {
  DateFilter as DateFilterType,
  DateRangePickerOption,
} from '../lib/types/date-filter'
import useDateFilter from '../lib/hooks/use-date-filter'

const dateFilterOptions: DateRangePickerOption[] = [
  { text: 'Hoje', value: DateFilterType.Today, startDate: new Date() },
  {
    text: 'Ontem',
    value: DateFilterType.Yesterday,
    startDate: moment().subtract(1, 'days').toDate(),
  },
  {
    text: '7 dias',
    value: DateFilterType.Last7Days,
    startDate: moment().subtract(7, 'days').toDate(),
  },
  {
    text: '30 dias',
    value: DateFilterType.Last30Days,
    startDate: moment().subtract(30, 'days').toDate(),
  },
  {
    text: '12 meses',
    value: DateFilterType.Last12Months,
    startDate: moment().subtract(12, 'months').toDate(),
  },
]

export default function DateFilter() {
  const { dateRangePickerValue, onDateRangePickerValueChange } = useDateFilter()

  return (
    <div className="flex items-center gap-4">
      <Popover className="relative h-4">
        <Popover.Button>
          <QuestionIcon className="text-secondaryLight" />
          <div className="sr-only">Qual é o fuso horário usado?</div>
        </Popover.Button>

        <Popover.Panel className="absolute bottom-6 -right-10 bg-secondary text-white text-xs font-light rounded py-1 px-2 z-[2] w-24">
          UTC timezone
        </Popover.Panel>
      </Popover>

      <div className="min-w-[165px]">
        <DateRangePicker
          value={dateRangePickerValue}
          onValueChange={onDateRangePickerValueChange}
          options={dateFilterOptions}
          enableYearPagination
        />
      </div>
    </div>
  )
}

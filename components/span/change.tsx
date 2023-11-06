export function Change({ value }: { value: number }) {
  return (
    <span className={value === 0 ? 'text-gray-300' : value > 0 ? 'text-green-500' : 'text-red-500'}>
      {value.toFixed(2)}%
    </span>
  )
}

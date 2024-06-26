interface ICountValueProps {
  children: React.ReactNode,
  label: string,
  index: number
}

const linearGradient = [
  'from-linearFirstStart to-linearFirstEnd',
  'from-linearSecondStart to-linearSecondEnd',
  'from-linearThirdStart to-linearThirdEnd',
  'from-linearFourthStart to-linearFourthEnd',
]

export default function CountValue({ children, label, index }: ICountValueProps) {
  return (
    <div className={`border-2 border-solid border-lightGrey rounded-lg pb-4 bg-gradient-to-r ${linearGradient[index]}`}>
      <div className={`border-b-2 border-solid border-lightGrey rounded-lg pb-4`}>
        <li className="border-b-2 border-solid border-lightGrey rounded-lg flex flex-col items-center p-4 sm:p-16 bg-black">
          <span className="text-7xl">{children}</span>
          <span className="text-lg">{label}</span>
        </li>
      </div>
    </div>
  )
}

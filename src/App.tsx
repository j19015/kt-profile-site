import './App.css'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function App() {
  return (
    <div className="bg-gray-100 flex items-center justify-center w-full">
      <div className="bg-white p-6 rounded-lg shadow-lg　m-auto">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-gray-900">山田 太郎</h2>
          <p className="text-gray-600">Web Developer</p>
          <p className="mt-2 text-gray-700">
            こんにちは！私はフロントエンド開発者です。ReactとTailwind CSSを使って美しいウェブサイトを作成します。
          </p>
        </div>
        <div className='mt-5'>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>
      </div>
    </div>
  )
}

export default App
import {
  Card,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa"; // React Icons
import { FiMail, FiPhone } from "react-icons/fi"; // React Icons for contact

export const Top = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        {/* ヘッダー: アバター */}
        <CardHeader className="flex justify-center">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://via.placeholder.com/150" alt="Profile Picture" />
            <AvatarFallback>Y</AvatarFallback>
          </Avatar>
        </CardHeader>

        {/* ボディ: 名前、職業、自己紹介 */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-900">山田 太郎</h2>
          <p className="text-gray-600">Web Developer</p>
          <p className="mt-3 text-gray-700">
            こんにちは！私はフロントエンド開発者です。ReactとTailwind CSSを使って美しいウェブサイトを作成します。
          </p>
        </div>

        {/* フッター: ソーシャルアイコンとダウンロードボタン */}
        <CardFooter className="mt-4 flex justify-center space-x-4">
          <a className="button-ghost button-icon" aria-label="GitHub" href="https://github.com/yourusername" target="_blank">
            <FaGithub className="w-5 h-5" />
          </a>
          <a className="button-ghost button-icon" aria-label="LinkedIn" href="https://linkedin.com/in/yourusername" target="_blank">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a className="button-ghost button-icon" aria-label="Twitter" href="https://twitter.com/yourusername" target="_blank">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a className="button-ghost button-icon" aria-label="Download CV" href="/path/to/your-cv.pdf" download>
            <FaDownload className="w-5 h-5" />
          </a>
        </CardFooter>

        {/* 追加情報: アコーディオン */}
        <div className='mt-6'>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>私について</AccordionTrigger>
              <AccordionContent>
                フロントエンド開発に情熱を持ち、最新の技術を学び続けています。ユーザーエクスペリエンスを重視したデザインと効率的なコーディングを心掛けています。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>スキルセット</AccordionTrigger>
              <AccordionContent>
                React, Next.js, Tailwind CSS, TypeScript, JavaScript, HTML, CSS, Git, Node.js
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>お問い合わせ</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center space-x-2">
                  <FiMail className="w-5 h-5 text-gray-600" />
                  <a href="mailto:your.email@example.com" className="text-gray-700 hover:underline">
                    your.email@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <FiPhone className="w-5 h-5 text-gray-600" />
                  <a href="tel:+819012345678" className="text-gray-700 hover:underline">
                    090-1234-5678
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>学歴</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside text-gray-700">
                  <li>東京大学 工学部 コンピュータ科学科 (2015 - 2019)</li>
                  <li>ABC高等学校 (2012 - 2015)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>職歴</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside text-gray-700">
                  <li>XYZ株式会社 フロントエンドエンジニア (2020 - 現在)</li>
                  <li>DEF株式会社 ウェブ開発インターン (2019)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Card>
    </div>
  );
};

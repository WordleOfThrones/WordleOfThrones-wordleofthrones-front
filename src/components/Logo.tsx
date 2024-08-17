import Image from 'next/image';

export default function Logo() {
  return (
    <div className="logo">
      <Image src={'/images/logo.png'} width={267} height={112} alt={'Logo'} />
    </div>
  );
}
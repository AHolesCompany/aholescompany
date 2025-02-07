'use client';

import Logo from '@/app/ui/logo';

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
      </main>
    </div>
  );
}
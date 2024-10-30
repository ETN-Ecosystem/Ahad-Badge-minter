// app/page.tsx

'use client'

import MintSBT from "@/components/MintSBT";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const MANIFEST_URL = 'https://etneco.ethio-tech.com/tonconnect-manifest.json';

export default function Home() {
  return (
    <TonConnectUIProvider manifestUrl={MANIFEST_URL}>
      <MintSBT />
    </TonConnectUIProvider>
  );
}

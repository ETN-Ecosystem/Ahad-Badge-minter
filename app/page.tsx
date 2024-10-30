// app/page.tsx

'use client'

import MintSBT from "@/components/MintSBT";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const MANIFEST_URL = 'https://emerald-efficient-macaw-234.mypinata.cloud/ipfs/QmYW2TZSPpYmhRqWgoNPeyUymDhSruaY1fpVw5JsJdedpx';

export default function Home() {
  return (
    <TonConnectUIProvider manifestUrl={MANIFEST_URL}>
      <MintSBT />
    </TonConnectUIProvider>
  );
}

import { useEffect, useState } from "react";
import { useWallet } from '@meshsdk/react';
import { BlockfrostProvider } from '@meshsdk/core';

const metadataCheck = () => {
    const [hasSilver, setHasSilver] = useState(false);
    const [hasGold, setHasGold] = useState(false);
    const [hasPlatinum, setHasPlatinum] = useState(false);
    const [hasAir, setHasAir] = useState(false);
    const [loading, setLoading] = useState(false);
    const { connected, wallet } = useWallet();
    const blockfrostProvider = new BlockfrostProvider('mainnet50pMKefWQffC8MUvi6pD9dBZZH3RcDQB');

    useEffect(() => {
        const checkMedicProperty = async () => {
          if (!connected) {
            return;
          }
          setLoading(true);
          const assets = await wallet.getPolicyIdAssets("5a373205409755e8d7913309aae06c45113df8a410deda64f5fe4eeb")
          if (assets.length) {
            // Fetch asset metadata for each asset
            for (const asset of assets) {
              const metadata = await blockfrostProvider.fetchAssetMetadata(asset.unit);
              // Check for a "Medic" property in the metadata
              if (metadata.hasOwnProperty("medic")) {
                const medicType = metadata.medic.toLowerCase();
                if (medicType === "silver") {
                  setHasSilver(true);
                } else if (medicType === "gold") {
                  setHasGold(true);
                } else if (medicType === "platinum") {
                  setHasPlatinum(true);
                } else if (medicType === "air") {
                  setHasAir(true);
                }
              }
            }
          }
          setLoading(false);
        };
        checkMedicProperty();
      }, [connected, blockfrostProvider]);
    
      return { hasSilver, hasGold, hasPlatinum, hasAir, loading };
    };
    
    export default metadataCheck;
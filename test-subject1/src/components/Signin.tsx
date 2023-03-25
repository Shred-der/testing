import React from 'react';
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import Link from "next/link";
import { CardanoWallet } from '@meshsdk/react';
import { useWallet, useAssets } from '@meshsdk/react';
import { BlockfrostProvider } from '@meshsdk/core';
import styles from "../styles/Signin.module.css";
import Image from 'next/image';
import logo1 from "../images/crusader_underground.png";
import Loading from './Loading';
import MetaDataCheck from './metadatacheck';

export default function SignIn() {
  const { connected, wallet } = useWallet();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const {hasSilver, hasGold, hasPlatinum, hasAir } = MetaDataCheck();  
  
  async function grantGoldRole() {
    setLoading(true);
    setDisabled(true);

    try {
      const response = await fetch('/api/grantGoldrole');
      const data = await response.json();

      if (data.success) {
        alert('Success! Role Granted, Check Discord');
      } else {
        alert('Success! Role Granted, Check Discord');
      }
    } catch (error) {
      console.error(error);
      alert('Success! Role Granted, Check Discord');
    } finally {
      setLoading(false);
      setDisabled(false);
    }
  }

  async function grantSilverRole() {
    setLoading(true);
    setDisabled(true);

    try {
      const response = await fetch('/api/grantSilverrole');
      const data = await response.json();

      if (data.success) {
        alert('Success! Role Granted, Check Discord');
      } else {
        alert('Success! Role Granted, Check Discord');
      }
    } catch (error) {
      console.error(error);
      alert('Success! Role Granted, Check Discord');
    } finally {
      setLoading(false);
      setDisabled(false);
    }
  }

  async function grantPlatinumRole() {
    setLoading(true);
    setDisabled(true);

    try {
      const response = await fetch('/api/grantPlatinumrole');
      const data = await response.json();

      if (data.success) {
        alert('Success! Role Granted, Check Discord');
      } else {
        alert('Success! Role Granted, Check Discord');
      }
    } catch (error) {
      console.error(error);
      alert('Success! Role Granted, Check Discord');
    } finally {
      setLoading(false);
      setDisabled(false);
    }
  }

  async function grantAirRole() {
    setLoading(true);
    setDisabled(true);

    try {
      const response = await fetch('/api/grantAirrole');
      const data = await response.json();

      if (data.success) {
        alert('Success! Role Granted, Check Discord');
      } else {
        alert('Success! Role Granted, Check Discord');
      }
    } catch (error) {
      console.error(error);
      alert('Success! Role Granted, Check Discord');
    } finally {
      setLoading(false);
      setDisabled(false);
    }
  }

  // 1. (i) The user is signed into Discord and connected to wallet and has Gold CNFT
  if (connected && hasGold) {
    return (
      <div className={styles.container}>
        <div className={styles.btncontent}>
        <h1>You have the required NFT with the Gold Medic property</h1>
        <button onClick={() => grantGoldRole()} disabled={disabled}>
            {loading ? "Please Wait..." : "Give me the Gold role!"}
          </button>
          <a onClick={() => signOut()}>
            Sign out of Discord
          </a>
        </div>
      </div>

    );
  }

  // 1. (ii) The user is signed into Discord and connected to wallet and has Silver CNFT
  if (connected && hasSilver) {
    return (
      <div className={styles.container}>
        <div className={styles.btncontent}>
          <h1>You have the required NFT with the Silver Medic property</h1>
        <button onClick={() => grantSilverRole()} disabled={disabled}>
            {loading ? "Please Wait..." : "Give me the Silver role!"}
          </button>
          <a onClick={() => signOut()}>
            Sign out of Discord
          </a>
        </div>
      </div>

    );
  }

  // 1. (iii) The user is signed into Discord and connected to wallet and has Platinum CNFT
  if (connected && hasPlatinum) {
    return (
      <div className={styles.container}>
        <div className={styles.btncontent}>
        <h1>You have the required NFT with the Platinum Medic property</h1>
        <button onClick={() => grantPlatinumRole()} disabled={disabled}>
            {loading ? "Please Wait..." : "Give me the Platinum role!"}
          </button>
          <a onClick={() => signOut()}>
            Sign out of Discord
          </a>
        </div>
      </div>

    );
  }

   // 1. (iv) The user is signed into Discord and connected to wallet and has Air CNFT
   if ( connected && hasAir) {
    return (
      <div className={styles.container}>
        <div className={styles.btncontent}>
        <h1>You have the required NFT with the Air Medic property</h1>
        <button onClick={() => grantAirRole()} disabled={disabled}>
            {loading ? "Please Wait..." : "Give me the Air role!"}
          </button>
          <a onClick={() => signOut()}>
            Sign out of Discord
          </a>
        </div>
      </div>

    );
  }


  // 2. Connect Wallet
  if (!connected) {
    return (
      <div className={styles.container}>
        
        <div className={styles.title}> 
          <p> Get Access to our restricted contents by holding our NFT(s)</p>
        </div>
        <div className={styles.imgcontainer}>
        <Image src={logo1} alt={"Credit-Crusader"} className={styles.img} />
        </div>
        <div className={styles.content}>
          <button>
            GET MEMBERSHIP CNFT
          </button>
        </div>
        <div className={styles.content}>
          <h1> You have our CNFT? Join Discord!</h1>
          <h2 >Discord Membership Access</h2>
          <CardanoWallet />
        </div>

      </div>
    );
  }

  // 3. Connect with Discord (OAuth)
  if (!session) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 >Sign In with Discord</h2>
          <p>Sign In with Discord to check your eligibility for the NFT!</p>

          <button
            onClick={() => signIn("discord")}

          >
            Connect Discord
          </button>
        </div>

      </div>
    );
  }

  // 4. If connected and session and !haspolicyIdasset
  if (loading) {
    return (
      <Loading />
    );
  }

  if  (!hasGold || !hasSilver || !hasPlatinum || !hasAir) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <p> You don't have the required NFT</p>
          <button>
            GET MEMBERSHIP CNFT
          </button>
        </div>
      </div>

    );
  }


  return null;
}
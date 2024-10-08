import { SelectedNetworkType, WalletType } from "@/lib/types/wallettypes"
import {atom} from "recoil"


const WalletValue : WalletType[] = [{
    publicKey : "",
    id : 0,
    assetBalance : 0,
    usdcBalance : 0,
    accountId : 0
  }]

export const walletState = atom<WalletType[] |  null>({
    key : "wallet-state",
    default : null
})

export const SecretKey = atom({
    key : "secret",
    default : ""
})


export const authorizedState = atom<boolean>({
    key : "auth",
    default : false
})


export const selectedNetworkState = atom<SelectedNetworkType>({
    key : "network",
    default : "Solana"
})
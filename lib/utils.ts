import { clsx, type ClassValue } from 'clsx'
import { formatDistanceToNow, fromUnixTime } from 'date-fns'
import { twMerge } from 'tailwind-merge'
import { Network } from './network'
import { UserWallet } from './wallet'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(timestamp: number) {
  const time = fromUnixTime(timestamp / 1000)
  return `${formatDistanceToNow(time, { addSuffix: true })} (${time.toLocaleDateString()})`
}

export const shortenAddress = (address: string, maxLength: number): string => {
  if (address.length > maxLength) {
    return `${address.slice(0, maxLength)}...`
  }
  return address
}

export function formatNetworkUnit(network?: Network): string {
  let unit = ''
  if (network) {
    unit = network.unit.startsWith('u') ? network.unit.slice(1) : network.unit
  }
  return unit.toUpperCase()
}

export function formatWalletBalance(wallet: UserWallet): string {
  const balance = wallet?.balance / 1_000_000;
  const res = isNaN(balance) ? '0' : balance.toFixed(4);
  return res;
}


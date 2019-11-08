import * as React from 'react'
import * as ReactNative from 'react-native'

export type Buffer = (data: number[]) => void

export interface BluetoothDevice {
	id: string;
	name: string | null;
  address: string;
  class?: number;
}

type EventType = 'bluetoothEnabled' | 'bluetoothDisabled' | 'connectionSuccess' | 'connectionLost';

declare namespace BluetoothSerial {
  /** Bluetooth state related methods **/

  // Request user to enable bluetooth
  function requestEnable(): Promise<void>
  // Enable bluetooth
  function enable(): Promise<void>
  // Disable bluetooth
  function disable(): Promise<void>
  // Check if bluetooth is enabled
  function isEnabled(): Promise<boolean>
  function withDelimiter(delimited: string): Promise<void>
  

  /** Bluetooth device related methods **/
  
  // List paired bluetooth devices
  function list(): Promise<Array<BluetoothDevice>>
  // Discover unpaired bluetooth devices
  function discoverUnpairedDevices(): Promise<Array<BluetoothDevice>>
  // Cancel discovery
  function cancelDiscovery(): Promise<void>
  // Pair device
  function pairDevice(id: string): Promise<void>
  // Unpair device
  function unpairDevice(id: string): Promise<void>
  

  /** Connection related methods **/

  // Connect to device by id
  function connect(id: string): Promise<void>
  // Disconnect from device
  function disconnect(): Promise<void>
  // Check if device is connected
  function isConnected(): Promise<boolean>
  
  
  /** Write to device **/
  
  //  Write to device over serial port
  function writeToDevice(message: string): Promise<void>
  

   /** Read from device **/
  
  // Read from device over serial port
  function readFromDevice(): Promise<string>
  function readUntilDelimiter(delimited: string): Promise<string>
  
  
  /** Other **/
  
  // Clear data in buffer
  function clear(): Promise<void>
  // Get length of data available to read
  function available(): Promise<number>
  // Set bluetooth adapter name
  function setAdapterName(newName: string): Promise<void>;
  
  
  /** JS **/
  function on(eventName: EventType, handler: () => void): void
  function removeListener(eventName: EventType, handler: () => void): void
  function write(data: Buffer | string): Promise<boolean>
}

export default BluetoothSerial

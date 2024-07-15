import { MLP1L } from "../types";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";
import { log } from "./shared";

task("all").setAction(async function (
    _taskArguments: TaskArguments,
    hre,
) {    
    await hre.run('set:bias');
    await hre.run('set:weights');
    await hre.run('set:quantized-data');
    await hre.run('inference');
});https://github.com/ocskiurity/n0tte.gitimport { FhenixClient } from 'fhenixjs';
import { JsonRpcProvider } from 'ethers';

// initialize your web3 provider
const provider = new JsonRpcProvider('https://api.helium.fhenix.zone');

// initialize Fhenix Client
const client = new FhenixClient({provider});

// to encrypt data for a Fhenix contract
let encrypted = await client.encrypt(5, EncryptionTypes.uint8);

// ...
// contract logic goes here
// ...

// to unseal data returned from a Fhenix contract
const cleartext = client.unseal(contractAddress, sealed);

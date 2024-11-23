const hre = require("hardhat");

const CONTRACT_ADDR = "0x5e24c5f3526B6BEdCf4FC33655ABE0AD6177B315";
async function main() {

    const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);
    
    const tx = await contract.changeX(97);
    await tx.wait();

}

main().catch((error) => {
console.error(error);
process.exitCode = 1;
});
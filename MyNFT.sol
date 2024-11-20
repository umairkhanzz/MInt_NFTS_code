// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";   
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage {
    uint public tokenCounter;

    constructor() ERC721("MyNFT", "MNFT") {
        tokenCounter = 0;
    }

    function mintNFT(address recipient, string memory tokenURI) public returns (uint) {
        uint newTokenId = tokenCounter;
        _safeMint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        tokenCounter++;
        return newTokenId;
    }

    // Burn NFT functionality
    function burnNFT(uint tokenId) public {
        // Ensure that the sender is the owner of the token
        require(ownerOf(tokenId) == msg.sender, "You do not own this token.");
        _burn(tokenId); // This burns the token and removes its metadata
    }

}

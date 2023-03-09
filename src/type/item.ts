export interface ItemData {
  id: string;
  image: string;
  name: string;
  price: string;
  symbol: string;
  closedAt: string;
  owner: {
    name: string;
    address: string;
  }
  description: string;
  assetAddress: string;
  tokenId: string;
}

function foldUUID(uuid: string, fold: 2 = 2): string {
    const uuidNoDash = uuid.replace(/-/g, "");
    const foldedLength = Math.ceil(uuidNoDash.length / fold);
  
    const firstHalfHexs = Buffer.from(uuidNoDash.slice(0, foldedLength), "hex");
    const latterHalfHexs = Buffer.from(uuidNoDash.slice(foldedLength), "hex");
  
    const foldedBuffer = firstHalfHexs.map((v, i) => v ^ latterHalfHexs[i]);
  
    const foldedUUID = Buffer.from(foldedBuffer).toString("hex");
  
    return foldedUUID;
  }
  
  export { foldUUID };
  
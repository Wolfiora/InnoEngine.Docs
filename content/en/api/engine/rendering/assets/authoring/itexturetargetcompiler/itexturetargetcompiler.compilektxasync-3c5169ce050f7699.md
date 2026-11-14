---
uid: api.3c5169ce050f76994ae730fedd2457947e2f1bdfa355047aaa478bfd3904f14f
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ITextureTargetCompiler.CompileKtxAsync(System.IO.Stream,Inno.Rendering.Assets.TextureColorSpace,System.Threading.CancellationToken)"
source: xml
reviewed: 0b396859fbf35ab73bb1a0b5f1124254df40ba7b869b11c402d6f9a7af3c5d2a
title: "ITextureTargetCompiler.CompileKtxAsync"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Compiles one source texture into an uncompressed KTX artifact with a complete mip chain.

**Parameter `source`:** Borrowed encoded image stream retained by the caller until compilation completes.

**Parameter `colorSpace`:** Sampling color-space contract.

**Parameter `cancellationToken`:** Cancellation for the offline compiler process.

**Returns:** An operation producing complete KTX bytes suitable for a backend-neutral texture container upload.

**Exception `T:System.InvalidOperationException`:** Thrown when the target compiler rejects the source.

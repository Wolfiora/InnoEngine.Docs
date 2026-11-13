---
uid: api.3c5169ce050f76994ae730fedd2457947e2f1bdfa355047aaa478bfd3904f14f
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ITextureTargetCompiler.CompileKtxAsync(System.IO.Stream,Inno.Rendering.Assets.TextureColorSpace,System.Threading.CancellationToken)"
source: xml
reviewed: 2ee97c39c1abf72dee8e81f59a8aa4e789480393519279f4b23fc4ae7f66b3d9
title: "CompileKtxAsync"
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

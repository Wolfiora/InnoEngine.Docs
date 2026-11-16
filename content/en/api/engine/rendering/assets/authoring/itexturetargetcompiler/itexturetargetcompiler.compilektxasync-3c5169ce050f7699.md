---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3c5169ce050f76994ae730fedd2457947e2f1bdfa355047aaa478bfd3904f14f
symbol: engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ITextureTargetCompiler.CompileKtxAsync(System.IO.Stream,Inno.Rendering.Assets.TextureColorSpace,System.Threading.CancellationToken)
title: ITextureTargetCompiler.CompileKtxAsync
kind: api
owners:
- Inno.Rendering.Assets.Authoring
apiSurface: source-clr
reviewed: da1154a01e7f0a9161b84ddc0c4326f5fc291b75c3b0e3adfad73375f822f20f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `source`:** Borrowed encoded image stream retained by the caller until compilation completes.

**Parameter `colorSpace`:** Sampling color-space contract.

**Parameter `cancellationToken`:** Cancellation for the offline compiler process.

## Returns

An operation producing complete KTX bytes suitable for a backend-neutral texture container upload.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the target compiler rejects the source.

---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.00bab1348e9133a4880c6191c5e90db941b3fea8de5e018277a3ee9e445d50da
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider.#ctor(Inno.Content.IRuntimeContentStore,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)
title: ContentRenderTargetArtifactProvider.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 6c8b05f2a358079373e7ab5a74a8546be60eb6b306dbfaa112eedd867100ad85
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `content`:** The verified immutable content store, borrowed for this provider's lifetime.

**Parameter `serialization`:** The runtime owner serialization registry.

**Parameter `context`:** Complete runtime asset/reference context used to resolve captured texture defaults.

## Exceptions

**Exception `T:System.ArgumentNullException`:** A required content or serialization service is null.

---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.00bab1348e9133a4880c6191c5e90db941b3fea8de5e018277a3ee9e445d50da
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider.#ctor(Inno.Content.IRuntimeContentStore,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)
title: ContentRenderTargetArtifactProvider.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 38811ea23e8ab2c19bc3832d86068093246627d79b7947c7064830fba86c588c
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

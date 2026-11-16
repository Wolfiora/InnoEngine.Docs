---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4bb5a9265f03f2222d3ff113bc483306b04ce244684f706293f0cc25b6d1dc9a
symbol: engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderSourceBundle.Encode(System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderSourceModuleAnalysis},Inno.Core.Serialization.SerializationRegistry)
title: ShaderSourceBundle.Encode
kind: api
owners:
- Inno.Rendering.Assets.Authoring
apiSurface: source-clr
reviewed: 7178596c93bfa274cccb0ba280255589db0be78018f70c81ac42acb8e176dbcc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `functions`:** Complete source analyses keyed by explicit exported function name.

**Parameter `serialization`:** Native converter registry; this bundle contains pure values only.

## Returns

Deterministic native authoring artifact bytes, not Player content.

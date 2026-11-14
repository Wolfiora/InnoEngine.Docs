---
uid: api.4bb5a9265f03f2222d3ff113bc483306b04ce244684f706293f0cc25b6d1dc9a
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderSourceBundle.Encode(System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderSourceModuleAnalysis},Inno.Core.Serialization.SerializationRegistry)"
source: xml
reviewed: 4688a88439a1c761dc4d293f64de28dfc08f9f91b4500419e9b9478359afa069
title: "ShaderSourceBundle.Encode"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Captures every exported function, implementation and include resolution from a successful source import.

## Parameters

**Parameter `functions`:** Complete source analyses keyed by explicit exported function name.

**Parameter `serialization`:** Native converter registry; this bundle contains pure values only.

## Returns

Deterministic native authoring artifact bytes, not Player content.

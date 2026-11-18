---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8938d86ed2d84ee68b90eb748fb9db8aefd4f1eb79ccccae814ecbc2eae82396
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.ShaderAsset.SetDefinition(Inno.Rendering.Assets.ShaderDefinition,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)
title: ShaderAsset.SetDefinition
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
sourceFingerprint: 868b49cc7088faf5ed262a4c3d0af417001403a246137ed48c45fa797f10afc0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** Complete definition visible to materials and target compilation.

**Parameter `serialization`:** The serialization registry that owns the active shader converter generation.

**Parameter `context`:** The complete owner reference context used for material texture defaults.

## Exceptions

**Exception `T:System.ArgumentException`:** A declaration collection is null. The previous committed definition remains unchanged.

**Exception `T:System.InvalidOperationException`:** Serialization cannot encode the candidate. No part of the candidate is published.

---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3a1b96b533ecbb396514acdefe04d3589584fba785bcd3057a3db5cf1dc3d065
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetSerializationServices.GetStableTypeId``1
title: AssetSerializationServices.GetStableTypeId
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
reviewed: 9ef842b5d1e5e23d0fd8a5b3a486cbb9d9f2ed12897d2128aa2aeaefdb026e8c
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TValue`:** The registered type whose stable identity is required.

## Returns

The stable type identifier owned by the active extension generation.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when `TValue` has no stable type registration.

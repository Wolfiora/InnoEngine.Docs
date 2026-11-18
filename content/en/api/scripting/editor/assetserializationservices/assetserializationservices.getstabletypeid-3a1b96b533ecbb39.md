---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3a1b96b533ecbb396514acdefe04d3589584fba785bcd3057a3db5cf1dc3d065
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetSerializationServices.GetStableTypeId``1
title: AssetSerializationServices.GetStableTypeId
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
sourceFingerprint: 80ba4143d5d1984d57efabef05e1905d15058307223bda66575dedce2e364691
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

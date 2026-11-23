---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.98699bbdbbb22f32cb53b60e679f89f3d6caa078f859815b0a106c6a6e3e8199
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetSerializationServices.GetStableTypeID``1
title: AssetSerializationServices.GetStableTypeID
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
sourceFingerprint: ffca62bcef16b42ad8f4f080ac41e6cc0b4ae06c850a3e85dc7804e287bb72d3
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

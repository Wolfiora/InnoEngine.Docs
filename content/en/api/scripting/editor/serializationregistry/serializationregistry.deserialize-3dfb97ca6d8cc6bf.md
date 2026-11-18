---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3dfb97ca6d8cc6bf6c8356132da5ab258e860b8c574a45d935408e4906cb66ab
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.Deserialize``1(System.ReadOnlySpan{System.Byte},InnoEngine.Serialization.SerializationContext)
title: SerializationRegistry.Deserialize
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
sourceFingerprint: 5c719fac43c80b64d3c0eae9accc27f32c04a4ea1c6ab0d3a555d0df685cd69b
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `T`:** The concrete root type to create.

## Parameters

**Parameter `bytes`:** The encoded bytes.

**Parameter `context`:** Optional immutable converter context.

## Returns

The restored object.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.

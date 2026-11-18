---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.54778d614563f12d1d866994a052f679eb482aa9c2ff0b6451e142f272e3bf13
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.Restore``1(``0,System.ReadOnlySpan{System.Byte},InnoEngine.Serialization.SerializationContext)
title: SerializationRegistry.Restore
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
sourceFingerprint: 5d3cf207a0fe6f4b34523a4ef0927b5d85d3127b3bb00a002c6be406f77596c9
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `T`:** The declared target contract.

## Parameters

**Parameter `target`:** The existing target object.

**Parameter `bytes`:** The encoded bytes.

**Parameter `context`:** Optional immutable converter context.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `target` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.

---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d0474b0bdf2e4347e2943d10b1908d4b580c4fa1fa17ce74b972db1b3a0a3fee
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.Decode``1(System.ReadOnlySpan{System.Byte},System.Func{InnoEngine.Serialization.SerializationReader,``0},InnoEngine.Serialization.SerializationContext)
title: SerializationRegistry.Decode
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: cf674950d4700d7dbfaf851f5f909a335883d3c4af51d7e3b86f7089bfefe1ba
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TResult`:** The result produced by the read callback.

## Parameters

**Parameter `bytes`:** The encoded bytes.

**Parameter `read`:** The callback that reads the root object.

**Parameter `context`:** Optional immutable converter context.

## Returns

The callback result after all completion callbacks succeed.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `read` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.

---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3dfb97ca6d8cc6bf6c8356132da5ab258e860b8c574a45d935408e4906cb66ab
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.Deserialize``1(System.ReadOnlySpan{System.Byte},InnoEngine.Serialization.SerializationContext)
title: SerializationRegistry.Deserialize
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: bea969b94f29b1b5a5e9d5b0e7fbad63756726702bc5a5e4071a38eeedc588cc
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

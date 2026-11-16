---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.40b28585a091f05e5f9ab82d06eb7adf5bcc845c94b13d634191412192dbf02e
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.Restore``1(``0,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationContext)
title: SerializationRegistry.Restore
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: bf97f5aaed31805c9a4c91fadff3613b57a29824b0c6d7b907fa15e5d05878b6
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

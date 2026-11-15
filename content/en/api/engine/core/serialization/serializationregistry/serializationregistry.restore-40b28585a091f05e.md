---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.40b28585a091f05e5f9ab82d06eb7adf5bcc845c94b13d634191412192dbf02e
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.Restore``1(``0,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationContext)
title: SerializationRegistry.Restore
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: ace368d73967b740e8684845938d26b298e1b9c01c814f7f524a26546ae01468

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Restores deterministic binary data into an existing serializable root object.

## Type parameters

**Type parameter `T`:** The declared target contract.

## Parameters

**Parameter `target`:** The existing target object.

**Parameter `bytes`:** The encoded bytes.

**Parameter `context`:** Optional immutable converter context.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `target` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.

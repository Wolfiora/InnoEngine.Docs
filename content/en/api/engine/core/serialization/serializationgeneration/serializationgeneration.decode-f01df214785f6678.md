---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f01df214785f667849166a673f5c8f20b2ecc0e51b01c23cbaaf83a8842775a1
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationGeneration.Decode``1(System.ReadOnlySpan{System.Byte},System.Func{Inno.Core.Serialization.SerializationReader,``0},Inno.Core.Serialization.SerializationContext)
title: SerializationGeneration.Decode
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: fcde6a0fb46cb9b7e7cd03462f02810f6b835a8ea565022b664488f794838513
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TResult`:** The result produced by the read callback.

## Parameters

**Parameter `bytes`:** Deterministic binary data containing the structured root.

**Parameter `read`:** The callback that consumes the complete root object.

**Parameter `context`:** Optional immutable converter context for this operation.

## Returns

The callback result after all restoration callbacks complete.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `read` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown when this generation has already been disposed.

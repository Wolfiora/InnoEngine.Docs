---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8f55419521464d6a1975341e40c8707b4d14da95e52d4e29c52b4332fc5fc925
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationGeneration.Serialize``1(``0,Inno.Core.Serialization.SerializationContext)
title: SerializationGeneration.Serialize
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: 09a769d4c0a650ff9bd13d7d1d03bb6e5fd1560473a952c74574093dc187e4f1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `T`:** The declared concrete root type.

## Parameters

**Parameter `value`:** The non-null root object to encode.

**Parameter `context`:** Optional immutable converter context for this operation.

## Returns

Deterministic binary data encoded by the captured converter generation.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown when this generation has already been disposed.

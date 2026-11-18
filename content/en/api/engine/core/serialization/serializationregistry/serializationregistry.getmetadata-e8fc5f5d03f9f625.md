---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e8fc5f5d03f9f6256421c1574894823803f448556566ed32e75e6e9cbf45f017
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.GetMetadata(System.Type)
title: SerializationRegistry.GetMetadata
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: 71fa25268bcf7f3857fd4e60ef331bc619818c7ba774812290d93f733045bda6
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `type`:** The exact declaration owned by the current serialization generation.

## Returns

Immutable declaration accessors owned by this generation; unsupported declarations throw. The caller must not retain the result across generation retirement.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The declaration is null.

**Exception `T:System.ObjectDisposedException`:** The registry has been disposed.

---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ef6b885a6b780721febde310815e385d0f2991bcf440ed958e4ed70df5550a4c
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationWriter.Write``1(System.String,``0)
title: SerializationWriter.Write
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: bf65618f57647e4ddc1730539c80166e896d0ba0e7f11590133a045d7255758e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TValue`:** The declared value type.

## Parameters

**Parameter `name`:** The unique non-empty member name.

**Parameter `value`:** The value to write.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `name` is empty.

**Exception `T:System.InvalidOperationException`:** Thrown when the name is duplicated or the value is unsupported.

---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ef6b885a6b780721febde310815e385d0f2991bcf440ed958e4ed70df5550a4c
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationWriter.Write``1(System.String,``0)
title: SerializationWriter.Write
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: b6725c84244d638ca36ceebff08a9e24592bf955b6b8d652932ac2c302fb1c79
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

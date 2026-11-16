---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2838744b8661404b32fa1b60b99836abccef50d7acacc224ec24af8e440867a0
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.GetProperties(Inno.Core.Serialization.ISerializable)
title: SerializationRegistry.GetProperties
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: 5ee876ce6edeaa9fc8cb2c670a7600b6b4741f2d476bd75865662a67bc6ba493
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** The object whose property metadata should be created.

## Returns

The properties that permit runtime reads.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.

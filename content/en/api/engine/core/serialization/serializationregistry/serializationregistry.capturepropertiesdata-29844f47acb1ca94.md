---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.29844f47acb1ca94e7a080075b5b2997c2270c6b51c6539fff2ec7e5ac68a427
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.CapturePropertiesData(Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.SerializationContext)
title: SerializationRegistry.CapturePropertiesData
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: 0b5be439857a3a905a293fa68c32b5f9fa82e4010afb8d341b76fa7c854d617a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** The serializable object whose persistent properties should be captured.

**Parameter `context`:** Optional immutable converter context.

## Returns

Strictly validated bytes containing independently encoded property values.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.

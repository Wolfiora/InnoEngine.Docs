---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.29844f47acb1ca94e7a080075b5b2997c2270c6b51c6539fff2ec7e5ac68a427
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.CapturePropertiesData(Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.SerializationContext)
title: SerializationRegistry.CapturePropertiesData
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: b7073cdcafb3e867f2b51794fae282927d95441d0659e7975d406f03e6eff45a
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

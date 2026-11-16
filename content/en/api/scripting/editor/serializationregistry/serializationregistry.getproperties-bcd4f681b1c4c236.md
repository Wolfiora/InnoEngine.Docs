---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bcd4f681b1c4c23668d2491e068a1ba14fa5fc5ffbab9fd79f2ab130a6d9d90e
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.GetProperties(InnoEngine.Serialization.ISerializable)
title: SerializationRegistry.GetProperties
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: 0022349e4ed40f581227fa3780d74fb93de9978450493f4489c0ba261d7c7c34
apiScope: Editor
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

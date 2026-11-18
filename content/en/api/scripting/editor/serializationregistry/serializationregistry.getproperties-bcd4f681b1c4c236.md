---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bcd4f681b1c4c23668d2491e068a1ba14fa5fc5ffbab9fd79f2ab130a6d9d90e
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.GetProperties(InnoEngine.Serialization.ISerializable)
title: SerializationRegistry.GetProperties
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
sourceFingerprint: 356fbe0925c3de512dcbdf2f5005d9f7545be0cbad905cfdaea637b4024ad5aa
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

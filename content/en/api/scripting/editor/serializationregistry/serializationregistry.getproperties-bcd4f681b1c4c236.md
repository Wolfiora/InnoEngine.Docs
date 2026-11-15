---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bcd4f681b1c4c23668d2491e068a1ba14fa5fc5ffbab9fd79f2ab130a6d9d90e
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.GetProperties(InnoEngine.Serialization.ISerializable)
title: SerializationRegistry.GetProperties
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: bc5d646295f0380e7f08c06718b07a8d01a964ad8b3f13eefb2f945b1631e3f6
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `value`:** The object whose property metadata should be created.

## Returns

The properties that permit runtime reads.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.

---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.39ad21cf6025d9cf2323c88ca64f56e4a3388eec9750218e56c56455f24a52c2
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.TryAddProperties(InnoEngine.Serialization.ISerializable)
title: SerializationCaptureKeyBuilder.TryAddProperties
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
sourceFingerprint: 7b269a7925ff411e1311ac8e8c5004a2d76e3b9c8cc6a113d423b591c5085303
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `source`:** The current serializable identity object.

## Returns

True for certified property state; false invalidates the complete key and requires normal capture.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Source is null.

**Exception `T:System.InvalidOperationException`:** Metadata/revision access fails, or the callback has retired or is accessed from another thread.

---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c7d3b5b4bda3742c09065382e125d853f8a02cfd1fef60e2aed57a74b5a2e300
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationWriter.Write``1(System.String,``0)
title: SerializationWriter.Write
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
sourceFingerprint: 166f449a5eca57d2edfbcbf6da37598f91c2caeb4e4ea84f263dc485dba0b356
apiScope: Runtime
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

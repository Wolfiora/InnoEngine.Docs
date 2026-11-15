---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f092406541dfffd1506b085112e6ed1281a4130c8a3705795960605a58052b68
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.AddValue(System.Guid)
title: SerializationCaptureKeyBuilder.AddValue
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: 6038e78a7fb943b555700220b9b36f7230425e0ed8710cd995e60e29809a0f1e
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Adds an exact neutral identifier without hashing or allocating text.

## Parameters

**Parameter `value`:** The current identifier input, including an empty identifier when meaningful.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The callback has retired or is accessed from another thread.

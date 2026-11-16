---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c7d3b5b4bda3742c09065382e125d853f8a02cfd1fef60e2aed57a74b5a2e300
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationWriter.Write``1(System.String,``0)
title: SerializationWriter.Write
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: 396fda8eda9cce32af961ce372fa9a6965a4ec46656c61a36c9b2c8c993bb1d0
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

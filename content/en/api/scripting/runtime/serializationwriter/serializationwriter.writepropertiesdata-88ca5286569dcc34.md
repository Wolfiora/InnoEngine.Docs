---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.88ca5286569dcc34a50dd4066a0507c7122d55509a64d0bc370bbc2bd8ff7f39
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationWriter.WritePropertiesData(System.String,InnoEngine.Serialization.ISerializable,InnoEngine.Serialization.SerializationContext)
title: SerializationWriter.WritePropertiesData
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: 4d94b414c8b1af7e08783b54d60caa064c50acd39ca4ceb9f7d4bc9da5ae3122
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `name`:** The unique member receiving the binary property snapshot.

**Parameter `value`:** The object whose persistent properties are captured once.

**Parameter `context`:** The complete owner context, or null to use this writer's context.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The source object is null.

**Exception `T:System.InvalidOperationException`:** The writer has ended, a key is duplicated, or capture fails.

**Exception `T:System.ArgumentException`:** The member name is empty.

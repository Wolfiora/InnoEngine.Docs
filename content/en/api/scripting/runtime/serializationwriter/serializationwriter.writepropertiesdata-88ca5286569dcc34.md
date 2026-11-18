---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.88ca5286569dcc34a50dd4066a0507c7122d55509a64d0bc370bbc2bd8ff7f39
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationWriter.WritePropertiesData(System.String,InnoEngine.Serialization.ISerializable,InnoEngine.Serialization.SerializationContext)
title: SerializationWriter.WritePropertiesData
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
sourceFingerprint: 942298d3d8af368af3e10b4f0f0cbdef4b976363a1ad040ac59a2dfc1146489b
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

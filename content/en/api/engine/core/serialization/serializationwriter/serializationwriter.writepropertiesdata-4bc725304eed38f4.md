---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4bc725304eed38f400a653707b1b94e99a369cef34dda1e194fa09d8657e31b1
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationWriter.WritePropertiesData(System.String,Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.SerializationContext)
title: SerializationWriter.WritePropertiesData
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: 240a3098d9ab991590edbbd1678bc167963d3ec4b50eae535bc0f8c9047edd0c
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

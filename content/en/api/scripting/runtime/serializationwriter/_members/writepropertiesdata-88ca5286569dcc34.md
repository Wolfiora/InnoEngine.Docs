---
uid: api.88ca5286569dcc34a50dd4066a0507c7122d55509a64d0bc370bbc2bd8ff7f39
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationWriter.WritePropertiesData(System.String,InnoEngine.Serialization.ISerializable,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 1f6e3854726087f8657bf5476e3e6a1555fd27d08f4cfc6c1054c9c0b77c0300
title: "WritePropertiesData"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Writes independently restorable property bytes through the current converter generation.

**Parameter `name`:** The unique member receiving the binary property snapshot.

**Parameter `value`:** The object whose persistent properties are captured once.

**Parameter `context`:** The complete owner context, or null to use this writer's context.

**Exception `T:System.ArgumentNullException`:** The source object is null.

**Exception `T:System.InvalidOperationException`:** The writer has ended, a key is duplicated, or capture fails.

**Exception `T:System.ArgumentException`:** The member name is empty.

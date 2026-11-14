---
uid: api.88ca5286569dcc34a50dd4066a0507c7122d55509a64d0bc370bbc2bd8ff7f39
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationWriter.WritePropertiesData(System.String,InnoEngine.Serialization.ISerializable,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: caeef5df838076cfe0558bb7616b7d98e7e409d09b2ea0e5ff0a3b3fcf418143
title: "SerializationWriter.WritePropertiesData"
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

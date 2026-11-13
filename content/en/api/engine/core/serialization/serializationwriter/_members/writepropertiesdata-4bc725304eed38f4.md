---
uid: api.4bc725304eed38f400a653707b1b94e99a369cef34dda1e194fa09d8657e31b1
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationWriter.WritePropertiesData(System.String,Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 47bae52e8f55297140ce88c18ca127d4ef2c093834f45df3680c0d62a29531bb
title: "WritePropertiesData"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Writes independently restorable property bytes through the current converter generation.

**Parameter `name`:** The unique member receiving the binary property snapshot.

**Parameter `value`:** The object whose persistent properties are captured once.

**Parameter `context`:** The complete owner context, or null to use this writer's context.

**Exception `T:System.ArgumentNullException`:** The source object is null.

**Exception `T:System.InvalidOperationException`:** The writer has ended, a key is duplicated, or capture fails.

**Exception `T:System.ArgumentException`:** The member name is empty.

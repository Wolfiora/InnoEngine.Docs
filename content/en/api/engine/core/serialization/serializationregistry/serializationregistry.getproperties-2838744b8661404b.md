---
uid: api.2838744b8661404b32fa1b60b99836abccef50d7acacc224ec24af8e440867a0
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.GetProperties(Inno.Core.Serialization.ISerializable)"
source: xml
reviewed: fd178ac79d681fd376de293b144b01502c0e5feec15eaa317e284161eb859d02
title: "SerializationRegistry.GetProperties"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Gets the stable ordered runtime-visible properties for a serializable object.

**Parameter `value`:** The object whose property metadata should be created.

**Returns:** The properties that permit runtime reads.

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.

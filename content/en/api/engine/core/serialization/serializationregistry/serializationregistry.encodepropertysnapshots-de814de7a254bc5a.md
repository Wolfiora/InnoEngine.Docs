---
uid: api.de814de7a254bc5a9f8df21cd1afee22230e0ad2d72e0fe604c475f4a9532ddb
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.EncodePropertySnapshots(System.Collections.Generic.IReadOnlyList{Inno.Core.Serialization.SerializationPropertySnapshot})"
source: xml
reviewed: 85c0113168e37c81d8ee41a3c9e0104cdc816fc853c102747949d8675c094f19
title: "SerializationRegistry.EncodePropertySnapshots"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Encodes an existing ordered set of independent property snapshots as neutral restoration bytes.

## Parameters

**Parameter `snapshots`:** Snapshots previously produced by `M:Inno.Core.Serialization.SerializationRegistry.CaptureProperties(Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.SerializationContext)`.

## Returns

Strictly validated bytes accepted by `M:Inno.Core.Serialization.SerializationRegistry.RestorePropertiesData(Inno.Core.Serialization.ISerializable,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationPropertyRestoreMode,Inno.Core.Serialization.SerializationContext)`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `snapshots` is `null`.

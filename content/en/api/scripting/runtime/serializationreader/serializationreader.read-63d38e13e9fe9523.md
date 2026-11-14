---
uid: api.63d38e13e9fe9523021f3c246cb01ba345330bb88fa10e5b49d4a0d743f50e74
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationReader.Read(System.String,System.Type)"
source: xml
reviewed: 089396a97dc5317f930fa482a676075a5183b84048cb37a656d1c9e520514484
title: "SerializationReader.Read"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Reads a value using its declared metadata type without constructing a generic method at runtime.

## Parameters

**Parameter `name`:** The required non-empty member name.

**Parameter `declaredType`:** The exact declaration whose converter and value semantics apply.

## Returns

The restored value, including null when the declaration permits it; invalid or missing data throws.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The declared type is null.

**Exception `T:System.ArgumentException`:** The member name is empty.

**Exception `T:System.InvalidOperationException`:** The operation has ended or the member is missing, incompatible or unsupported.

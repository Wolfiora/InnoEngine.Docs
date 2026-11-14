---
uid: api.bb4160c39e8d7bc1f44a5d6306305e95d41ef8e025ca8f909db97e9c8ac4d4f3
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationReader.Read(System.String,System.Type)"
source: xml
reviewed: a3ec61c320769185ccef3958ce9188a28e5ffc483908e45c66271ae475ddcc10
title: "SerializationReader.Read"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
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

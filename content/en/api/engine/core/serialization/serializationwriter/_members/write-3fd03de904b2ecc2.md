---
uid: api.3fd03de904b2ecc28c7d9dffbeb1e2763992c06a7e2a77fd8962bc61a3053fa7
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationWriter.Write(System.String,System.Object,System.Type)"
source: xml
reviewed: b1fa4c1e3c6477db482569b0502aefd5bbe878d0d1391499af1e010b8a738e05
title: "Write"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Writes a value using its declared metadata type without constructing a generic method at runtime.

**Parameter `name`:** The unique non-empty member name.

**Parameter `value`:** The value to encode, including null when permitted by the declared type.

**Parameter `declaredType`:** The exact declaration whose converter and value semantics apply.

**Exception `T:System.ArgumentNullException`:** The declared type is null.

**Exception `T:System.ArgumentException`:** The member name is empty.

**Exception `T:System.InvalidOperationException`:** The operation has ended, the name is duplicated, or the value is unsupported.

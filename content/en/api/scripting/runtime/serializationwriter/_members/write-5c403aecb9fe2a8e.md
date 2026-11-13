---
uid: api.5c403aecb9fe2a8ee83e0d92a841009abdcdf9606e7d70cc6c8dcf63f0e623ae
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationWriter.Write(System.String,System.Object,System.Type)"
source: xml
reviewed: 3371d8ca70be9637202a12f501d1790461e023d88c0674811b2aed6f72acf8d5
title: "Write"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Writes a value using its declared metadata type without constructing a generic method at runtime.

**Parameter `name`:** The unique non-empty member name.

**Parameter `value`:** The value to encode, including null when permitted by the declared type.

**Parameter `declaredType`:** The exact declaration whose converter and value semantics apply.

**Exception `T:System.ArgumentNullException`:** The declared type is null.

**Exception `T:System.ArgumentException`:** The member name is empty.

**Exception `T:System.InvalidOperationException`:** The operation has ended, the name is duplicated, or the value is unsupported.

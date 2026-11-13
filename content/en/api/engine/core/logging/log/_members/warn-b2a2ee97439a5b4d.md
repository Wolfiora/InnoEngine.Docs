---
uid: api.b2a2ee97439a5b4d1ca8e6d37afb89503196925f472cde79a21ef7925e36c7c0
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.Log.Warn(System.Type,System.Object,System.String,System.Int32)"
source: xml
reviewed: d9953007346815143b88f0972ea8606dcd66df8f2c5919d2bdd14550b4c39ae8
title: "Warn"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Writes a warn-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.

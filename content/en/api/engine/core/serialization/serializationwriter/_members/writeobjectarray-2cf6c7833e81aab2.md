---
uid: api.2cf6c7833e81aab229d31c8c21b864ad2f537d617c6a9e05bfdab556249d0e77
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationWriter.WriteObjectArray\u0060\u00601(System.String,System.Collections.Generic.IEnumerable{\u0060\u00600},System.Action{Inno.Core.Serialization.SerializationWriter,\u0060\u00600},System.Func{\u0060\u00600,Inno.Core.Serialization.SerializationCaptureKeyBuilder,System.Boolean})"
source: xml
reviewed: 27ddf68c48ec54a4cb2e5c64668fe2959ea93c793a0dd54f9344d8163673eb7e
title: "WriteObjectArray"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Writes an ordered array of structured objects.

**Type parameter `TValue`:** The source element type.

**Parameter `name`:** The unique non-empty member name.

**Parameter `values`:** The elements to write.

**Parameter `writeElement`:** The callback that fills each element object.

**Parameter `captureKey`:** An optional pure callback covering every element output and contextual input. It must declare a current Core identity owner and return true only for a complete proof. Snapshot capture alone can reuse a matching element; ordinary serialization always executes writeElement.

## Remarks

The key builder belongs only to its synchronous callback. Uncertified rows and rows that invoke nested converters execute the ordinary element writer on every capture. Callback failures and changed declared inputs abort publication without modifying a previous snapshot.

**Exception `T:System.ArgumentNullException`:** Values or writeElement is null.

**Exception `T:System.ArgumentException`:** The member name is null, empty or whitespace.

**Exception `T:System.InvalidOperationException`:** The writer has retired, a member is duplicated, or declared capture inputs change during writing.

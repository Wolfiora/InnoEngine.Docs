---
uid: api.2cf6c7833e81aab229d31c8c21b864ad2f537d617c6a9e05bfdab556249d0e77
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationWriter.WriteObjectArray\u0060\u00601(System.String,System.Collections.Generic.IEnumerable{\u0060\u00600},System.Action{Inno.Core.Serialization.SerializationWriter,\u0060\u00600},System.Func{\u0060\u00600,Inno.Core.Serialization.SerializationCaptureKeyBuilder,System.Boolean})"
source: xml
reviewed: 4de371a52adff26a4b30c7d11bf9b700827c5532791618787e9cae72286202f3
title: "SerializationWriter.WriteObjectArray"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Writes an ordered array of structured objects.

## Type parameters

**Type parameter `TValue`:** The source element type.

## Parameters

**Parameter `name`:** The unique non-empty member name.

**Parameter `values`:** The elements to write.

**Parameter `writeElement`:** The callback that fills each element object.

**Parameter `captureKey`:** An optional pure callback covering every element output and contextual input. It must declare a current Core identity owner and return true only for a complete proof. Snapshot capture alone can reuse a matching element; ordinary serialization always executes writeElement.

## Remarks

The key builder belongs only to its synchronous callback. Uncertified rows and rows that invoke nested converters execute the ordinary element writer on every capture. Callback failures and changed declared inputs abort publication without modifying a previous snapshot.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Values or writeElement is null.

**Exception `T:System.ArgumentException`:** The member name is null, empty or whitespace.

**Exception `T:System.InvalidOperationException`:** The writer has retired, a member is duplicated, or declared capture inputs change during writing.

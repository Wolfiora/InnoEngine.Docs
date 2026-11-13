---
uid: api.93fda15f941dd82af712f2bac49c2b684050282564a37228e361fe5ce11ee027
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationWriter.WriteObjectArray\u0060\u00601(System.String,System.Collections.Generic.IEnumerable{\u0060\u00600},System.Action{InnoEngine.Serialization.SerializationWriter,\u0060\u00600},System.Func{\u0060\u00600,InnoEngine.Serialization.SerializationCaptureKeyBuilder,System.Boolean})"
source: xml
reviewed: 78331da99d4fb09a018bf9ff3c3dd1f103fd4e3f52b4d9ab50284d05d4227bbb
title: "WriteObjectArray"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
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

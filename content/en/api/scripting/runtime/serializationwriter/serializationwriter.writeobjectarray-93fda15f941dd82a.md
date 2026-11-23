---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.93fda15f941dd82af712f2bac49c2b684050282564a37228e361fe5ce11ee027
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationWriter.WriteObjectArray``1(System.String,System.Collections.Generic.IEnumerable{``0},System.Action{InnoEngine.Serialization.SerializationWriter,``0},System.Func{``0,InnoEngine.Serialization.SerializationCaptureKeyBuilder,System.Boolean})
title: SerializationWriter.WriteObjectArray
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
sourceFingerprint: 78f8f3ff5b9ded4c188f5aca9b44c13a9b0c551f35c2a5c9d2be9e967fb9fa0a
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TValue`:** The source element type.

## Parameters

**Parameter `name`:** The unique non-empty member name.

**Parameter `values`:** The elements to write.

**Parameter `writeElement`:** The callback that fills each element object.

**Parameter `captureKey`:** An optional pure callback covering every element output and contextual input. It must declare a current Core identity owner and return true only for a complete proof. Snapshot capture alone can reuse a matching element; ordinary serialization always executes writeElement.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Values or writeElement is null.

**Exception `T:System.ArgumentException`:** The member name is null, empty or whitespace.

**Exception `T:System.InvalidOperationException`:** The writer has retired, a member is duplicated, or declared capture inputs change during writing.

## Remarks

The key builder belongs only to its synchronous callback. Uncertified rows and rows that invoke nested converters execute the ordinary element writer on every capture. Callback failures and changed declared inputs abort publication without modifying a previous snapshot.

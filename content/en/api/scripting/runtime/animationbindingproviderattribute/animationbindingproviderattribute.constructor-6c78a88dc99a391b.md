---
uid: api.6c78a88dc99a391b9909d2cd0821ddfe95de730e8dc3c8c26b54dad69b49f06d
symbol: "scripting:Inno.Animation:M:InnoEngine.Animation.AnimationBindingProviderAttribute.#ctor(System.String,System.String,InnoEngine.Animation.AnimationValueKind)"
source: xml
reviewed: 7483dd16ac1c1fda37f3d0634b6f319652bcdd5a79bfed6fce9f0849a68809ca
title: "AnimationBindingProviderAttribute.Constructor"
kind: api
owners: [Inno.Animation]
apiSurface: editor-script
apiScope: Runtime
---

Declares one provider and the value protocol it implements.

## Parameters

**Parameter `id`:** Globally unique stable extension identifier.

**Parameter `bindingId`:** Stable track binding protocol, independent of CLR type names.

**Parameter `kind`:** The accepted value representation.

## Exceptions

**Exception `T:System.ArgumentException`:** An identifier is blank or the value representation is undefined.

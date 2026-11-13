---
uid: api.6c78a88dc99a391b9909d2cd0821ddfe95de730e8dc3c8c26b54dad69b49f06d
symbol: "scripting:Inno.Animation:M:InnoEngine.Animation.AnimationBindingProviderAttribute.#ctor(System.String,System.String,InnoEngine.Animation.AnimationValueKind)"
source: xml
reviewed: 757e4ef4bdd060625d9c0c1ea355508a5aff959b3f7140bf109dc38f7d73e03b
title: "Constructor"
kind: api
owners: [Inno.Animation]
apiSurface: editor-script
apiScope: Runtime
---

Declares one provider and the value protocol it implements.

**Parameter `id`:** Globally unique stable extension identifier.

**Parameter `bindingId`:** Stable track binding protocol, independent of CLR type names.

**Parameter `kind`:** The accepted value representation.

**Exception `T:System.ArgumentException`:** An identifier is blank or the value representation is undefined.

---
uid: api.125ae72c982d2a335db7f41745a5442766f1c7cfd60e45b6ae7f6f82b19890c2
symbol: "engine:Inno.Animation:M:Inno.Animation.AnimationBindingProviderAttribute.#ctor(System.String,System.String,Inno.Animation.AnimationValueKind)"
source: xml
reviewed: 4f6350ecec202510b7698f8ba837a4e23ddf011fe3ed2e7774e9384058eced50
title: "AnimationBindingProviderAttribute.Constructor"
kind: api
owners: [Inno.Animation]
apiSurface: source-clr
---

Declares one provider and the value protocol it implements.

**Parameter `id`:** Globally unique stable extension identifier.

**Parameter `bindingId`:** Stable track binding protocol, independent of CLR type names.

**Parameter `kind`:** The accepted value representation.

**Exception `T:System.ArgumentException`:** An identifier is blank or the value representation is undefined.

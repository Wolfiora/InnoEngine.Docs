---
uid: api.59b95450696857a609301fb535f2b44274efc58f3a94ce0e3c6c5fe2eb71ad17
symbol: "engine:Inno.Storage:M:Inno.Storage.StorageScope.#ctor(System.String)"
source: xml
reviewed: 2bc259ed2666d46cb970e75904064d30a288e91c1667d758b6380a847601aa57
title: "StorageScope.Constructor"
kind: api
owners: [Inno.Storage]
apiSurface: source-clr
---

Captures a portable, case-sensitive application namespace.

## Parameters

**Parameter `value`:** A nonempty namespace containing ASCII letters, digits, dots, underscores, or hyphens.

## Exceptions

**Exception `T:System.ArgumentException`:** The namespace is empty, contains path syntax, has a leading or trailing dot, or contains a reserved portable device name.
